import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY > 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  window.addEventListener("scroll", changeNavColor);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={colorChange ? "navbar navbar-nottransparent" : "navbar"}>
      <div className="navbar__container">
        <ul
          className={
            click
              ? "navbar__options navbar__options--active"
              : "navbar__options"
          }
        >
          <li>
            <Link
              className="navbar__option"
              to="home"
              onClick={closeMobileMenu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="navbar__option"
              onClick={closeMobileMenu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              className="navbar__option"
              onClick={closeMobileMenu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className="navbar__option"
              onClick={closeMobileMenu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="navbar__option"
              onClick={closeMobileMenu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="mobile-menu__icon" />
        ) : (
          <MenuIcon className="mobile-menu__icon" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
