import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";

import { FaMobileAlt, FaEnvelope } from "react-icons/fa";
import NavMobile from "../components/NavMobile";
import { useState } from "react";

export default function contact() {
  return (
    <Layout>
      <NavMobile />
      <main className="pages-pt contact-page">
        <p className="contact-page__intro">
          Welcome.
          <br />
          please do not hesitate to give me a call or mail me.
          <br />
          In case I miss your call or receive your mail, I will respond as soon
          as possible.
        </p>
        <section className="contact">
          <div className="contact__contacts">
            <div className="contact__contacts-info">
              <FaMobileAlt className="info_icon " />
              <h1>+244 024 411 3073</h1>
            </div>
            <div className="contact__contacts-info">
              <FaEnvelope className="info_icon " />
              <h1>alexotoous@outlook.com</h1>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
    </Layout>
  );
}
