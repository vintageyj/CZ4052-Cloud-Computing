import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./dog_logo.svg";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar-color">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="issues" className="logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/encylcopedia">
                Encyclopedia
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
