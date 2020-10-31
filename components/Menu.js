import Link from "next/link";
import clsx from "clsx";

export default function Menu({ isClosed }) {
  let sidenavToggle = clsx("nav", isClosed && "isClosed");
  return (
    <nav className={sidenavToggle}>
      <ul className="nav__list">
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
    </nav>
  );
}
