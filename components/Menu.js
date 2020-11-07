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
    </nav>
  );
}
