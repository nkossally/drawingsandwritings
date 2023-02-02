import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Essays from "./components/Essays";
import Cartoons from "./components/Cartoons";

import { useLocation } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />

        <Route path="essays" element={<Essays />} />
        <Route path="cartoons" element={<Cartoons />} />

        {/* <App /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
