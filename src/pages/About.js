import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../components/Homepage/Banner";
import Typed from "typed.js";
function About() {
  // Create Ref element.
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `I am passionate about teaching and finding different ways to communicate with my students from using technology to teach underprivileged teens in Burma. Establishing this non-profit organization was a step in the direction to further solidify my commitment to my passion to kids in need.`,
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 20,
      typeSpeed: 30,

      backSpeed: 10,
      fadeOutClass: "typed-fade-out",
      loop: false,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Banner show={false} title="About" />
      <Container className="py-5 my-4">
        <Row style={{ minHeight: "50vh" }}>
          <Col className="aboutText my-3" lg={12}>
            <span ref={el}></span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
