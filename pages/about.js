import React, { useState } from "react";

import NavMobile from "../components/NavMobile";
const about = () => {
  return (
    <>
      <NavMobile />
      <section className="page-about">
        <h1 className="title mb">
          My <span className="blue">Story</span>
        </h1>
        <div className="about-heading ">
          <div className="about-heading__text">
            <p>Hello</p>
            <h1 className="title ">
              I'm <span className="blue">Alex</span>
            </h1>
            <p>A passonate web developer</p>
          </div>
          <div className="about-heading__img">
            <img
              src="/images/profile-pic.png"
              alt="Profile Picture"
              className="aboutImage image"
            />
          </div>
        </div>
        <div className="page-about page-about__intro">
          <div>
            <p className="page-about--heading">Me Now ! :</p>
            <p className="firstLetter">
              Over the years, I have continuously been honing my web development
              skills. Currently, I work with an array of skill set namely CSS,
              html, React js, JavaScript, Git, Node js, Next js, REST API
              development, data persistent CRUD applications and more. Among all
              these, what I find to be the most important skill set for a
              successful self-taught web developer on top of a good knowledge of
              your programming language is the ability to understand
              documentations, use google search and the attitude of persistence.
            </p>
          </div>
          <div className="page-about__career">
            <div className="page-about__career-text">
              <p className="page-about--heading">
                Earlier non-tech profession:
              </p>
              <p className="firstLetter">
                I started out my professional life as a public administrator
                (Civil Servant) working at the Government Ministry in Ghana. As
                an Assistant Director in charge of Policy on aging, I
                successfully initiated and lead a Nationwide project of
                registration of elderly people in Ghana onto a social support
                project. This project was joint funded by the UNICEF and the
                Government of Ghana. By the end of the first pilot phase over
                22,000 aged persons 70years and over were registered unto the
                project.
                <br />
                One climax of this project was when I was selected as part of a
                delegation from Ghana to the United Nations Head Quarters for
                the Commission for Social Development (CSocD) to present
                projects on Ghana’s Social Protection System.
              </p>
            </div>
            <figure className="page-about__career-picture">
              <img src="/images/un.jpg" alt="alex at the UN" />
              <figcaption>
                <p>Alex at the United Nations Headquarters oval</p>
              </figcaption>
            </figure>
          </div>
          <div className="page-about__career">
            <figure className="page-about__career-picture">
              <img src="/images/master.jpg" alt=" alex masters graduation" />
              <figcaption>
                <p>masters graduation</p>
              </figcaption>
            </figure>
            <div className="page-about__career-text">
              <p className="page-about--heading">
                Masters in Germany and Web Development Journey:
              </p>
              <p className="firstLetter">
                My desire to learn more landed me a master’s degree program in
                Analysis and Design of Social Protection Systems Bonn, Germany
                in 2017.
                <br />
                I've always been fascinated by how websites work but I was of
                the view that web development was the preserve of Computer
                Sciences (CS) holders. My curiosity led me to ask some CS
                masters friends I had about web development. Their helpful
                information, further research and learning since 2018 has
                brought me this far, from a hobbyist to a fullstack web
                developer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
