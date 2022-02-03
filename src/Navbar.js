import React from "react";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
function Navbar() {
    return(

        
       
        <div className="container">
        <div className="header">
          <nav className="navbar navbar-expand-lg navbar-light header-nav">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand fs-3 "><i className="fas fa-laptop-code" /></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="fs-5 collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                  </li>
                  <li className="nav-item header-nav">
                    <Link to="/About" className="nav-link text-dark" href="#">About us</Link>
                  </li>
                  <Link to="/Project" className="nav-link text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Our Project
                  </Link>
                  <li className="nav-item">
                    <Link to="/Contact" className="nav-link text-dark" href="#" tabIndex={-1} aria-disabled="true">Contact us</Link>
                  </li>
                  <li className="nav-item header-nav">
                    <Link to="/Riview" className="nav-link text-dark" href="#">Our Review</Link>
                  </li>             
                </ul>  
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
      

    )
}

export default Navbar;