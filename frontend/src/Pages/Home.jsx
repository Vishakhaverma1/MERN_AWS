import React from 'react'
// import HeroSection from '../components/HeroSection'
import Goals from '../components/HomePages/Goals';
import About from '../components/HomePages/About';
import Carousel from '../components/HomePages/Carousel';
import Services from '../components/HomePages/Services';
import Slider from '../components/HomePages/Slider';
import Header from '../components/HomePages/Header';

const Home = () => {
  return (
    <>
      <Header/>
      <Goals/>
      <About/>
      <Carousel/>
      <Services/>
      <Slider/>
    </>
  )
}

export default Home;
