import { FaGithubSquare, FaDev, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer__social">
        <a href="https://github.com/alexotoo" target="_blank">
          <FaGithubSquare />
        </a>
        <a href="https://dev.to/alexooo" target="_blank">
          <FaDev />
        </a>
        <a href="https://twitter.com/Qwesi_Alex" target="_blank">
          <FaTwitterSquare className="twitter" />
        </a>
      </div>
      <h1> alexotoo &#169;2020</h1>
      <h4>Created with Next Js and Deployed on Netlify</h4>
    </footer>
  );
}
