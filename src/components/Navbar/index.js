import React from "react";
//import { Link } from "react-router-dom";
import "./style.css";
// import { tsPropertySignature } from "@babel/types";
//import Home from "../../pages/Home";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
   
    <nav className="navbar navi sticky-top navbar-light bg-warning">
    <h2>Clicky Game</h2>
      <ul className="navbar-nav"> 
          <li>Click an image to begin!</li>
          <li className="nav-item brand2">Score: {props.score} &nbsp; |&nbsp;  Top Score: {props.topScore}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
