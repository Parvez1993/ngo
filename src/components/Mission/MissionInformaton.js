import Aos from "aos";
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MisisonInformation.css";
function MissionInformaton() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container className="my-5" style={{ overflowX: "hidden" }}>
      <Row>
        <Col lg={12}>
          <div
            className="d-flex align-items-center text-end justify-center"
            data-aos="fade-right"
            data-aos-duration="3000"
            style={{ height: "100%" }}
          >
            <p className="main_para py-5">
              My mission is to help kids in Burma with school supplies and tutor
              on a variety of concepts centered in Mathematics, Python and
              English as the pandemic and military coup caused their education
              system to collapse.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MissionInformaton;
