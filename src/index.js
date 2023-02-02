import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Essays from "./components/Essays";
import Cartoons from "./components/Cartoons";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <React.StrictMode>
    <HashRouter  basename="/">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="index" element={<Home />} />

        <Route path="essays" element={<Essays />} />
        <Route path="cartoons" element={<Cartoons />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);


// ReactDOM.render(
//   <React.StrictMode>
//     <HashRouter  basename="/">
//       <NavBar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="index" element={<Home />} />

//         <Route path="essays" element={<Essays />} />
//         <Route path="cartoons" element={<Cartoons />} />
//       </Routes>
//     </HashRouter>
//   </React.StrictMode>
//   , document.getElementById('root'));