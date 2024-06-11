import "./FooterStyles.css"
import React from 'react'
import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                <div>
                    <p>Pacific Northwest</p>
                </div>
            </div>
            
            <div className="github">
                <h4>
                    <FaGithub size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <a href="https://github.com/MMdevworks">My Github</a>
                </h4>
            </div>
            
            <div className="email">
                <h4>
                    <FaLinkedin size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <a href="https://www.linkedin.com/in/marie-marcos">My LinkedIn</a>
               </h4>
            </div>
            </div>

            <div className="right">
                {/* <h4>Insert</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p> */}
                <div className="social">
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer