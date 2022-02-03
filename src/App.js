import logo from './logo.svg';
import './App.css';
import Home from './badhon1/Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Riview from './Review';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Navbar from './Navbar';


function App(){
  return(

    


    <BrowserRouter>
   
    
    
    <Navbar/>
    
    
    
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/About" element={<About/>} />
        <Route  path="/Project" element={<Project/>} />
        <Route  path="/Contact" element={<Contact/>} />
        <Route exact path="/Riview" element={<Riview/>} />
      </Routes>
     





      <div className="container">
        <div className="footer">
          <div className="row">
            <div className="col-lg-4 footer-part">
              <h3>More About</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <i>-Badhon</i>
            </div>
            <div className="col-lg-4 f-link">
              <h3>Keep Connected</h3>
              <div className="f-link-icon">
                <span><i className="fab fa-facebook" /><a href="#">Facebook</a></span><p />
                <span><i className="fab fa-twitter-square" /><a href="#">Twitter</a></span><p />
                <span><i className="fab fa-linkedin" /><a href="#">LinkedIn</a></span><p />
                <span><i className="fab fa-amazon" /><a href="#">Amazon</a></span><p />
                <span><i className="fab fa-aws" /><a href="#">Amazon Web Server</a></span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <a href="#">bayozidbostamibadhon@gmail.com</a><p />
                <span>Vitargarh,Panchagarh</span><p />
                <span>Road No. 743</span>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
        <div className="footer2">
          <div className="row">
            <div className="col-lg-9 footer2-p">
              <span><i>-Made By Badhon</i></span> 
            </div>
            <div className="col-lg-3">
              <span>©Copyright Claim</span>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>


    /* 
    <BrowserRouter>
    <div class="container">
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light header-nav">
            <div class="container-fluid">
              <a class="navbar-brand fs-3 " href="#"><i class="fas fa-laptop-code"></i></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="fs-5 collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                   <link to="/">Home</link>
                  </li>
                  <li class="nav-item header-nav">
                   <link to="/about">About us</link>
                  </li>
                    <link to="/project">Our Project</link>  
                    <li class="nav-item">
                      <link to="/contact">Contact us</link>
                    </li>
                    <li class="nav-item header-nav">
                      <link to="/review">Our Review</link>
                    </li>             
                </ul>  
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
    </div>
    </div>

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/review" element={<Riview/>} />
      </Routes>
    </BrowserRouter> */ 
  );
}

export default App;
