import React from "react";
import "./styles/Mission.css";

import miss1 from "../../data/Images/misison/miss1.jpg";
import miss2 from "../../data/Images/misison/miss2.jpg";
import miss3 from "../../data/Images/misison/miss3.jpg";
import { Col, Container, Row } from "react-bootstrap";

function Mission() {
  const missionData = [
    {
      img: miss1,
      title: "Books",
    },
    {
      img: miss2,
      title: "School Supplies",
    },

    {
      img: miss3,
      title: "Sanitary Products",
    },
  ];
  return (
    <Container>
      {" "}
      <div className="mission">
        <div className="mission__text">
          <h3>SUPPORT</h3>
          <h1>OUR MISSION</h1>
        </div>
        <div className="card_container py-5">
          <Row>
            {" "}
            {missionData.map((i, k) => {
              return (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <Col lg={4} md={12} sm={12}>
                  <div className="card shadow-sm my-5">
                    <img
                      class="card-img-top misison__card__img"
                      src={i.img}
                      rel="nofollow"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <p class="card_text text-center title mt-3">{i.title}</p>

                      <div class="container py-3 text-center">
                        <a
                          href="#"
                          className={`link_pulse link_pulse_color_${k} link-four pulse-grow-on-hover`}
                        >
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default Mission;
