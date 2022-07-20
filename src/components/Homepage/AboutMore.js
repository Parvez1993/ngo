import React from "react";
import "./styles/Mission.css";

import miss1 from "../../data/Images/more/miss1.jpg";
import miss2 from "../../data/Images/more/miss2.jpg";
import miss3 from "../../data/Images/more/miss3.jpg";
import { Col, Container, Row } from "react-bootstrap";

function AboutMore() {
  const missionData = [
    {
      img: miss1,
      title: "Reframing girls’ education in India?",
      para: "Girls’ education faces a sense of urgency—globally and in India. The world realizes that many developmental promises cannot be fulfilled unless gender inequality is addressed. Schooling for girls, especially the completion of a high-quality secondary education, is now celebrated by ….",
    },
    {
      img: miss2,
      title: "Why Are So Many Girls in India Not Getting an Education?",
      para: "Girls’ education faces a sense of urgency—globally and in India. The world realizes that many developmental promises cannot be fulfilled unless gender inequality is addressed. Schooling for girls, especially the completion of a high-quality secondary education, is now celebrated by ….",
    },

    {
      img: miss3,
      title:
        "Why girls in India are still missing out on the education they need?",
      para: "Girls’ education faces a sense of urgency—globally and in India. The world realizes that many developmental promises cannot be fulfilled unless gender inequality is addressed. Schooling for girls, especially the completion of a high-quality secondary education, is now celebrated by ….",
    },
  ];
  return (
    <Container>
      {" "}
      <div className="mission">
        <div className="mission__text">
          <h3>LEARN</h3>
          <h1>MORE</h1>
        </div>
        <div className="card_container py-5">
          <Row>
            {" "}
            {missionData.map((i, k) => {
              return (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <Col lg={4} md={12} sm={12}>
                  <div className="card shadow-sm my-3">
                    <img
                      class="card-img-top misison__card__img"
                      src={i.img}
                      rel="nofollow"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <p class="card_text text-left title mt-3">{i.title}</p>
                      <p className="para py-3">{i.para}</p>
                      <div class="container py-3 text-center">
                        <a
                          href="#"
                          className={`link_pulse link_pulse_color_${k} link-four pulse-grow-on-hover`}
                        >
                          Read More
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

export default AboutMore;
