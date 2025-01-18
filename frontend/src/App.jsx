import React from "react"
import Navbar from "./components/HomePages/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/HomePages/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App;
