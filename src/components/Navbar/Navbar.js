import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav_row">
        <div className="logo">
          <h4>Rohan</h4>
        </div>
        <button type="button" className="nav_toggler">
          <span></span>
        </button>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
