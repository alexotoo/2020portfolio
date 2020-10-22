import Head from "next/head";
import Button from "../components/Button";
//import styles from "../styles/Home.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>alex otoo portfolio</title>
      </Head>
      <main className="red">
        <Button />
        <h1>this is alex portfo</h1>
        {/* <img src="/images/project1.png" alt="" /> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          repellat nostrum nobis alias eligendi sequi odit aliquid voluptates
          ratione facere dolorem vero sed deleniti inventore perferendis,
          tempora culpa nulla? Iste?
        </p>
        <a href="">hello there</a>
      </main>

      <footer>footer</footer>
    </div>
  );
}
