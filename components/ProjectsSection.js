import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function ProjectsSection() {
  gsap.registerPlugin(ScrollTrigger);
  const projects = useRef(null);
  const videRef = useRef(null);
  useEffect(() => {
    videRef.current.play();
  }, []);

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
            <video className="video" ref={videRef}>
              <source src="../images/cyptotooo.mp4" />
            </video>

            {/* <img src="../images/trading.png" alt="" className="img" /> */}
          </article>
        </section>
        <section className="fproject" id="box2">
          <article className="card">
            <img src="../images/trading2.png" alt="" className="img" />
          </article>
        </section>
        <section className="fproject" id="box3">
          <article className="card">
            <img src="../images/project4.png" alt="" className="img" />
          </article>
        </section>
        <section className="fproject" id="box4">
          <article className="card">
            <img src="../images/project1.png" alt="" className="img" />
          </article>
        </section>
      </div>
    </div>
  );
}
