// import Header from "../Header/Header";
// import "../../Styles/PostView.css";
// import { useEffect } from "react";
// import { useState } from "react";

// const PostView = () => {
//     const [apiData, setApiData] = useState(null);
//     const fetchCall =async () => {
//         const res = await fetch("https://insta-clone-sx8n.onrender.com/postview");
//         setApiData(await res.json());
//     }

//     useEffect(() => {
//         fetchCall()
//     }, [])

//     return(
//         <div className="postview-page">
//         <Header/>
//         <div>
//             {
//                 apiData === null ? <><h1>Loading content</h1> <h1> please wait...</h1></> : null
//             }
//         </div>
//         <div>
//             { apiData &&
//                 apiData.data.map((data, index) => {
//                     return(
//                         <ul key={index} className="post-data">
//                             <li className="post-author">{data.author}</li>
//                             <li className="post-location">{data.location}</li>
//                             <li>
//                                 <img src={`https://insta-clone-sx8n.onrender.com/images/${data.imageFile}`} alt="poster" className="post-image"/>
//                             </li>
//                             <li className="post-lokes">{data.likes}likes</li>
//                             <li className="post-date">{data.date}</li>
//                             <li className="post-description">{data.description}</li>
//                         </ul>
//                     )
//                 })
//             }
//         </div>
//         </div>
//     )
// }

// export default PostView; 
///////////////////////////////////////////////////////////////////   
// import React from "react";
// import Header from "../Header/Header";
// import "../../Styles/PostView.css";
// import heart from "../../Images/heart.png"
// import share from "../../Images/share.png"
// // import { Link } from "react-router-dom";
// import axios from "axios";


// const PostView = ({ data }) => {
//   const [allData, setAllData] = useState([]);

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


//   const postData = [
//     {
//       author: "RAVIKANTH",
//       location: "BANGALORE",
//       imageFile:
//         "https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg",
//       likes: 10,
//       date: "2023-06-01",
//       description: "This is a post",
//     },
//     {
//       author: "THGANESHAOR",
//       location: "Los Angeles",
//       imageFile:
//         "https://images.news18.com/ibnlive/uploads/2022/08/lord-ganesha-ganesh-festival-700-172145429-16618403903x2.jpg?impolicy=website&width=510&height=356",
//       likes: 5,
//       date: "2023-06-02",
//       description: "Another post",
//     },
//     {
//         author: "THORAVIKANTH",
//         location: "Los Angeles",
//         imageFile:
//           "https://c4.wallpaperflare.com/wallpaper/143/344/969/spider-man-homecoming-2017-spider-man-marvel-comics-new-york-city-wallpaper-preview.jpg",
//         likes: 5,
//         date: "2023-06-02",
//         description: "Another post",
//       }
//   ];

//   return (
//     <div className="postview-page">
//         {<Header />}
//       <div className="postbox"> 
//         {postData.map((data, index) => {
//           return (
       
//             <div key={index} className="post-data">
//               <div className="post-author">{data.author}</div>
//               <div className="post-location">{data.location}</div>
//               <div>
//                 <img
//                   src={data.imageFile}
//                   alt="poster"
//                   className="post-image"
//                 />
//               </div>
//               <div className="footer">
//                 <div className="heartshare">
//                  <span><span className="heart"><img src={heart} alt='heart' style={{  width: "25px", height: "25px" }}/>   </span></span>
//                  <span className="share"><img src={share} alt='share' style={{  width: "25px", height: "25px"  }}/> </span>
//                 </div>
//             </div>
//             <div className="likedate">
//               <span className="post-likes">{data.likes} likes</span>
//               <span className="post-date">{data.date}</span>
//             </div>
//             <div>
//               <span className="post-description">{data.description}</span>
//             </div>
//             </div>
           
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PostView;


///////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import "../../Styles/PostView.css";
import heart from "../../Images/heart.png";
import share from "../../Images/share.png";
import axios from "axios";
import "../../Styles/Form.css";

const PostView = () => {
  const data = {
    date: "2023-06-03T17:49:40.113Z",
  };

  const date = new Date(data.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

 
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3003/postview");
      setAllData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="postview-page">
      <Header />
     
        {allData.map((data, index) => (


          <div key={index} className="mainbox">


              <div className="topbox">
                  <div className="name">{data.name}</div>
                  <div className="location">{data.location}</div>
              </div>
              <div className="middlebox"><img src={`/backend/uploads/${data.PostImage}`} alt="poster" className="post-image" />
              </div>
              <div className="bottombox">
                  <span className="heartshare">  
                         <span className="heart"><img src={heart} alt="heart" style={{ width: "25px", height: "25px" }} /> </span> 
                          <img src={share} alt="share" style={{ width: "25px", height: "25px" }} />    
                  </span>
             
            <div className="likedate">
              <span className="post-likes">30 likes</span>
              <span className="post-date">{formattedDate}</span>
            </div>
            <div>
              <span className="post-description">{data.description}</span>
            </div>
            </div>
            </div>





        
        
        ))}
      
    </div>
  );
};

export default PostView;
