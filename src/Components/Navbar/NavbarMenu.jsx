import React from 'react';
import { Link } from "react-scroll";
import navstyle from "./Navbarcss.module.css";
import FileSaver from 'file-saver';

export const NavbarMenu = () => {
  const saveFile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resources/resume.pdf",
      "Swapnilresume.pdf"
    );
    };
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
              <Link activeClass={navstyle.active} smooth spy to="techstack">
              TechStack
              </Link>
            </li>
            <li>
              <Link activeClass={navstyle.active} smooth spy to="skills">
              Skills
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
            <li style={{color:"lightgray",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}
            onClick={saveFile}>
            Resume
            </li>
          </ul>
        </nav>

    </div>
  )
}

