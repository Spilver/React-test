
import React from "react";
import { Link } from "react-router-dom";
import "./NavbarElements.css";
  
    function Navbar() {
      return (
        <nav className="topnav">
              <Link className="active" to="/">Home</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/server">Server</Link>
              <Link to="/about">Nosotros</Link>
              <Link className="signup" to="/welcome">Ingresar</Link>

        </nav>
      );
    }
    
    export default Navbar;