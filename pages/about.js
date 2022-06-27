import React, { useState } from "react";
import Image from "next/image";

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
              <p className="page-about--heading">Non-tech Career:</p>
              <p className="firstLetter">
                I began my professional career as a Public Administrator (Civil
                Servant) working at the Government Ministry in Ghana. As the
                Assistant Director in charge of Policy on Aging, I successfully
                initiated and lead a Nationwide effort of registering elderly
                people in Ghana onto a social support program. This effort was
                joint funded by UNICEF and the Government of Ghana. By the end
                of the first pilot phase, over 22,000 elderly citizens, 70 years
                and over, were registered into the program. Based on my
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
                Bonn, Germany in 2017. While studying in Germany, I began
                spending more time with Master’s level students in the Computer
                Science program, providing me answers to the endless questions I
                had always had regarding web development. The more I learned,
                the more fascinated I became with web development, leading me to
                become a fullstack web developer.
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
