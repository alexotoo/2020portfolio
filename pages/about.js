import React, { useState } from "react";
import Layout from "../components/Layout";
import NavMobile from "../components/NavMobile";
const about = () => {
  return (
    <Layout>
      <NavMobile />
      <section className="page-about">
        <h1 className="title pb1 ">
          <span className="blue">About</span>
        </h1>
        <div className="about-heading">
          <div className="about-heading__text">
            <p>Hello</p>
            <h1 className="title ">
              I am <span className="blue">Alex</span>
            </h1>
          </div>
          <div className="about-heading__img">
            <img
              src="/images/profile-pic.png"
              alt="Profile Picture"
              className="aboutImage image"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default about;
