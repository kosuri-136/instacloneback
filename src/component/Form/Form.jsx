
// // import React, { useState } from "react";
// import Header from "../Header/Header";
// import "../../Styles/Form.css";
// import { Link, useNavigate } from "react-router-dom";
// // import { navigate } from "react-router-dom";
// import React, { useState,useEffect } from "react";
// import "../../Styles/Form.css";
// import axios from 'axios';
// import PostView from "../PostView/PostView";
// // import { useNavigate } from "react-router-dom";



// const Form = () => {
//   const [flag , setFlag]=useState(false);
//   const [author, setAuthor] = useState("");
//   const [location, setLocation] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [allData ,setAllData]=useState([]);
//   const navigate = useNavigate();





//   useEffect(()=>{
//     fetchData();
//   },[]);

//   const fetchData = async () => {
//     try{
//         const response = await axios.get('http://localhost:3002/postview');
//         setAllData(response.data);
//     }catch(error){
//         console.log(error);
//     }
//   };

//   const takeImageFile = (e)=>{
//     setImageFile(e.target.value);
//   };
//   const takeAuthor = (e)=>{
//     setAuthor(e.target.value);
//   };
//   const takeLocation = (e)=>{
//     setLocation(e.target.value);
//   };
//   const takeDescription= (e)=>{
//     setDescription(e.target.value);
//   };
//   const togglePopup = ()=>{
//     setFlag(!flag);
//   };

//   const upload = async ()=>{
//     // window.location.reload();
//     // setFlag(flag)
//     try{
//         await axios.post('http://localhost:3002/postview',{
//         imageFile:imageFile,
//         name :author,
//         location:location,
//         description:description,
     
//     });
//     navigate("/postview")
//     alert('success');
//     fetchData();
    
//     // navigate("/postview"); // Redirect to the PostView page
// }
//     catch(error){
//         alert('Failed')
//         console.log(error);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       {/* <PostView data={allData} /> */}

//       {!flag && ( <div className="form">
//         <form>
//           <input
//             type="file"
//             onChange={takeImageFile}
//             placeholder="inster an image or drag"
//           />
//           <input
//             type="text"
//             placeholder="Author"
//             onChange={takeAuthor}
//             value={author}
//           />
//           <input
//             type="text"
//             placeholder="Location"
//             onChange={takeLocation}
//             value={location}
//           />
//           <textarea
//             cols="30"
//             rows="2"
//             placeholder="Description"
//             onChange={takeDescription}
//             value={description}
//           />

//       {/* <Link to="/postview"> */}
//           <button className="btn" onClick={upload}>  Post  </button>
        
         
//           {/* </ Link> */}
//           <button onClick={togglePopup}>CANCEL</button>
//         </form>
//       </div>
    
//       )}
//       {allData.length > 0 && <PostView data={allData} />}

//       </div>
//   );
// };

// export default Form;




/////////////////////////

// import React, { useState, useEffect } from "react";
// import Header from "../Header/Header";
// import "../../Styles/Form.css";
// import axios from "axios";
// import PostView from "../PostView/PostView";
// // import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';


// const Form = () => {
//   const [flag, setFlag] = useState(false);
//   const [author, setAuthor] = useState("");
//   const [location, setLocation] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [allData, setAllData] = useState([]);
//   const navigate = useNavigate();

  
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:3003/postview");
//       setAllData(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const takeImageFile = (e) => {
//   setImageFile(e.target.files[0]);
// };

//   const takeAuthor = (e) => {
//     setAuthor(e.target.value);
//   };
//   const takeLocation = (e) => {
//     setLocation(e.target.value);
//   };
//   const takeDescription = (e) => {
//     setDescription(e.target.value);
//   };
//   const togglePopup = () => {
//     setFlag(!flag);
//   };

//   const upload = async () => 
//   {
//     try {
//       const formData = new FormData();
//       formData.append('imageFile', imageFile);
//       formData.append('name', author);
//       formData.append('location', location);
//       formData.append('description', description);

//       // let response; // Declare the response variable

//      const response =  await axios.post("http://localhost:3003/postview", 
//       formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       //   {
     
//       //   imageFile: imageFile,
//       //   name: author,
//       //   location: location,
//       //   description: description,
//       // });
//       alert("Success"); // Alert success message

//       fetchData(); // Fetch the updated post
//       setAllData([...allData, response.data]);
//       navigate("/postview"); // Redirect to the PostView page

//      // Redirect to the PostView page
//     } catch (error) {
//       alert("Failed");
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <Header />

//       {!flag && (
//         <div className="form">
//           <form  encType="multipart/form-data">
//             <input
//              type="file" name="imageFile"
//               onChange={takeImageFile}
//               placeholder="inster an image or drag"
//             />
//             <input
//               type="text"
//               placeholder="Author"
//               onChange={takeAuthor}
//               value={author}
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               onChange={takeLocation}
//               value={location}
//             />
//             <textarea
//               cols="30"
//               rows="2"
//               placeholder="Description"
//               onChange={takeDescription}
//               value={description}
//             />

//             <button className="btn" onClick={upload}>
//               Post
//             </button>

//             <button onClick={() => setFlag(!flag)}>CANCEL</button>
//           </form>
//         </div>
//       )}
     
//     </div>
//   );
// };

// export default Form;



//..................................

import React, { useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../Styles/Form.css";

const Form = () => {
  const [author, setAuthor] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const takeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const takeLocation = (e) => {
    setLocation(e.target.value);
  };

  const takeDescription = (e) => {
    setDescription(e.target.value);
  };

  const takeImageFile = (e) => {
    setImageFile(e.target.files[0]);
  };

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("imageFile", imageFile);
      formData.append("name", author);
      formData.append("location", location);
      formData.append("description", description);

      const response = await axios.post("http://localhost:3003/postview", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },   navigate("/postview"),
      alert("Success"));

   
      window.location.reload(); // Refresh the page
    } catch (error) {
      alert("Failed");
      console.log(error);
    }
  };

  return (
    <div>
      <Header />

      <div className="form">
        <form encType="multipart/form-data">
          <input type="file" name="imageFile" onChange={takeImageFile} placeholder="Insert an image or drag" />
          <input type="text" placeholder="Author" onChange={takeAuthor} value={author} />
          <input type="text" placeholder="Location" onChange={takeLocation} value={location} />
          <textarea cols="30" rows="2" placeholder="Description" onChange={takeDescription} value={description} />

          <button className="btn" onClick={upload}>
            Post
          </button>

          <button onClick={() => navigate("/postview")}>CANCEL</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
