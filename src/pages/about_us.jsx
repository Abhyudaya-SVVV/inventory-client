import React from "react";
import { Link } from 'react-router-dom';
import "../style/about_us.scss";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const about_us = () => {
  return (
    <>
      <div className="about-us-heading">
        <h1>About Developers</h1>
      </div>
      <div className="cards-wrapper">
        <div class="card">
          <div class="card-photo">
            {/* <img src="" alt="" /> */}
          </div>
          <div class="card-title">
            Mayank Matkar <br />
            <span>Backend Developer</span>
          </div>
          <div class="card-socials">
           <Link to="/"> <IoLogoInstagram /> </Link> 
           <Link to="/"> <FaLinkedin /> </Link> 
           <Link to="/">  <FaGithub /> </Link> 
          </div>
        </div>
        <div class="card">
          <div class="card-photo">
            <img src={"/assets/profile.jpeg"} alt="" />
          </div>
          <div class="card-title">
            Aditya Patel <br />
            <span>Frontend Developer</span>
          </div>
          <div class="card-socials">
          <Link to="/"> <IoLogoInstagram /> </Link> 
           <Link to="/"> <FaLinkedin /> </Link> 
           <Link to="/">  <FaGithub /> </Link> 
          </div>
        </div>
        <div class="card">
          <div class="card-photo"></div>
          <div class="card-title">
            JOHN DOE <br />
            <span>Fullstack dev &amp; UX UI</span>
          </div>
          <div class="card-socials">
          <Link to="/"> <IoLogoInstagram /> </Link> 
           <Link to="/"> <FaLinkedin /> </Link> 
           <Link to="/">  <FaGithub /> </Link> 
          </div>
        </div>
        <div class="card">
          <div class="card-photo"></div>
          <div class="card-title">
            JOHN DOE <br />
            <span>Fullstack dev &amp; UX UI</span>
          </div>
          <div class="card-socials">
          <Link to="/"> <IoLogoInstagram /> </Link> 
           <Link to="/"> <FaLinkedin /> </Link> 
           <Link to="/">  <FaGithub /> </Link> 
          </div>
        </div>
      </div>
    </>
  );
};

export default about_us;
