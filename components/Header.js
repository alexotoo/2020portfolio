import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";
import Logo from "./Logo";
import Menu from "./Menu";
import Overlay from "./Overlay";

export default function Header() {
  const [isClosed, setIsClosed] = useState(true);
  const sideNavHandler = () => {
    setIsClosed(!isClosed);
  };
  return (
    <>
      <Head>
        <meta
          name="portfolio"
          content="portfolio, freelance, javascript, web developer"
        />
        <title>Portfolio page</title>
      </Head>
      <Overlay isClosed={isClosed} sideNavHandler={sideNavHandler} />
      <div className="header">
        <FaBars onClick={sideNavHandler} className="menutoggler" />
        <Logo />
        <img src="/images/dp.jpg" alt="" className="dpImage" />
        <Menu isClosed={isClosed} />
        <ul className="nav__list nonedisplay">
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">Home</a>
            </Link>
          </li>
          <li className="nav__item">
            <a
              href="https://dev.to/alexooo"
              className="nav__link"
              target="_blank"
            >
              Blog
            </a>
          </li>
          <li className="nav__item">
            <Link href="/contact">
              <a className="nav__link">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
