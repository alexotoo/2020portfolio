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
            <p>A passionate web developer</p>
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
              Alex is a seasoned web developer with years of working experience.
              He has worked with the Government of Ghana on numerous projects.
              He is proficient in coding both Front-End and Back-End
              applications. Having worked extensively with JavaScript, PHP,
              Node.JS, he is able to transform complex UI/UX into functioning
              web applications. He has demonstrable skills in development tools
              such a React Js, CSS, HTML, SASS, Next.JS, WordPress and other
              CMS/Headless CMS like Strapi, Contentful, and googles firebases.
              He is a fast learner and a passion for web applications
              development.
            </p>
          </div>
          <div className="page-about__career">
            <div className="page-about__career-text">
              <p className="page-about--heading">Non-tech Career:</p>
              <p className="firstLetter">
                I began my professional career as a Public Administrator (Civil
                Servant) working at the Government Ministry in Ghana. As the
                Assistant Director in charge of Policy on Aging, I successfully
                initiated and lead a Nationwide effort of registering elderly
                people in Ghana onto a social support program. Based on my
                successful development and implementation of the program, I was
                selected as a Ghanian delegate to present Ghana’s social
                projects at the United Nations Head Quarters for the Commission
                for Social Development (CSocD).
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
                My desire to continue learning led me to obtaining a Master’s
                Degree in Analysis and Design of Social Protection Systems in
                Bonn, Germany in 2017. While studying in Germany, I continued
                perfecting my programming and web development skills spending
                more time with Master’s level students in the Computer Science
                program. I gained a lot of experience practicing and working on
                projects to get better at coding.
              </p>
            </div>
          </div>
          <p className="page-about--heading mt">Hobbies :</p>
          <p className="firstLetter ">
            I enjoy travelling, coding for hobby (yes, I believe coding is
            fun!), cooking, working out, and spending time with my wife on
            various adventures.
          </p>
        </div>
        <div className="gallery">
          <figure class="gallery__item gallery__item--1">
            <img
              src="images/gal-1.jpeg"
              alt="Gallery image 1"
              class="gallery__img"
            />
          </figure>
          <figure class="gallery__item gallery__item--2">
            <img
              src="images/gal-2.jpeg"
              alt="Gallery image 2"
              class="gallery__img"
            />
          </figure>
          <figure class="gallery__item gallery__item--3">
            <img
              src="images/gal-3.jpeg"
              alt="Gallery image 3"
              class="gallery__img"
            />
          </figure>
          <figure class="gallery__item gallery__item--4">
            <img
              src="images/gal-12.jpeg"
              alt="Gallery image 4"
              class="gallery__img"
            />
          </figure>
          <figure class="gallery__item gallery__item--5">
            <img
              src="images/gal-5.jpeg"
              alt="Gallery image 5"
              class="gallery__img"
            />
          </figure>
          <figure class="gallery__item gallery__item--6">
            <img
              src="images/gal-6.jpeg"
              alt="Gallery image 6"
              class="gallery__img"
            />
          </figure>
          <figure class="gallery__item gallery__item--7">
            <img
              src="images/gal-7.jpeg"
              alt="Gallery image 7"
              class="gallery__img"
            />
          </figure>
          <figure class="gallery__item gallery__item--8">
            <img
              src="images/gal-8.jpeg"
              alt="Gallery image 8"
              class="gallery__img"
            />
          </figure>
          <figure class="gallery__item gallery__item--9">
            <img
              src="images/gal-15.jpeg"
              alt="Gallery image 9"
              class="gallery__img"
            />
          </figure>
          <figure class="gallery__item gallery__item--10">
            <img
              src="images/gal-10.jpeg"
              alt="Gallery image 10"
              class="gallery__img"
            />
          </figure>
          <figure class="gallery__item gallery__item--11">
            <img
              src="images/gal-11.jpeg"
              alt="Gallery image 11"
              class="gallery__img"
            />
          </figure>
          <figure class="gallery__item gallery__item--12">
            <img
              src="images/gal-4.jpeg"
              alt="Gallery image 12"
              class="gallery__img"
            />
          </figure>
          <figure class="gallery__item gallery__item--13">
            <img
              src="images/gal-13.jpeg"
              alt="Gallery image 13"
              class="gallery__img"
            />
          </figure>
          <figure class="gallery__item gallery__item--14">
            <img
              src="images/gal-14.jpeg"
              alt="Gallery image 14"
              class="gallery__img"
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default about;
