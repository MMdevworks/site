import React, { Component } from "react";
import "./AboutHeroImgStyles.css";

class AboutHeroImg extends Component {
    render(){
        return (
          <div className="abt-hero-img">
              <div className="abt-heading">
                  <h1>{this.props.heading}</h1>
                  <p>{this.props.text}</p>
              </div>
          </div>
        )
    }
}

export default AboutHeroImg