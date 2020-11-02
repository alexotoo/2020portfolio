import { useState } from "react";
import { FaBars } from "react-icons/fa";

import Link from "next/link";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  const [isClosed, setIsClosed] = useState(true);
  const sideNavHandler = () => {
    setIsClosed(!isClosed);
  };
  return (
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
          <Link href="/">
            <a className="nav__link">Blog</a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/">
            <a className="nav__link">Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
