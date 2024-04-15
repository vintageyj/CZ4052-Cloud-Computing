import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const logo = "../images/dog_logo.svg";

  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar-color">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* <img src={logo} alt="issues" /> */}
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
