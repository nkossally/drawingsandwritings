import React from "react";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const link =
    location.pathname === "/essays" ? (
      <a class="top-nav-button" href="cartoons">
        Cartoons
      </a>
    ) : (
      <a class="top-nav-button" href="essays">
        Essays
      </a>
    );

  if (location.pathname === "/" || location.pathname === "/index") {
    return <div />;
  }
  return (
    <div class="top-navbar">
      <a class="top-nav-button" href="index">
        Homepage
      </a>
      {link}
    </div>
  );
};
export default NavBar;
