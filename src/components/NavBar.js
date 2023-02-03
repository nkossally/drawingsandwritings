import React from "react";
import { useLocation } from "react-router-dom";
import {  Link } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const link =
    location.pathname === "/essays" ? (
      <Link class="top-nav-button" to="cartoons">
        Cartoons
      </Link>
    ) : (
      <Link class="top-nav-button" to="essays">
        Essays
      </Link>
    );

  if (location.pathname === "/" || location.pathname === "/index") {
    return <div />;
  }
  return (
    <div class="top-navbar">
      <Link class="top-nav-button" to="index">
        Homepage
      </Link>
      {link}
    </div>
  );
};
export default NavBar;
