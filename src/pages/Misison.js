import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Homepage/Banner";
import MissionInformaton from "../components/Mission/MissionInformaton";

function Misison() {
  return (
    <>
      <Helmet>
        <title>Mission</title>
      </Helmet>
      <Banner title="Our Mission" />
      <MissionInformaton />
    </>
  );
}

export default Misison;
