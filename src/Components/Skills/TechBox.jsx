import { Box } from '@mui/material'
import React from 'react'
import Demo from "./Demo"
import { techskill } from './skillsdata'

const TechBox = () => {
  return (
    <div>

    {techskill.map((item)=>(

        <Box
        key={item.id}
         sx={{display:"flex",
         justifyContent:"space-between",
         width :"100%",
         backgroundColor : "rgb(44,44,56)",
         boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px",
         padding :"2px 6px",
         maxWidth:"450px",
         marginTop : "12px"
         }}>
            <Box sx={{paddingTop:"5px"}}
             >{item.skill}</Box>
            <Box><Demo level={item.level}/></Box>
        </Box>
    ))}
    </div>
  )
}

export default TechBox