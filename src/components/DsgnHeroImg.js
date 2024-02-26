import React, { Component } from "react";
import "./DsgnHeroImgStyles.css";

class DsgnHeroImg extends Component {
    render(){
        return (
          <div className="dsgn-hero-img">
              <div className="dsgn-heading">
                  <h1>{this.props.heading}</h1>
                  <p>{this.props.text}</p>
              </div>
          </div>
        )
    }
}

export default DsgnHeroImg