// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// app.use(express.json());
// const cors = require("cors");
// app.use(cors());

// const layout = require('./model');
// // // ...
// // app.listen(3000,()=>{
// //     console.log("connected to 3000 port");
// // })

// // Database connection
// mongoose.connect('mongodb+srv://kosuriravikanth:Mongo553136@kosuri.m6mwpbj.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.log('Failed to connect to MongoDB:', error);
//   });

// // ...

// app.post('/postview', async (req, res) => {
//     const { imageFile, name, location, description } = req.body;
  
//     try {
//       const newPost = new layout({
//         PostImage: imageFile,
//         name: name,
//         location: location,
//         description: description,
//       });
  
//       await newPost.save();
  
//       // Fetch all posts after saving the new post
//       const posts = await layout.find();
//       res.status(200).json(posts);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ error: 'Failed to save post' });
//     }
//   });

//   app.get('/postview', async (req, res) => {
//     try {
//       const posts = await layout.find();
//       res.status(200).json(posts);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ error: 'Failed to fetch posts' });
//     }
//   });
  
//   app.listen(3002, () => {
//     console.log("Connected to 3002 port");
//   });
  
///////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const layout = require('./model');

const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Database connection
// mongodb+srv://kosuriravikanth:Mongo553136@cluster0.cvvip5o.mongodb.net/test
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Failed to connect to MongoDB:', error);
  });

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '..','backend' , 'uploads')); // Update the destination path
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});


// Initialize multer upload
const upload = multer({ storage: storage });

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

// Enable CORS with options
app.use(cors(corsOptions));

// Handle file upload
app.post('/postview', upload.single('imageFile'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const { filename } = req.file;
  const { name, location, description } = req.body;

  try {
    const newPost = new layout({
      PostImage: filename,
      name: name, // Use name instead of author
      location: location,
      description: description,
      date: new Date().toISOString(), // Set the date field to the current date
      likes: "0", // Set initial likes to 0
    });

    await newPost.save();

    // Fetch all posts after saving the new post
    const posts = await layout.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to save post' });
  }
});

// Fetch all posts
app.get('/postview', async (req, res) => {
  try {
    const posts = await layout.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.listen(process.env.PORT, (err) => {
  if (!err) {
      console.log("server is running")
  } else {
      console.log(err)
  }
})





/////////////

// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const dotenv = require('dotenv');
// const layout = require('./model');


// dotenv.config(); // Load environment variables from .env file
// app.use(cors());
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));
// //mongoose connection

// mongoose.connect(process.env.MONGO_URL,
//     { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
//         console.log('Connected')
//     }).catch((err)=>{
//         console.log("==============>Error:",err)
//     })
// app.listen(process.env.PORT, (err) => {
//     if (!err) {
//         console.log("server is running")
//     } else {
//         console.log(err)
//     }
// })
// app.get('/', (req, res) => {
//     res.send('Server running')
// });
// app.post('/postview', (req, res) => {
//     const name = req.body.name;
//     const location = req.body.location;
//     const likes = req.body.likes;
//     const description = req.body.description;
//     const PostImage = req.body.PostImage;
//     const date = new Date().toISOString();
//     layout.create({
//         name, location, likes, description, PostImage, date
//     }).then((user) => {
//         console.log(user.name, 'created successfully')
//         res.send('Data Sent')
//     }).catch((err) => {
//         console.log(err);
//     })
// })
// app.get('/postview', (req, res) => {
//     layout.find().then((data) => {
//         res.json(data);
//     }).catch((err) => {
//         console.log(err);
//     })
// })