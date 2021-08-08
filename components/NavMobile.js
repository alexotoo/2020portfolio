import React, { useEffect } from "react";
import Link from "next/link";
import { VscHome, VscAccount, VscBeaker, VscMention } from "react-icons/vsc";
import { useRouter } from "next/router";

function NavMobile() {
  const router = useRouter();

  useEffect(() => {
    const indicator = document.querySelector(".nav-indicator");
    const items = document.querySelectorAll(".nav-item");

    items.forEach((item, index) => {
      if (router.pathname == "/") {
        items[0].classList.add("is-active");
        item.addEventListener("click", (e) => {
          handleIndicator(e.target);
        });
      } else if (router.pathname == "/about") {
        items[1].classList.add("is-active");
        item.addEventListener("click", (e) => {
          handleIndicator(e.target);
        });
      } else if (router.pathname == "/projects") {
        items[2].classList.add("is-active");
        item.addEventListener("click", (e) => {
          handleIndicator(e.target);
        });
      } else if (router.pathname == "/contact") {
        items[3].classList.add("is-active");
        item.addEventListener("click", (e) => {
          handleIndicator(e.target);
        });
      }
      item.classList.contains("is-active") && handleIndicator(item);
    });

    function handleIndicator(el) {
      console.log(items);
      items.forEach((item) => {
        item.classList.remove("is-active");
        item.removeAttribute("style");
      });

      indicator.style.width = `${el.offsetWidth}px`;
      indicator.style.left = `${el.offsetLeft}px`;
      indicator.style.backgroundColor = el.getAttribute("active-color");

      el.classList.add("is-active");
      el.style.color = el.getAttribute("active-color");
    }
  }, []);

  return (
    <nav className="nav">
      <Link href="/">
        <a className="nav-item" active-color="white">
          <VscHome className="navIcons" />
          Home
        </a>
      </Link>
      <Link href="/about">
        <a className="nav-item" active-color="white">
          <VscAccount className="navIcons" />
          About
        </a>
      </Link>
      <Link href="/projects">
        <a className="nav-item" active-color="white">
          <VscBeaker className="navIcons" />
          Projects
        </a>
      </Link>
      <Link href="/contact">
        <a className="nav-item" active-color="white">
          <VscMention className="navIcons" />
          Contact
        </a>
      </Link>
      <span className="nav-indicator"></span>
    </nav>
  );
}

export default NavMobile;
