import React from 'react';
import "./DsgnCardStyles.css";
import DsgnCard from './DsgnCard';
import DsgnCardData from './DsgnCardData';

const DsgnWork = () => {
  return (
    <div className='work-container'>
        {/* <h1 className='project-heading'>Interested in code? Checkout my <a href="https://github.com/MMdevworks">Github</a></h1> */}
        <div className='project-container'>
          {DsgnCardData.map((value,index) => {
            return (
              <DsgnCard
              key={index}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
              />
            );
            })}
        </div>
    </div>
  )
}

export default DsgnWork