import Head from "next/head";
import Button from "../components/Button";
import Image from "next/image";
import Layout from "../components/Layout";
import "../styles/styles.scss";

export default function Home() {
  return (
    <Layout>
      <header className="hero">
        <Image
          src="/images/profilbg.jpg"
          width="1920"
          height="1200"
          alt="Profile Picture"
          className="heroImage"
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
              <Image
                src="/images/profile-pic.png"
                width="2059"
                height="3157"
                alt="Profile Picture"
                className="heroImage"
              />
            </div>

            <hr />
          </div>
        </section>
      </main>
    </Layout>
  );
}
