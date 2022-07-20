import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutCared from "../About/AboutCared";
import children from "../../data/children.jpg";
function ProjectCards() {
  let data = [
    {
      id: 1,
      title: "Project 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: children,
    },
    {
      id: 2,
      title: "Project 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: children,
    },
    {
      id: 3,
      title: "Project 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: children,
    },
  ];
  return (
    <>
      <Container>
        <Row className="py-4">
          {data.map((i, k) => {
            return (
              <Col lg={4} key={k} className="py-3 my-4">
                <AboutCared title={i.title} desc={i.desc} image={i.image} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ProjectCards;
