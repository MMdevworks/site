import "./HeroImgStyles.css";
import React from "react";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="hero-img" src={hero} alt="hero"/>
        </div>
        <div className="content">
            <p>Design. Develop. Create.</p>
            <h1>Welcome!</h1>
            <div className="content-btn">
                <Link to="/project" className="btn">Projects</Link>
                {/* <Link to="/about" className="btn-light">About</Link> */}
                {/* <Link to="/design" className="btn-light">Design</Link> */}
            </div>
        </div>
    </div>
  )
}

export default HeroImg