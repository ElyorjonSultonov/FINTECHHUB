import React from "react";
import "./Navbar.css";
import { InputIcons } from "../../assets/Svgs";
import { Logo } from "../../assets/Svgs";
import { Avatar } from "../../assets/Svgs";
import { OpenBtn } from "../../assets/Svgs";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="courses">
            <h1>KURSLAR</h1>
            <div>{InputIcons}</div>
          </div>
          <div className="logo">{Logo}</div>
          <div className="avatar">
            <div className="avatarIcon">{Avatar}</div>
            <div className="menuBtn">{OpenBtn}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
