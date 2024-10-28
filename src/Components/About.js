import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Banquet</h1>
      <p className="about-subtitle">Creating Unforgettable Moments</p>
      <div className="about-content">
        <p>
          At Banquet, we believe that every event is a story waiting to be told. Our venues and services are crafted with elegance, style, and personal touches that turn ordinary events into extraordinary memories.
        </p>
        <p>
          Whether you're planning a wedding, corporate event, or private gathering, our experienced team is dedicated to making every detail perfect. From the ambiance to the cuisine, Banquet offers a blend of tradition and luxury to bring your vision to life.
        </p>
      </div>
      
      {/* Image gallery section */}
      <div className="about-gallery">
        <img src="/images/images2.avif" alt="Banquet Hall 1" className="gallery-img" />
        <img src="/images/download (1).jfif" alt="Banquet Hall 2" className="gallery-img" />
        <img src="/images/download.jfif" alt="Banquet Event" className="gallery-img" />
        <img src="/images/images.jfif" alt="Banquet Setup" className="gallery-img" />
      </div>
    </div>
  );
};

export default About;
