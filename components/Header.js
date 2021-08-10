import Head from "next/head";
import Link from "next/link";
import Logo from "./Logo";
import styles from "./header.module.scss";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          name="portfolio"
          content="portfolio, freelance, javascript, web developer"
        />
        <title>Portfolio page</title>
      </Head>

      <div className={styles.navbar}>
        <Logo />
        <ul className={styles.navList}>
          <Link href="/">
            <li className={styles.navItem}>
              <a className={router.pathname == "/" ? "active" : "nav__link"}>
                Home
              </a>
            </li>
          </Link>
          <Link href="/about">
            <li className={styles.navItem}>
              <a
                className={router.pathname == "/about" ? "active" : "nav__link"}
              >
                About
              </a>
            </li>
          </Link>
          <Link href="/projects">
            <li className={styles.navItem}>
              <a
                className={
                  router.pathname == "/projects" ? "active" : "nav__link"
                }
              >
                Projects
              </a>
            </li>
          </Link>
          <Link href="/contact">
            <li className={styles.navItem}>
              <a
                className={
                  router.pathname == "/contact" ? "active" : "nav__link"
                }
              >
                Contact
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
