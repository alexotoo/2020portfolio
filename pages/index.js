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
    <Layout>
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
        <p className="text mt mb1">
          let me help you standout with better, beautiful, professional and
          improved websites.
        </p>

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
                    <a href="https://xtremgym.netlify.app/" target="_blank"></a>

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
              <Link href="/projects">
                <a className="seeMore">
                  <p>see more projects</p>
                  <BsArrowRight />
                </a>
              </Link>
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
                src="/images/skills-photoshop.png"
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
              As a self-taught web developer, the best part of what I do is
              always learning and mastering my skills. I enjoy building engaging
              websites.
              <br /> I am currently focused on front-end, my motivation is to
              use my web development skills to develop results driven websites
              which offers maximum business solution potentials and sustained
              clients satisfaction.
              <br /> <br /> Currently, I am available for freelancing or a
              suitable web development position with opportunities for
              continuous learning.
            </p>
            <div className="mb1"></div>
            <Link href="/contact">
              <a className="mt1">
                <Btn>Contact Me</Btn>
              </a>
            </Link>
          </div>
        </section>
        <hr />
        <div className="mt1"></div>
        <section className="contact">
          <div className="contact__contacts">
            <div className="contact__contacts-info">
              <FaMobileAlt className="info_icon " />

              <a href="https://wa.me/233244113073" target="_blank">
                <p>+233 244 113 073</p>
                <h1>WhatsApp me</h1>
              </a>
            </div>
            <div className="contact__contacts-info">
              <FaEnvelope className="info_icon " />
              <h1>alexotoous@outlook.com</h1>
            </div>
          </div>
          <ContactForm />
        </section>
        <NavMobile />
      </main>
    </Layout>
  );
}
