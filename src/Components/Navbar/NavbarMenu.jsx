import React from 'react';
import { Link } from "react-scroll";
import navstyle from "./Navbarcss.module.css";
import FileSaver from 'file-saver';
export const NavbarMenu = () => {
  const saveFile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resources/Swapnil_Parchake_Resume.pdf",
      "fw15_052-Swapnil-Parchake-Resume.pdf"
    );
    };
  return (
    <div>
     <nav className={navstyle.nav__container__actions}>
          <ul>
            <li>
              <Link className="nav-link home" activeClass={navstyle.active} smooth spy to="home">
               Home
              </Link>
            </li>
            <li>
              <Link className="nav-link about" activeClass={navstyle.active} smooth spy to="about">
             About Me
              </Link>
            </li>
            <li>
              <Link className="nav-link skills" activeClass={navstyle.active} smooth spy to="skills">
              Skills
              </Link>
            </li>
            <li>
              <Link className="nav-link projects" activeClass={navstyle.active} smooth spy to="projects">
             Projects
              </Link>
            </li>
            <li>
              <Link className="nav-link contact" activeClass={navstyle.active} smooth spy to="contact">
               Contact
              </Link>
            </li>
            <li style={{color:"lightgray",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}
            className="nav-link resume"
       >
            <a
            id="resume-link-1"
            href="https://drive.google.com/file/d/1tDlKA8oN7c_-eGfz7EYgZQvBzgOUeJDs/view?usp=share_link"
        target="_blank"
       rel="noopener"
       onClick={saveFile}
       style={{color: "lightgray",textDecoration:"none"}}
       >Resume</a>
            </li>
          </ul>
        </nav>

    </div>
  )
}

