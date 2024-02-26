import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHeroImg from '../components/AboutHeroImg';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHeroImg heading="About" text="M. M. Marcos"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About