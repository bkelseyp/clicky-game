import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { tsPropertySignature } from "@babel/types";
//import Home from "../../pages/Home";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
   
    <nav className="navbar sticky-top navbar-light bg-primary">
      <Link className="navbar-brand mb-0 h1 text-white brandFont" to="/">
        Clicky Game
      </Link>
    
    </nav>
  );
}

export default Navbar;
