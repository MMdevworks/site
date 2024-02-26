import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DsgnHeroImg from '../components/DsgnHeroImg';
import DsgnWork from '../components/DsgnWork';

const Design = () => {
  return (
    <div>
      <Navbar />
      <DsgnHeroImg heading="Design" text="Imagination and Creativity"/>
      <DsgnWork />
      <Footer />
    </div>
  )
}

export default Design