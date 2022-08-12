import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Homepage/Banner";
import Footer from "../components/Homepage/Footer";
import Mission from "../components/Homepage/Mission";
import SmallAbout from "../components/Homepage/SmallAbout";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner show={true} />
      <Mission />
      <SmallAbout />
    </>
  );
}

export default Home;
