import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar_sec.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import icon from "../image/icon.png";
import Carousel from "../carousel/carousel.jsx"
import "../carousel/carousel.css"
import Card from "../card/card.jsx";


function Homepage() {
  return (
    <>

    {/* Navbar-Sec */}
      <nav className="navbar navbar-expand-lg my-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={icon} className="imagesec" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 homelink">
              <li className="nav-item">
                <a className="nav-link active " href="#">
                  Home
                </a>
              </li>
              <li className="nav-item linkss">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>

            <li className="nav-item dropdown dropdowns">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu dropdown-menus">
                <li>
                  <a className="dropdown-item" href="#">
                    signup
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    login
                  </a>
                </li>
              </ul>
            </li>

            <form className="d-flex inputs">
              <input
                className="form-control me-2 input"
                type="search"
                placeholder="Search"
              />
              
            </form>
          </div>
        </div>
      </nav>
        <hr></hr>
    <Carousel/>
      <Card/>
    
    </>
  );
}

export default Homepage;
