import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import {
  FaMobileAlt,
  FaEnvelope,
  FaArrowAltCircleLeft,
  FaArrowRight,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

import ContactForm from "../components/ContactForm";
import { Button as Btn } from "../components/UtillsAndLayoutComponents";
import NavMobile from "../components/NavMobile";
import styles from "../components/homePage.module.scss";
import ProjectsSection from "../components/ProjectsSection";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const skills = useRef(null);
  useEffect(() => {
    const el = skills.current;
    console.log(el);
    gsap.from(el.querySelectorAll(".projects__card"), {
      scrollTrigger: {
        trigger: el.querySelector(".projects__skillswrapper"),
        start: "top center",
        end: "center bottom",
      },
      duration: 2,
      scale: 0.5,
      opacity: 0,
      stagger: 0.2,
      ease: "elastic",
      force3D: true,
    });
  }, []);
  return (
    <>
      <Head>
        <title>ALex Otoo Portfolio</title>
        <meta
          name="description"
          content="web developer, react js, portfolio, front end developer, next js developer,jamstack,web development"
        />
      </Head>
      <header className="hero">
        <h2 className="title">Hello, Alex Otoo here.</h2>
        <h1 className="sub-title">I am a web developer</h1>
        <div className="fit">
          <p className="text mt mb1">
            I am driven by the passion to learn and the humble power web
            developers possess in making the internet and web experience an
            enjoyable one.
          </p>
        </div>

        <Link href="/contact">
          <a>
            <Btn>let's talk</Btn>
          </a>
        </Link>
      </header>
      <main>
        <ProjectsSection />
        <section className="projects">
          <div className="mt1"></div>
          <div className="mt"></div>
          <h1 className="title pb1">
            More <span className="blue">Projects</span>
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
                  <p className="blue  ">Tailwind | CSS | JavaScript</p>
                </article>
                <article className="projects__project-card">
                  <img src="/images/projectapp.png" alt="" className="image" />
                  <div className="visitBtn">
                    <a
                      href="https://github.com/alexotoo/project-app"
                      className="projects__codelinks"
                    >
                      Visit Code
                    </a>

                    <a
                      href="https://teamprojectapp.netlify.app/signin"
                      target="_blank"
                      className="projects__codelinks"
                    >
                      Live Demo
                    </a>
                  </div>
                  <p className="blue  ">BootStrap 5 | Firebase | JavaScript</p>
                </article>
                <article className="projects__project-card">
                  <img src="/images/fitness.jpeg" alt="" className="image" />
                  <div className="visitBtn">
                    <a
                      href="https://github.com/alexotoo/xtremgym"
                      className="projects__codelinks"
                    >
                      Visit Code
                    </a>

                    <a
                      href="https://xfitnexgym.netlify.app/"
                      target="_blank"
                      className="projects__codelinks"
                    >
                      Live Demo
                    </a>
                  </div>
                  <p className="blue  ">SASS | CSS | HTML | JavaScript</p>
                </article>
                <article className="projects__project-card">
                  <img src="/images/project4.png" alt="" className="image" />
                  <div className="visitBtn">
                    <a
                      href="https://github.com/alexotoo/XtremFit"
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
                  <p className="blue  ">Bootstrap | CSS | HTML | JavaScript</p>
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
                  <p className="blue  ">React Js | CSS | JavaScript </p>
                </article>
              </div>
            </div>
          </div>
          <hr className="mt1" />
        </section>
        <section className="skillSet" ref={skills}>
          <h1 className="title pb1 ">
            Tools <span className="blue">&</span> Skills
          </h1>
          <div className="mt1"></div>
          <div className="projects__skillswrapper">
            <article className="projects__card up">
              <img
                src="/images/skill-reactjs.png"
                alt="react js icon"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">React JS</p>
            </article>
            <article className="projects__card">
              <img
                src="/images/skills-bootstrap5.png"
                alt="bootstrap5 icon"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">Bootstrap5</p>
            </article>
            <article className="projects__card">
              <img
                src="/images/skills-css.png"
                alt="css icon"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">CSS</p>
            </article>
            <article className="projects__card">
              <img
                src="/images/skills-html5.png"
                alt="HTML"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">HTML</p>
            </article>
            <article className="projects__card">
              <img
                src="/images/skills-js.png"
                alt="JavaScript icon"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">JavaScript</p>
            </article>
            <article className="projects__card">
              <img
                src="/images/skills-materializecss.png"
                alt="materializecss icon"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">Materialize CSS</p>
            </article>
            <article className="projects__card">
              <img
                src="/images/skills-nextjs-logo.png"
                alt="next js"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">Next JS</p>
            </article>
            <article className="projects__card">
              <img
                src="/images/skills-nodejs.jpeg"
                alt="node js icon"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">Node JS</p>
            </article>
            <article className="projects__card">
              <img
                src="/images/skills-Photoshop.png"
                alt="photoshop icon"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">Photoshop</p>
            </article>
            <article className="projects__card">
              <img
                src="/images/skills-sass.jpeg"
                alt="Sass icon"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">SASS</p>
            </article>
            <article className="projects__card">
              <img
                src="/images/skills-tailwind.jpg"
                alt="tailwind css icon"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">Tailwind CSS</p>
            </article>
            <article className="projects__card">
              <img
                src="/images/skills-git.jpeg"
                alt="Git icon"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">Git</p>
            </article>
            <article className="projects__card">
              <img
                src="/images/skills-firebase.jpeg"
                alt="firebase icon"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">Firebase</p>
            </article>
            <article className="projects__card">
              <img
                src="/images/skills-contentful.png"
                alt="contentful icon"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">Contentful</p>
            </article>
            <article className="projects__card">
              <img
                src="/images/skills-wordpress.jpg"
                alt="wordpress icon"
                className="projects__skillicon"
              />
              <p className="projects__skilliconname">Wordpress</p>
            </article>
          </div>
        </section>
        {/* about section  */}

        <section className="about ">
          <h1 className="title mb">
            About <span className="blue">Me</span>
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
          <div className="about-content">
            <p>
              Over the years, I have continuously been honing my web development
              skills. Currently, I work with an array of skill set namely CSS,
              html, React js, JavaScript, Git, Node js, Next js, REST API
              development, data persistent CRUD applications and more. As a
              self-taught web developer, I believe what makes one a good or
              successful web developer is good knowledge of your programming
              language, the ability to understand documentations, effectively
              use google search and most importantly the attitude of
              persistence.
              <br /> <br /> Currently, I am available for freelancing or a
              suitable web development position with opportunities for
              continuous learning.
            </p>
            <div className="mb1"></div>
            <Link href="/about">
              <a className="seeMore">
                <p>More About Me</p>
                <BsArrowRight />
              </a>
            </Link>
          </div>
        </section>
        <hr />
        <div className="mt1"></div>
        <section className="contact">
          <div className="contact__contacts">
            <div className="contact__contacts-info">
              <FaEnvelope className="info_icon " />
              <a href="mailto:alexotoous@gmail.com">info@alexotoo.dev</a>
            </div>
          </div>
          <ContactForm />
        </section>
        <NavMobile />
      </main>
    </>
  );
}
