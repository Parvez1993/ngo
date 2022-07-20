import React from "react";
import AboutMore from "../components/Homepage/AboutMore";
import Banner from "../components/Homepage/Banner";
import Contactus from "../components/Homepage/Contactus";
import Footer from "../components/Homepage/Footer";
import Mission from "../components/Homepage/Mission";
import SmallAbout from "../components/Homepage/SmallAbout";

function Home() {
  return (
    <>
      <Banner show={true} />
      <Mission />
      <SmallAbout />
      <AboutMore />
      <Contactus />
      <Footer />
    </>
  );
}

export default Home;
