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
        <div className="mt1"></div>
        <p className="contact-page__intro">
          Welcome.
          <br />
          please do not hesitate to give me a call or mail me.
          <br />
          In case I miss your call or receive your mail, I will respond as soon
          as possible.
        </p>
        <div className="mt1"></div>
        <section className="contact">
          <div className="contact__contacts">
            <div className="contact__contacts-info">
              <FaMobileAlt className="info_icon " />
              <p> +1 (740) 605-3234</p>
            </div>
            <div className="contact__contacts-info">
              <FaEnvelope className="info_icon " />
              <a href="mailto:alexotoous@gmail.com">alexotoous@gmail.com</a>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
    </Layout>
  );
}
