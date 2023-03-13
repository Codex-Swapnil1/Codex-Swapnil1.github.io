import React from 'react';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from "styled-components"
import { Box } from '@mui/system';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


export const Contact = () => {
  return (
    <TableCompo id="contact">
    <div style={{margin:"auto",width:"85%"}}>
    <Box className='contactHeader'>
    Contact
    </Box>
    <Box border="1px solid lightblue" h="60vh" mb="50px">
      <Box className="contact-details">
      <Box maxWidth={"600px"} sx={{m:"auto",padding:"10px",mb:"50px"}}>
        <Box sx={{display:"flex",justifyContent:"space-between", flexWrap:"wrap", gap:"20px",textAlign:"left", marginTop:"15px"}}>
        <Box w="20%" h="50px">Email :</Box>
        <Box w="60%"> swapnilparchakewrd2@gmail.com</Box>
        </Box>
        <Box sx={{display:"flex",textAlign:"left",flexWrap:"wrap",justifyContent:"space-between", gap:"20px", marginTop:"15px"}}>
        <Box w="20%">Mobile :</Box>
        <Box w="60%"> +91 8806991178</Box>
        </Box>
        <Box sx={{display:"flex",textAlign:"left",flexWrap:"wrap",justifyContent:"space-between", gap:"20px", marginTop:"15px"}}>
        <Box w="20%">
          Location :
        </Box>
        <Box w="60%">
          Wardha, Maharashtra
        </Box>
        </Box>
        </Box>
      </Box>

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

      <Box mt="20px" mb="40px" fontFamily={"monospace"} color="orange">Made With 💖 by Swapnil</Box>
      </Box>
    </div>

    </TableCompo>
  )
}

const TableCompo = styled.div`
.contactHeader{
  text-align:center;
   font-size: 30px ;
   color:lightblue;
    margin:  30px 0px;
}
.contact-details{
  display:block;
     min-width:280px;
      height:23vh;

}
tr{
  font-size: 16px;
  margin: 10px;
}
td{
  padding: 1vw;
}
@media only screen and (max-width: 770px){
  div{
    font-size: 13px;
  }
}
`
