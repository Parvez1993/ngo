import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import children from "../../data/children.jpg";
import "./MisisonInformation.css";
function MissionInformaton() {
  return (
    <Container className="my-5">
      <Row>
        <Col lg={6}>
          <div
            className="d-flex align-items-center text-end"
            style={{ height: "100%" }}
          >
            <p className="main_para">
              My goal is to raise money, products, and educational materials to
              send to Indore, India. I am also planning to create a website for
              girls to ask questions and to share some things I am learning.
              There is no big budget, but I am always looking at ways of getting
              girls of my age and younger what they need. I contact companies
              and ask for donations. I raise money with little projects or jobs.
            </p>
          </div>
        </Col>
        <Col lg={6} className="my-5">
          <div className="main_info_box">
            <h2>How can a girl’s education impact a country?</h2>
            <ul>
              <li>INCREASED ECONOMIC GROWTH</li>
              <li>DECREASE CHILD MARRIAGE</li>
              <li>DECREASE INFANT MORTALITY</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        {" "}
        <Col lg={4}>
          <div className="flex_box">
            <p className="blue_box">
              Annually in India, more than 23 million girls drop out of school
              due to a lack of toilets in schools and proper menstrual hygiene
              management facilities.
            </p>
            <p className="blue_box">
              47% of girls are married before the legal age of 18 (UNGEI)
            </p>
          </div>
        </Col>
        <Col lg={4} className="my-5">
          <img
            src={children}
            alt="children"
            style={{ height: "100%" }}
            className="img-fluid img-thumbnail"
          />
        </Col>
        <Col lg={4}>
          <div>
            <p className="blue_box">
              Uttar Pradesh, Rajasthan, and Madhya Pradesh have more than a 20%
              point enrollment gap for secondary school between girls and boys.
              (FHI 360)
            </p>
          </div>
          <div>
            <p className="blue_box">
              49% secondary school net female attendance ratio. (UNICEF)
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MissionInformaton;
