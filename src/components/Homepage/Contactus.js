import React, { useEffect, useRef, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import "./styles/Contactus.css";
import emailjs from "@emailjs/browser";

function Contactus() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);
  const [err, setErr] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        "template_oddorgc",
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setMessage(true);
          setEmail("");
        },
        (error) => {
          setErr(error.text);
        }
      );
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setMessage(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);
  return (
    <div className="parallax1" style={{ padding: "20px" }}>
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

            <form ref={form} onSubmit={sendEmail}>
              <div className="d-flex align-items-center">
                <div>
                  <h5 className="text-start">Email</h5>
                  <input
                    type="email"
                    className="email"
                    id="exampleFormControlInput1"
                    name="email"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className={`button-grow-on-hover btn_email`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {err !== null ? (
          <Alert variant="danger" className="my-4">
            {err}
          </Alert>
        ) : message ? (
          <Alert variant="success" className="my-4">
            <img
              src="https://img.icons8.com/color/48/000000/checked-2--v1.png"
              alt="tick"
              className="mb-2"
            />{" "}
            Thank you for your email! We will answer you as soon as possible!
          </Alert>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}

export default Contactus;
