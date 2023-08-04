import React, { useState, useEffect } from "react";

import "./Navbar.css";

import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Experiences from "./Pages/Experiences";
import Background from "./Background";
import CustomCursor from "../CustomCursor";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <>
      <CustomCursor />
      <nav>
        <div className="smallName">Waqar Ul-Hassan</div>
        {(toggleMenu || screenWidth > 769) && (
          <ul className="list">
            <div className="name">Waqar Ul-Hassan</div>
            <a href="#About_Me" className="navAbout">
              About Me
            </a>
            <a href="#Projects" className="navProjects">
              Projects
            </a>
            <a href="#Experiences" className="navExperience">
              Experience
            </a>
          </ul>
        )}

        <img
          src="/threeLines.png"
          alt="dropdownbutton"
          className="btn"
          onClick={toggleNav}
        />

        {/* <button className="btn" onClick={toggleNav}>
          BTN
        </button> */}
      </nav>

      <div>
        <h1 className="mainName">Waqar Ul-Hassan</h1>
        <Background />
      </div>
      <div id="About_Me">
        <About />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Experiences">
        <Experiences />
      </div>
    </>
  );
};

export default Navbar;