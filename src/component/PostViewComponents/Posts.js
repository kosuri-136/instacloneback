import React from "react";
// import Header from "./PostViewComponents/Header";
import "../../stylescss/PostView.css";
import heart from "../../Images/heart.png";
import share from "../../Images/share.png";
import "../../stylescss/form.css";
import '../../stylescss/card.css'

const Posts = (props) => {
    const user = props.data;
    return (
   
          <div  className="mainbox">
              <div className="topbox">
                  <div className="name">{user.name}</div>
                  <div className="location">{user.location}</div>
              </div>
              <div className="middlebox"><img src={user.PostImage} alt="poster" className="post-image" />
              </div>
              <div className="bottombox">
                  <span className="heartshare">  
                         <span className="heart"><img src={heart} alt="heart" style={{ width: "25px", height: "25px" }} /> </span> 
                          <img src={share} alt="share" style={{ width: "25px", height: "25px" }} />    
                  </span>
             
            <div className="likedate">
              <span className="post-likes">{user.likes} likes</span>
              <span className="post-date">{user.date}</span>
            </div>
            <div>
              <span className="post-description">{user.description}</span>
            </div>
            </div>
            </div>
        
 
      
  
  );
};

export default Posts;
