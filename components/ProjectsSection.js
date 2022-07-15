import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button as Btn } from "../components/UtillsAndLayoutComponents";
import Link from "next/link";

export default function ProjectsSection() {
  gsap.registerPlugin(ScrollTrigger);
  const projects = useRef(null);

  useEffect(() => {
    const el = projects.current;

    ScrollTrigger.create({
      trigger: el.querySelector("#box1"),
      start: "top top",
      pin: el.querySelector("#box1"),
      pinSpacing: false,
      end: "bottom -990px",
      toggleClass: "inview",
    });
    ScrollTrigger.create({
      trigger: el.querySelector("#box2"),
      start: "top top",
      pin: el.querySelector("#box2"),
      end: "bottom -550px",
      toggleClass: "inview",

      // markers: true,
    });
    ScrollTrigger.create({
      trigger: el.querySelector("#box3"),
      start: "top top",
      pin: el.querySelector("#box3"),
      end: "bottom -150px",
      toggleClass: "inview",
    });
    ScrollTrigger.create({
      trigger: el.querySelector("#box4"),
      start: "top top",
      end: "top -70px ",
      pin: true,
      toggleClass: "inview",
    });
  }, []);

  return (
    <div>
      <div className="fprojects" ref={projects}>
        <h1 className="title">
          Featured <span className="blue"> Projects</span>{" "}
        </h1>
        <section className="fproject " id="box1">
          <article className="card">
            <img src="../images/trading.png" alt="" className="img" />
            <div>
              <h4>Cryptotoo</h4>
              <p className="blue">
                NEXT JS | Chakra UI | JavaScript | GreenSock{" "}
              </p>
              <p className="mb">
                Crypto businesses are all over the place. This website is a
                responsive website to demonstrate how a modern crypto business
                website should feel like.
              </p>

              <a href="https://cryptotoo.vercel.app/" target="_blank">
                <Btn>Live</Btn>
              </a>
            </div>
          </article>
        </section>
        <section className="fproject" id="box2">
          <article className="card">
            <img src="../images/trading2.png" alt="" className="img" />
            <div>
              <h4>Recipe Search App </h4>
              <p className="blue">Edamam API | NEXT JS | JavaScript |</p>
              <p className="mb">
                A beautiful food recipe search website (SPA) built using a
                popular food API called Edamam. Visit the demo and search for
                your favourite food recipe
              </p>
              <a href="https://foodapp-eta.vercel.app/" target="_blank">
                <Btn>Live</Btn>
              </a>
            </div>
          </article>
        </section>
        <section className="fproject" id="box3">
          <article className="card">
            <img src="../images/jobshunt.png" alt="" className="img" />
            <div>
              <h4>Job Hunt Records App</h4>
              <p className="blue">
                Next.js | Express.js | REST API | Mongo DB | Node.js |
                JavaScript | Chakra UI
              </p>
              <p className="mb">
                A Full Stack web app with API hosted on Heroku and Front-End
                hosted on Vercel. A Full stack job hunt application tracker to
                help job seekers keep track of the status of their job
                applications.
              </p>
              <a href="https://jobsapps.vercel.app/" target="_blank">
                <Btn> Live</Btn>
              </a>
            </div>
          </article>
        </section>
        <section className="fproject" id="box4">
          <article className="card">
            <img src="../images/fitness.jpeg" alt="" className="img" />
            <div>
              <h4>Gym Website</h4>
              <p className="blue">SASS/CSS | HTML | JavaScript |</p>
              <p className="mb">
                Going to the gym should be exciting. That’s what this responsive
                gym website is all about. Highly responsive gym website to get
                you love going to gym.
              </p>

              <a href="https://xfitnexgym.netlify.app/" target="_blank">
                <Btn> Live</Btn>
              </a>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
