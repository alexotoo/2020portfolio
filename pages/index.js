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
      </main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
