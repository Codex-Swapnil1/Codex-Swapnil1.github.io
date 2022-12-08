import { Box } from '@mui/material'
import React from 'react'
import SoftSkills from './SoftSkills'
import TechnicalSkills from './TechnicalSkills'

const DesktopSkill = () => {
  return (
    <div>
    <h1 style={{textAlign:"center", fontSize:"30px" ,color:"lightblue", marginBottom:"30px"}}>Skills</h1>
    <Box sx={{display:"flex", width:"85%", margin:"auto", justifyContent:"space-around"}}>

        <Box sx={{width: "40%",margin:"0px 50px"}}>
        <Box
         m="20px 0px"
         sx={{color:"lightgray",
          fontSize:"20px",
          boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px",
          maxWidth:"450px"

          }}>Soft Skills</Box>
        <Box><SoftSkills/></Box>
        </Box>

        <Box sx={{width: "40%",marginRight:"50px"}}>
        <Box m="20px 0px"
         sx={{color:"lightgray",
          fontSize:"20px",
          boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px",
          maxWidth:"450px"

          }}>Technical Skills</Box>
          <Box><TechnicalSkills/></Box>
        </Box>
    </Box>

    </div>
  )
}

export default DesktopSkill