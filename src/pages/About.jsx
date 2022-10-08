import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import './About.css'

const About = () => {
  return (
    <div className="div-container">
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default About;
