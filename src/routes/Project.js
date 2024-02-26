import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjHeroImg from '../components/ProjHeroImg';
import ProjectWork from '../components/ProjectWork';

const Project = () => {
  return (
    <div>
      <Navbar />
      <ProjHeroImg heading="Development" text="Ideation and Iteration"/>
      <ProjectWork />
      <Footer />
    </div>
  )
}

export default Project