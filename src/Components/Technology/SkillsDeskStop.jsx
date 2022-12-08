
import { Box } from '@mui/material'
import React from 'react'
import BackEndSkill from './BackEndSkill';
import Deployments from './Deployments';
import FrontEndSkill from './FrontEndSkill';
import ToolsAndPlatform from './ToolsAndPlatform';
import Uilab from './Uilab';

const SkillsDeskStop = () => {
  return (
    <div>
    <h1 style={{textAlign:"center", fontSize:"30px" ,color:"lightblue", marginBottom:"30px"}}>TechStack</h1>
    <Box fontSize={"20px"} width={"85%"} margin={"auto"}>I love to learn new things and experiment with new technologies.
These are some of the major languages, technologies, tools and platforms I have worked with:</Box>
    <Box justifyContent={"center"}>
        <Box
        sx={{
        justifyContent:"space-between",
        alignItems:"center",
        width:"85%",
        margin:"auto"}}

        >
            <Box >
            <Box m="20px 0px" sx={{color:"lightgray", fontSize:"25px",boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px"}}>FrontEndSkill</Box>
            <FrontEndSkill/>
            </Box>
            <Box>
            <Box m="20px 0px" sx={{color:"lightgray", fontSize:"25px",boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px"}}>BackEndSkill</Box>
            <BackEndSkill/>
            </Box>
            <Box>
            <Box m="20px 0px" sx={{color:"lightgray", fontSize:"25px",boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px"}}> Ui Library</Box>
            <Uilab/>
            </Box>
            <Box>
            <Box m="20px 0px" sx={{color:"lightgray", fontSize:"25px",boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px"}}>Deployments</Box>
            <Deployments/>
            </Box>
            <Box>
            <Box m="20px 0px" sx={{color:"lightgray", fontSize:"25px",boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px"}}>Tools And Platform</Box>
             <ToolsAndPlatform/>
             </Box>
        </Box>
    </Box>
    </div>
  )
}

export default SkillsDeskStop