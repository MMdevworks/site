import React from 'react';
import "./ProjectCardStyles.css";
// import p1 from "../assets/p1.png";
import { NavLink } from 'react-router-dom';

const DsgnCard = (props) => {
  return (
            <div className='project-card'>
                <img src={props.imgsrc} alt="image"/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='project-details'>
                    <p>{props.text}</p>
                    <div className='project-btns'>
                        <NavLink to={props.view} className="btn">View</NavLink>
                        {/* <NavLink to={props.source} className="btn-light">Source</NavLink> */}
                    </div>
                </div>
            </div>
  )
}

export default DsgnCard