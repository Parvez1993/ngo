import React from "react";
import "./styles/Mission.css";

import miss1 from "../data/Images/misison/miss1.jpg";
import miss2 from "../data/Images/misison/miss2.jpg";
import miss3 from "../data/Images/misison/miss3.jpg";
import { Container } from "react-bootstrap";

function Mission() {
  const missionData = [
    {
      img: miss1,
    },
    {
      img: miss2,
    },

    {
      img: miss3,
    },
  ];
  return (
    <Container>
      {" "}
      <div className="mission d-flex flex-column align-items-center">
        <div className="mission__text">
          <h3>SUPPORT</h3>
          <h1>OUR MISSION</h1>
        </div>
        <div className="card_container">
          {missionData.map((i, k) => {
            return (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <div class="card " style={{ width: "20em" }}>
                <img
                  class="card-img-top misison__card__img"
                  src={i.img}
                  rel="nofollow"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default Mission;
