// import { Link } from "react-router-dom";
// import lens from "../../Images/lens-1418954.png";
// import "../../Styles/LandingPage.css";


// const LandingPage = () => {
//     return(
//         <div className="landing-page">
//             <div>
//                 <img src={lens} alt="Lens"/>
//             </div>
//             <div className="text-right">
//                 <p>10x Team 04</p>
//                 <Link to={"/postview"} >
//                     <button> Enter </button>
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default LandingPage;



import React from "react";
import { Link } from "react-router-dom";
import lens from "../Images/lens.png";
import "../stylescss/landingpage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
          <div>
            <img className="landimg" src={lens} alt="Lens" />
          </div>
          <div className="text-right">
            <p>10x Team 04</p>
            <Link to={"/postview"}>
              <button>Enter</button>
            </Link>
          </div>
    </div>
  );
};

export default LandingPage;
