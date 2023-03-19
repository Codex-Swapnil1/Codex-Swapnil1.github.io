import * as React from 'react';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';

export default function SkillsCard({title, icon,id,Item}) {
  return (
    <Item key ={id} class="skills-card" sx={{height:160, backgroundColor:"transparent",boxShadow: "rgba(0,0,0, 0.2) 0px 1px 3px 3px"}}>
        <Box class="skills-card-img" sx ={{width: "100px",margin:"auto",height:"100px",padding:"2px"}}>
        <img style={{width:"100%",height:"100%"}} src={icon} alt={title}/>
        </Box>

      <Divider sx={{margin:"10px 0px"}}/>

        <Box class="skills-card-name" sx={{fontWeight:"bold",fontSize:"16px",color:"gray"}}>
          {title}
        </Box>



    </Item>
  );
}
