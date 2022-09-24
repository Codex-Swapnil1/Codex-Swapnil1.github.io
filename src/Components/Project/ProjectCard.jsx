import { Box } from '@mui/joy'
import React from 'react'

const ProjectCard = () => {
  return (
    <div>ProjectCard
    <Box sx={{
      width: "85%",
      margin: "auto",
      border: "1px solid red"
    }}>
    <Box>Name</Box>
    <Box
    sx={{
        display: 'flex',
        width: "95%",
        margin: "auto",
        justifyContent:"space-around",
        border: "1px solid green"
    }}
    >
        <Box
        sx={{
        width: "48%",
        margin: "auto",
        border: "1px solid yellow"
    }}
        >image</Box>
        <Box sx={{
        width: "48%",
        margin: "auto",
        border: "1px solid orange"
    }}>
            <Box>details</Box>
            <Box>list</Box>
            <Box>Team</Box>
            <Box
             sx={{
                display: 'flex',
                gap:"10px",
                justifyContent: 'center'
             }}
             >
            <Box>Live</Box>
            <Box>Github</Box>
            </Box>
        </Box>
    </Box>
    <Box
    sx={{
        width: "93%",
        margin: "auto",
        border: "1px solid yellow"
    }}>techstack</Box>
    </Box>
    </div>
  )
}

export default ProjectCard