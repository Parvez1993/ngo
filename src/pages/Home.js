import React from "react";
import AboutMore from "../components/AboutMore";
import Banner from "../components/Banner";
import Contactus from "../components/Contactus";
import Mission from "../components/Mission";
import SmallAbout from "../components/SmallAbout";

function Home() {
  return (
    <>
      <Banner />
      <Mission />
      <SmallAbout />
      <AboutMore />
      <Contactus />
    </>
  );
}

export default Home;
