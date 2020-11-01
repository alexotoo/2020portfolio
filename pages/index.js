import Head from "next/head";
import Button from "../components/Button";
import Image from "next/image";
import Layout from "../components/Layout";
import "../styles/styles.scss";

export default function Home() {
  return (
    <Layout>
      <header className="hero">
        <img
          src="/images/profilbg.jpg"
          alt="hero imagw"
          className="heroImage image"
        />
        <div className="hero_text-box">
          <h2 className="hero_text-greet">Hello!</h2>
          <h2 className="hero_text">I'm Alex Otoo</h2>
          <h1 className="hero_text">a web developer</h1>
        </div>
      </header>
      <main>
        {/* about section  */}
        <section className="about">
          <h1 className="title">
            About <span className="blue">Me</span>
          </h1>
          <div className="about-content">
            <div className="about-content__text">
              <p className="">
                I build high quality, fast and tailor-made solution driven
                websites.
                <br />
                <br /> I am a web developer currently focused on front-end
                development based in Toronto. My motivation is to use my web
                development skills to bring about business solutions on the web
                in an amazing manner!.
                <br /> <br /> Currently, I am available for a suitable web
                development position with opportunity for continuous learning.
              </p>
              <Button>Contact me</Button>
            </div>
            <div className="about-content__img">
              <img
                src="/images/profile-pic.png"
                alt="Profile Picture"
                className="aboutImage image"
              />
            </div>
          </div>
          <hr />
        </section>
        <section className="projects">
          <h1 className="title">
            My <span className="blue">Projects</span>
          </h1>
          <p className=" pb1">
            Welcome to my Projects. Below are my skills set and fun projects I
            have made. Enjoy!
          </p>
          <div className="project-showcase">
            <div className="projects__skills">
              <p className="textshadow">skills</p>
              <div className="projects__skillswrapper">
                <article className="projects__card">
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
              </div>
            </div>
            {/* projects */}
            <div className="projects__skills mt ">
              <p className="textshadow">Projects</p>
              <p className="pb1">
                click image to visit website or the button below it to view
                code.
              </p>
              <div className="projects__projectwrapper">
                <article className="projects__project-card">
                  <a href="https://tailwindproj.netlify.app/" target="_blank">
                    <img src="/images/project1.png" alt="" className="image" />
                  </a>
                  <Button>
                    <a href="" className="projects__codelinks">
                      Visit Code
                    </a>
                  </Button>
                </article>
                <article className="projects__project-card">
                  <a href="https://alexooo-agency.netlify.app/" target="_blank">
                    <img src="/images/project2.png" alt="" className="image" />
                  </a>
                  <Button>
                    <a href="" className="projects__codelinks">
                      Visit Code
                    </a>
                  </Button>
                </article>
                <article className="projects__project-card">
                  <a href="https://burgerpalace.netlify.app/" target="_blank">
                    <img src="/images/project3.png" alt="" className="image" />
                  </a>
                  <Button>
                    <a href="" className="projects__codelinks">
                      Visit Code
                    </a>
                  </Button>
                </article>
                <article className="projects__project-card">
                  <a href="https://xtremfit.netlify.app/" target="_blank">
                    <img src="/images/project4.png" alt="" className="image" />
                  </a>
                  <Button>
                    <a href="" className="projects__codelinks">
                      Visit Code
                    </a>
                  </Button>
                </article>
                <article className="projects__project-card">
                  <a href="https://scooter-bikes.netlify.app/" target="_blank">
                    <img src="/images/project5.png" alt="" className="image" />
                  </a>
                  <Button>
                    <a href="" className="projects__codelinks">
                      Visit Code
                    </a>
                  </Button>
                </article>
                <article className="projects__project-card">
                  <a href="https://alexooo-cakes.netlify.app/" target="_blank">
                    <img src="/images/project6.png" alt="" className="image" />
                  </a>
                  <Button>
                    <a href="" className="projects__codelinks">
                      Visit Code
                    </a>
                  </Button>
                </article>
                <article className="projects__project-card">
                  <a
                    href="https://reactjs-budget-app.netlify.app/"
                    target="_blank"
                  >
                    <img src="/images/project7.png" alt="" className="image" />
                  </a>
                  <Button>
                    <a href="" className="projects__codelinks">
                      Visit Code
                    </a>
                  </Button>
                </article>
              </div>
            </div>
          </div>
          <hr className="mt1" />
        </section>
      </main>
    </Layout>
  );
}
