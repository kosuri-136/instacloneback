// import LandingPage from "./LandingPage/LandingPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PostView from "./PostView/PostView";
// import Form from "./Form/Form";


// function App(){
//     return(
//         <div className="app-wrapper">
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<LandingPage/>}/>
//                     <Route path="/postview" element={<PostView/>}/>
//                     <Route path="/form" element={<Form/>}/>
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }

// export default App;


// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from "./LandingPage/LandingPage";
// import PostView from "./PostView/PostView";
// import Form from "./Form/Form";

// function App() {
//   return (
//     <div className="app-wrapper">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/postview" element={<PostView />} />
//           <Route path="/form" element={<Form />} />

//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


/////////////////////////////

// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import PostView from "./PostView";
import Form from "./Form";
// import { useNavigate } from 'react-router-dom';


function App() {
  // const [allData, setAllData] = useState([]); // Declare and initialize allData state
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<LandingPage />} />
          <Route path="/postview" element={<PostView />} />
          <Route path="/form" element={<Form />} />
     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
