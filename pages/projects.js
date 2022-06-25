import React, { useState } from "react";
import Layout from "../components/Layout";
import NavMobile from "../components/NavMobile";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

function projects() {
  return (
    <Layout>
      <NavMobile />
      <section className="projects mt">
        <div className="mt1"></div>
        <div className="mt"></div>
        <h1 className="title pb1">
          <span className="blue">Projects</span>
        </h1>
        <div className="project-showcase">
          {/* projects */}
          <div className="projects__skills mt ">
            <div className="projects__projectwrapper">
              <article className="projects__project-card">
                <img src="/images/project1.png" alt="" className="image" />

                <div className="visitBtn">
                  <a
                    href="https://github.com/alexotoo/tailwindproj"
                    className="projects__codelinks"
                  >
                    Visit Code
                  </a>

                  <a
                    href="https://tailwindproj.netlify.app/"
                    target="_blank"
                    className="projects__codelinks"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
              <article className="projects__project-card">
                <img src="/images/project2.png" alt="" className="image" />
                <div className="visitBtn">
                  <a
                    href="https://github.com/alexotoo/job-agencey"
                    className="projects__codelinks"
                  >
                    Visit Code
                  </a>

                  <a
                    href="https://alexooo-agency.netlify.app/"
                    target="_blank"
                    className="projects__codelinks"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
              <article className="projects__project-card">
                <img src="/images/project3.png" alt="" className="image" />
                <div className="visitBtn">
                  <a
                    href="https://github.com/alexotoo/burgermeal/tree/main/Burger-Palce"
                    className="projects__codelinks"
                  >
                    Visit Code
                  </a>

                  <a
                    href="https://burgerpalace.netlify.app/"
                    target="_blank"
                    className="projects__codelinks"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
              <article className="projects__project-card">
                <img src="/images/project4.png" alt="" className="image" />
                <div className="visitBtn">
                  <a
                    href="https://github.com/alexotoo/xtrefit"
                    className="projects__codelinks"
                  >
                    Visit Code
                  </a>

                  <a
                    href="https://xtremgym.netlify.app/"
                    target="_blank"
                    className="projects__codelinks"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
              <article className="projects__project-card">
                <img src="/images/project5.png" alt="" className="image" />

                <div className="visitBtn">
                  <a
                    href="https://github.com/alexotoo/Scooter-and-Bikes"
                    className="projects__codelinks"
                  >
                    Visit Code
                  </a>

                  <a
                    href="https://scooter-bikes.netlify.app/"
                    target="_blank"
                    className="projects__codelinks"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
              <article className="projects__project-card">
                <img src="/images/project7.png" alt="" className="image" />

                <div className="visitBtn">
                  <a
                    href="https://github.com/alexotoo/react-budget-app"
                    className="projects__codelinks"
                  >
                    Visit Code
                  </a>

                  <a
                    href="https://reactjs-budget-app.netlify.app/"
                    target="_blank"
                    className="projects__codelinks"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
        <hr className="mt1" />
      </section>
    </Layout>
  );
}

export default projects;
