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
                NEXT JS | Chakra UI | JavaScript | greensock{" "}
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
            <img src="../images/projectapp.png" alt="" className="img" />
            <div>
              <h4>Team Note App</h4>
              <p className="blue">
                React Js | Firebase | JavaScript | Bootstrap{" "}
              </p>
              <p className="mb">
                A project team note app with firebase authentication and
                firestore for data storage. SignUp and Login (with any fake
                credentials) and explore the app.
              </p>
              <a
                href="https://teamprojectapp.netlify.app/signin"
                target="_blank"
              >
                <Btn> Live</Btn>
              </a>
            </div>
          </article>
        </section>
        <section className="fproject" id="box4">
          <article className="card">
            <img src="../images/project4.png" alt="" className="img" />
            <div>
              <h4>Gym Website</h4>
              <p className="blue">Bootstrap 5 | HTML | JavaScript | CSS</p>
              <p className="mb">
                Going to the gym should be exciting. That’s what this responsive
                gym website is all about. Highly responsive gym website to get
                you love going to gym.
              </p>

              <a href="https://xtremgym.netlify.app/" target="_blank">
                <Btn> Live</Btn>
              </a>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
