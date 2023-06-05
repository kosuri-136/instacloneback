import React from 'react';
import logo from "../../Images/icon.svg";
import camera from "../../Images/camera.png";
import "../../stylescss/header.css";
import { Link } from "react-router-dom";
// import React, { useState, useHistory } from "react";
// import { navigate } from "react-router-dom";
// import React, { useState,useEffect } from "react";

const Header = () => {
//     const [flag , setFlag]=useState(false);

// const togglePopup = ()=>{
//     setFlag(!flag);
//   };
    return(
        <div className="header">
            <div className="insta-logo">
                <img src={logo} alt="logo" id="logo"/>
                <p>Instaclone</p>
            </div>
          
            <div>
          <span>
            <Link to="/form">
            <img className="imgg" src={camera}  alt='cameraimg'  style={{  width: "54px", height: "54px"}}  />
            </Link>
            </span>
            </div>
        </div>
        // <PostView data={allData} />
    )

    }
export default Header;