import { Box } from '@mui/joy'
import { Paper , Chip } from '@mui/material'
import React from 'react'

const ProjectCard = ({image,title,body,features,footerbody,links,tags}) => {

  return (
    <div>ProjectCard
    <Box sx={{
      width: "95%",
      margin: "auto",
      border: "1px solid red"
    }}>
    <Box>{title}</Box>
    <Box
    sx={{
        display: 'flex',
        width: "75%",
        margin: "auto",
        flexWrap: "wrap",
        justifyContent:"space-around",
        border: "1px solid green"
    }}
    >
        <Box
        sx={{
        width: "70%",
        minWidth: "320px",
        margin: "auto",
        border: "1px solid yellow",
    }}
        >
          <img style={{width:"100%",maxHeight:"350px"}} src={image} alt={title} />
        </Box>
        <Box sx={{
        border: "1px solid orange",
        textAlign: "left",
        width:"70%",
        minWidth: "320px",
        maxWidth: "820px",

    }}>
            <Box style={{padding:"5px 20px"}}><span style={{color:"lightgray", padding:"0px 5px"}}>Details: </span>{body}</Box>
            <Box style={{padding:"5px 20px"}}><span style={{color:"lightgray", padding:"0px 5px"}}>Features: </span>{features}</Box>
            <Box style={{padding:"5px 20px"}}>{footerbody}</Box>
            <Box
             sx={{
                display: 'flex',
                gap:"10px",
                justifyContent: 'center'
             }}
             >

                <Box><a href={links.hrefg} target="_blank"
       rel="noopener"> {links.textg} </a></Box>
                <Box><a href={links.hrefl} target="_blank"
       rel="noopener"> {links.textl} </a></Box>

            </Box>
        </Box>
    </Box>
    <Box
    sx={{
        maxWidth: "53%",
        minWidth: "320px",
        margin: "auto",
        color: "lightgray",
        border: "1px solid pink"
    }}> Techstack
    <Box >
    {tags.map((list,i)=>{
      return (

        <Chip sx={{
          backgroundColor: "lightgray",
          boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px",
          margin: "5px"
        }} label={list} variant="outlined" />

      )
    })}
    </Box>
    </Box>
    </Box>
    </div>
  )
}

export default ProjectCard