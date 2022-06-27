import NavMobile from "../components/NavMobile";
import { Button as Btn } from "../components/UtillsAndLayoutComponents";

function projects() {
  return (
    <>
      <section className=" project__page">
        <h1 className="title pb1">
          <span className="blue">Projects</span>
        </h1>
        <p className="featured__title">featured projects</p>
        <div className="featured mt">
          <article className="featured__card">
            <img src="../images/fp-j.png" alt="" className="featured__img" />
            <div className="featured__text">
              <p>Job Hunt Records App</p>
              <p className="blue  ">
                Next.js | Express.js | REST API | Mongo DB | Node.js |
                JavaScript | Chakra UI
              </p>
              <p className="mb">
                A Full Stack web app with API hosted on Heroku and Front-End
                hosted on Vercel. It’s a full CRUD application with Mongo DB
                database implementation.
              </p>

              <div className="featured__btn">
                <a
                  className="featured__btn-btn"
                  href="https://jobsapps.vercel.app/"
                  target="_blank"
                >
                  <Btn>Demo</Btn>
                </a>
                <a
                  className="featured__btn-btn"
                  href="https://github.com/alexotoo/jobifyfullstack"
                  target="_blank"
                >
                  <Btn>GitHub</Btn>
                </a>
              </div>
            </div>
          </article>
          <article className="featured__card">
            <img src="../images/fp-t.png" alt="" className="featured__img" />
            <div className="featured__text">
              <p>Demo Crypto Business website</p>
              <p className="blue">
                NEXT JS | Chakra UI | JavaScript | GreenSock{" "}
              </p>
              <p className="mb">
                Crypto businesses are all over the place. This website is a
                responsive website to demonstrate how a modern crypto business
                website should feel like.
              </p>

              <div className="featured__btn">
                <a
                  className="featured__btn-btn"
                  href="https://cryptotoo.vercel.app/"
                  target="_blank"
                >
                  <Btn>Demo</Btn>
                </a>
                <a
                  className="featured__btn-btn"
                  href="https://github.com/alexotoo/trading"
                  target="_blank"
                >
                  <Btn>GitHub</Btn>
                </a>
              </div>
            </div>
          </article>
          <article className="featured__card">
            <img src="../images/fp-f.png" alt="" className="featured__img" />
            <div className="featured__text">
              <p>Food Recipe Search App</p>
              <p className="blue  ">Edamam API | NEXT JS | JavaScript</p>
              <p className="mb">
                A beautiful food recipe search website (SPA) built using a
                popular food API called Edamam. Visit the demo and search for
                your favourite food recipe
              </p>

              <div className="featured__btn">
                <a href="https://foodapp-eta.vercel.app/" target="_blank">
                  <Btn>Demo</Btn>
                </a>
                <a
                  className="featured__btn-btn"
                  href="https://github.com/alexotoo/foodapp"
                  target="_blank"
                >
                  <Btn>GitHub</Btn>
                </a>
              </div>
            </div>
          </article>
        </div>

        <p className="featured__title">Other projects</p>
        <div className="project-showcase">
          {/* projects */}
          <div className="projects__skills mt ">
            <div className="projects__projectwrapper pmx">
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
      <NavMobile />
    </>
  );
}

export default projects;
