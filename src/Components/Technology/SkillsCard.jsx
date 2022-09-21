import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';

export default function SkillsCard({title, icon,id,Item}) {
  return (
    <Item key ={id} sx={{maxWidth: 120,height:160,backgroundColor:"whitesmoke",boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px"}}>
        <Box sx ={{width: "100px",margin:"auto",height:"100px",padding:"2px"}}>
        <img style={{width:"100%",height:"100%"}} src={icon} alt={title}/>
        </Box>

      <Divider sx={{margin:"10px 0px"}}/>

        <Box sx={{fontWeight:"bold",fontSize:"15px"}}>
          {title}
        </Box>



    </Item>
  );
}
