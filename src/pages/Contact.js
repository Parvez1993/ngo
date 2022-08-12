import React from "react";
import { Helmet } from "react-helmet";
import ContactForm from "../components/Contact/ContactForm";
import Banner from "../components/Homepage/Banner";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Banner title="Contact us" />

      <ContactForm />
    </>
  );
}

export default Contact;
