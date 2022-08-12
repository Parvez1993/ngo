import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Homepage/Banner";
import ProjectCards from "../components/Project/ProjectCards";

function Project() {
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Banner title="Our Projects" />
      <ProjectCards />
    </>
  );
}

export default Project;
