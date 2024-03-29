import { FaGithubSquare, FaDev, FaTwitterSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="footer__social">
        <a
          href="https://github.com/alexotoo"
          target="_blank"
          className="icon-gt"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/abrahamalexotoo/"
          target="_blank"
          className="icon-dev"
        >
          <GrLinkedin />
        </a>
        <a
          href="https://twitter.com/Qwesi_Alex"
          target="_blank"
          className="icon-t"
        >
          <FaTwitterSquare className="twitter" />
        </a>
      </div>
      <Logo />
      <h1>&#169; {new Date().getFullYear()}</h1>
      <h2>Created with Next Js and Deployed on Vercel</h2>
    </footer>
  );
}
