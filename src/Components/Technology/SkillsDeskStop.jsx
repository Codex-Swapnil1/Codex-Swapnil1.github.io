
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
    <Box justifyContent={"center"}>
        <Box
        sx={{
        justifyContent:"space-between",
        alignItems:"center",
        width:"85%",
        margin:"auto"}}

        >
            <Box >

            <Box m="20px auto"
            sx={{color:"lightgray",
             fontSize:"25px",
             boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px",
             width:"fit-content",
             padding:"10px 30px",
             }}>Frontend Skill</Box>


            <FrontEndSkill/>
            </Box>
            <Box >
            <Box m="20px auto"  sx={{color:"lightgray", fontSize:"25px",boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px",width:"fit-content",padding:"10px 30px"}}>Backend Skill</Box>
            <BackEndSkill/>
            </Box>
            <Box>
            <Box m="20px auto" sx={{color:"lightgray", fontSize:"25px",boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px",width:"fit-content",padding:"10px 30px"}}> Ui Library</Box>
            <Uilab/>
            </Box>
            <Box>
            <Box m="20px auto" sx={{color:"lightgray", fontSize:"25px",boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px",width:"fit-content",padding:"10px 30px"}}>Deployments</Box>
            <Deployments/>
            </Box>
            <Box>
            <Box m="20px auto" sx={{color:"lightgray", fontSize:"25px",boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px",width:"fit-content",padding:"10px 30px"}}>Tools And Platform</Box>
             <ToolsAndPlatform/>
             </Box>
        </Box>
    </Box>
    </div>
  )
}

export default SkillsDeskStop