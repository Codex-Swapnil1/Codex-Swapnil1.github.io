import React from 'react';
import { Link } from "react-scroll";
import navstyle from "./Navbarcss.module.css";

export const NavbarMenu = () => {
  return (
    <div>
     <nav className={navstyle.nav__container__actions}>
          <ul>
            <li>
              <Link activeClass={navstyle.active} smooth spy to="home">
              Home
              </Link>
            </li>
            <li>
              <Link activeClass={navstyle.active} smooth spy to="about">
              About
              </Link>
            </li>
            <li>
              <Link activeClass={navstyle.active} smooth spy to="skills">
              Skills
              </Link>
            </li>
            <li>
              <Link activeClass={navstyle.active} smooth spy to="education">
              Education
              </Link>
            </li>
            <li>
              <Link activeClass={navstyle.active} smooth spy to="experience">
              Experience
              </Link>
            </li>
            <li>
              <Link activeClass={navstyle.active} smooth spy to="projects">
              Projects
              </Link>
            </li>
            <li>
              <Link activeClass={navstyle.active} smooth spy to="contact">
              Contact
              </Link>
            </li>
            <li>
            Resume
            </li>
          </ul>
        </nav>

    </div>
  )
}
