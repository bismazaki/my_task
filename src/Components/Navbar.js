import React from 'react';
import '../App.css';
import About from './About';
import Carousel from './Carousel';
import Contact from './Contact';
import Footer from './Footer';

const Navbar = () => {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand custom-brand" href="/">Banquet</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft: '25px' }}>
            <ul className="navbar-nav custom-nav-links">
              <li className="nav-item">
                <a className="nav-link active custom-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <Carousel/>
    <About/>
    <Contact/>
    <div className='mt-5'>
    <Footer/>
    </div>
    
    </>
  );
  
};

export default Navbar;
