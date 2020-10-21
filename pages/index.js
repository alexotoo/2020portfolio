import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>alex otoo portfolio</title>
      </Head>

      <main className={styles.main}>
        <h1>this is alex portfo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          repellat nostrum nobis alias eligendi sequi odit aliquid voluptates
          ratione facere dolorem vero sed deleniti inventore perferendis,
          tempora culpa nulla? Iste?
        </p>
      </main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
