import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutCared from "../About/AboutCared";
import children from "../../data/children.jpg";
import children1 from "../../data/children1.jpg";
function ProjectCards() {
  let data = [
    {
      id: 1,
      title: "Project 1",
      desc: "School Supplies: Donate school supplies they need to educate themselves and improve their lives.",
      image: children1,
    },
    {
      id: 2,
      title: "Project 2",
      desc: "Tutoring: Provide free tutoring in basic Math, English and Programming techniques",
      image: children,
    },
  ];
  return (
    <>
      <Container>
        <Row className="py-4 my-5">
          {data.map((i, k) => {
            return (
              <Col lg={6} key={k} className="py-3 my-5">
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
