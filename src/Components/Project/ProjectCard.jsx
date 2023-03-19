import { Box } from '@mui/joy'
import { Chip } from '@mui/material'
import React from 'react'

const ProjectCard = ({image,title,body,features,footerbody,links,tags}) => {

  return (
    <div>
    <Box
    className="project-card"
    sx={{
      width: "95%",
      margin: "auto",
      marginBottom:"30px"
    }}>
    <Box class="project-title" sx={{padding:"10px",color:"lightblue"}}>{title}</Box>
    <Box
    sx={{
        display: 'flex',
        width: "75%",
        margin: "auto",
        flexWrap: "wrap",
        justifyContent:"space-around"
    }}
    >
        <Box
        sx={{
        width: "70%",
        minWidth: "320px",
        margin: "auto"
    }}
        >
          <img style={{width:"100%",maxHeight:"350px"}} src={image} alt={title} />
        </Box>
        <Box sx={{
        border: "1px solid gray",
        textAlign: "left",
        width:"70%",
        minWidth: "320px",
        maxWidth: "820px",
        paddingTop: "10px",
        fontSize:"17px"

    }}>
            <Box className="project-description" style={{padding:"5px 20px"}}><span style={{color:"lightgray", padding:"0px 5px"}}>Description: </span>{body}</Box>
            <Box style={{padding:"5px 20px"}}><span style={{color:"lightgray", padding:"0px 5px"}}>Features: </span>{features}</Box>
            <Box style={{padding:"5px 20px"}}>{footerbody}</Box>
            <Box
    sx={{
        minWidth: "320px",
        margin: "auto",
        color: "lightgray",
        border: "1px solid gray",
        textAlign: "center"
    }}>
    <Box class="project-tech-stack">
    {tags.map((list,i)=>{
      return (

        <Chip sx={{
          backgroundColor: "lightgray",
          boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px",
          margin: "5px"
        }} label={list} />

      )
    })}
    </Box>
    </Box>
            <Box
             sx={{
                display: 'flex',
                gap:"20px",
                justifyContent: 'center',
                margin:"10px"
             }}
             >
                <Box className="project-github-link" sx={{padding:"6px 10px", backgroundColor:"lightgray",borderRadius:"5px"}}>
                <a style={{textDecoration:"none",color:"black"}}
                 href={links.hrefg} target="_blank" rel="noopener"> {links.textg} </a>
                </Box>

                <Box class="project-deployed-link" sx={{padding:"6px 10px", backgroundColor:"lightgray",borderRadius:"5px"}}>
                <a
                style={{textDecoration:"none",color:"black"}}
                 href={links.hrefl} target="_blank" rel="noopener"> {links.textl} </a>
                </Box>

            </Box>
        </Box>
    </Box>

    </Box>
    </div>
  )
}

export default ProjectCard