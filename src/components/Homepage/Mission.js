import React, { useEffect } from "react";
import "./styles/Mission.css";
import AOS from "aos";
import miss1 from "../../data/Images/misison/miss1.jpg";
import miss2 from "../../data/Images/misison/miss2.jpg";
import miss3 from "../../data/Images/misison/miss3.jpg";
import { Col, Container, Row } from "react-bootstrap";

function Mission() {
  useEffect(() => {
    AOS.init();
  }, []);

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
      <div className="mission" style={{ overflowX: "hidden" }}>
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
                <Col lg={4} md={12} sm={12} key={k}>
                  <div className="card shadow-sm my-5" data-aos="flip-up">
                    <img
                      className="card-img-top misison__card__img hover14"
                      src={i.img}
                      rel="nofollow"
                      alt="Card"
                    />
                    <div className="card-body">
                      <p className="card_text text-center title mt-3">
                        {i.title}
                      </p>

                      <div className="container py-3 text-center">
                        <a
                          href="/"
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
