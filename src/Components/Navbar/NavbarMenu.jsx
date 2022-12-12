import React from 'react';
import { Link } from "react-scroll";
import navstyle from "./Navbarcss.module.css";
import FileSaver from 'file-saver';
import HomeIcon from '@mui/icons-material/Home';
import FaceIcon from '@mui/icons-material/Face';
import CodeIcon from '@mui/icons-material/Code';
import FolderIcon from '@mui/icons-material/Folder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeveloperModeTwoToneIcon from '@mui/icons-material/DeveloperModeTwoTone';

export const NavbarMenu = () => {
  const saveFile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resources/Swapnil_Parchake_Resume.pdf",
      "Swapnil_Parchake_Resume.pdf"
    );
    };
  return (
    <div>
     <nav className={navstyle.nav__container__actions}>
          <ul>
            <li>
              <Link activeClass={navstyle.active} smooth spy to="home">
               <HomeIcon sx={{paddingLeft:"20%"}}/> <br/> Home
              </Link>
            </li>
            <li>
              <Link activeClass={navstyle.active} smooth spy to="about">
              <FaceIcon sx={{paddingLeft:"25%"}}/> <br/> About Me
              </Link>
            </li>
            <li>
              <Link activeClass={navstyle.active} smooth spy to="techstack">
              <CodeIcon sx={{paddingLeft:"30%"}}/> <br/> Technical
              </Link>
            </li>
            <li>
              <Link activeClass={navstyle.active} smooth spy to="skills">
              <DeveloperModeTwoToneIcon sx={{paddingLeft:"25%"}}/> <br/>
              Skills
              </Link>
            </li>
            <li>
              <Link activeClass={navstyle.active} smooth spy to="projects">
              <FolderIcon sx={{paddingLeft:"30%"}}/> <br/> Projects
              </Link>
            </li>
            <li>
              <Link activeClass={navstyle.active} smooth spy to="contact">
               <PeopleAltIcon sx={{paddingLeft:"28%"}}/> <br/> Contact
              </Link>
            </li>
            <li style={{color:"lightgray",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}
            onClick={saveFile}>
            <FileDownloadIcon sx={{paddingLeft:"25%"}}/> <br/> Resume
            </li>
          </ul>
        </nav>

    </div>
  )
}

