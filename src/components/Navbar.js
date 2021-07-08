import React from "react";
import logo from "../logo.png";

//react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">

    <a className="navbar-brand" href="https://github.com/sheymanidze"><img className="logo" src={logo} alt="logo"></img></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style ={{color: "#fff"}}/>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="https://github.com/sheymanidze">Home <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/sheymanidze">about me</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/sheymanidze">portfolio</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/sheymanidze">skills</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/sheymanidze">contact me</a>
        </li> 
      </ul>
    </div>
    </div>
  </nav>
  );
}

export default Navbar
