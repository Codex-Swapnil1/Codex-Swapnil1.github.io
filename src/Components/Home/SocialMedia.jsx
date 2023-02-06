import React from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import FileSaver from 'file-saver';

const SocialMedia = () => {
  const saveFile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resources/Swapnil_Parchake_Resume.pdf",
      "Swapnil_Parchake_Resume.pdf"
    );
    };
  return (
    <div style={{paddingTop:"30px"}} >

    <Stack spacing={2} direction="row" sx={{boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px",width:"280px"}}>
      <IconButton
       aria-label="LinkedIn"
       href="https://linkedin.com/in/swapnilparchake"
       target="_blank"
       rel="noopener"
       >
         <LinkedInIcon sx={{fontSize:"40px",color:"lightblue"}} />
       </IconButton>

      <IconButton
       href="https://github.com/Codex-Swapnil1"
      aria-label="GitHub"
      target="_blank"
       rel="noopener"
      >
      <GitHubIcon sx={{fontSize:"40px",color:"lightblue"}}/>
      </IconButton>

      <IconButton
      href="mailto:swapnilparchakewrd2@gmail.com"
      aria-label="MailOutline"
      >
      <MailOutlineIcon fontSize="inherit" sx={{fontSize:"40px",color:"lightblue"}} />
      </IconButton>

      <IconButton
       href="https://drive.google.com/file/d/1tDlKA8oN7c_-eGfz7EYgZQvBzgOUeJDs/view?usp=share_link"
      aria-label="Resume"
      target="_blank"
       rel="noopener"
       onClick={saveFile}
      >
      <FileOpenIcon sx={{fontSize:"40px",color:"lightblue"}}/>
      </IconButton>
    </Stack>

    </div>
  )
}

export default SocialMedia