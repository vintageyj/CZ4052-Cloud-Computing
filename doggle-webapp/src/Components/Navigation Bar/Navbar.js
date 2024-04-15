import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./dog_logo.svg";

function Header() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar-color">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="issues" className="logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
