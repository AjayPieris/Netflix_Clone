import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Netflix Logo" />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img className="icons" src={search_icon} alt="Search" />
          <p>Childrean</p>
          <img className="icons" src={bell_icon} alt="Avatar" />
          <div className="navbar-profile">
            <img className="profile" src={profile_icon} alt="Profile" />
            <img className="icons" src={caret_icon} alt="Profile" />
            <div className="dropdown">
              <p>Sign Out of Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
