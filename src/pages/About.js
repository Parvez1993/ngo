import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutCared from "../components/About/AboutCared";
import Banner from "../components/Homepage/Banner";
import user1 from "../data/user1.jpg";
function About() {
  let data = [
    {
      id: 1,
      title: "Radha Gupta",
      desc: "My name is Radha Gupta. I am 16 years old and from Long Island, NY. I am interested in public health and public policy. I created this organization to help girls receive an education. A girl’s education has been proven to better families, communities, and even countries. In 2018, India was ranked the least safe place to be a women due to a lack of opportunities and violence. I believe that prioritizing a girls’ education can help improve the quality of her life and her family.",
    },
    {
      id: 2,
      title: "Siya Gupta",
      desc: "My name is Siya Gupta. As a teenager receiving an education, I get to pursue my hobbies, which include playing tennis and sketching, and also learn about things that interest me. As a result I’m fortunate enough to receive opportunities that girls around the world may not. Education gives everyone the power and tools to improve their lives. I’m grateful for my education opportunities and want to make sure that other girls can also get the same ones.",
    },
  ];

  return (
    <>
      <Banner show={false} title="About" />
      <Container className="py-5 my-3">
        <Row>
          <Col className="aboutText my-3" lg={4}>
            Samsara Foundation was created to help girls in India get the
            resources they need to educate themselves and improve their lives.
          </Col>
          {data.map((i, k) => {
            return (
              <Col lg={4} key={k} className="py-3">
                <AboutCared title={i.title} desc={i.desc} image={user1} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default About;
