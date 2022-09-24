import { Box, Paper } from '@mui/material'
import React from 'react'

const SkillsList = ({skills}) => {
  return (
    <>
        {skills.map( (item)=>(
            <Box key={item.id}
         sx={{textAlign: 'left',
         width :"100%",
         backgroundColor : "rgb(44,44,56)",
         boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px",
         padding :"13px 6px",
         maxWidth:"450px",
         marginTop : "12px"
         }}>
                {item.skill}
            </Box>
        ))}
    </>
  )
}

export default SkillsList