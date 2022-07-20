import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./styles/Contactus.css";

function Contactus() {
  return (
    <div class="parallax1" style={{ padding: "20px" }}>
      <Container className="pt-4">
        <div>
          <div className="parallex1_container">
            <div>
              <h3 className="text-start">Logo</h3>
              <p className="para_text1">
                Samsara Foundation was created to help girls in India get the
                resources they need to educate themselves and improve their
                lives
              </p>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <h5 className="text-start">Email</h5>
                <input
                  type="email"
                  className="email"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="text-center mt-4">
                <div className={`button-grow-on-hover btn_email`}>
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contactus;
