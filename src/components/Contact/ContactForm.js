import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Container, FloatingLabel, Form } from "react-bootstrap";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [message, setMessage] = useState(false);
  const [err, setErr] = useState(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setMessage(true);
        },
        (error) => {
          setErr(error.text);
        }
      );
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setMessage(null);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return (
    <>
      <Container className="py-5">
        <h4 className="text-uppercase">Drop us a Line</h4>

        <div className="py-5">
          {err !== null ? (
            <Alert variant="danger" className="custom_alert">
              {err}
            </Alert>
          ) : message ? (
            <Alert variant="primary" className="custom_alert">
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
          <form ref={form} onSubmit={sendEmail}>
            {" "}
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3 "
            >
              <Form.Control
                type="text"
                placeholder="Name"
                className="custom_input"
                name="name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Phone"
              className="mb-3 "
            >
              <Form.Control
                type="text"
                placeholder="Phone"
                className="custom_input"
                name="phone"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3 "
            >
              <Form.Control
                type="email"
                placeholder="Email"
                className="custom_input"
                name="email"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                className="mb-3 custom_input"
                name="message"
              />
            </FloatingLabel>
            <Button
              size="lg"
              variant="success"
              style={{ borderRadius: "10px" }}
              className="my-4"
              type="submit"
            >
              Send Now
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default ContactForm;
