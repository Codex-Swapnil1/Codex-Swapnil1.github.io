import { Box } from '@mui/joy'
import { Paper } from '@mui/material'
import React from 'react'

const ProjectCard = ({image,title,body,features,footerbody,links,tags}) => {

  let data = links
  console.log(data)
  return (
    <div>ProjectCard
    <Box sx={{
      width: "85%",
      margin: "auto",
      border: "1px solid red"
    }}>
    <Box>{title}</Box>
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
        width: "50%",
        margin: "auto",
        border: "1px solid yellow"
    }}
        >
          <img style={{width:"100%"}} src={image} alt={title} />
        </Box>
        <Box sx={{
        width: "48%",
        border: "1px solid orange",
        textAlign:"left",
        margin: "auto"
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

                <Box><a href={data.hrefg}> {data.textg} </a></Box>
                <Box><a href={data.hrefl}> {data.textl} </a></Box>

            </Box>
        </Box>
    </Box>
    <Box
    sx={{
        width: "93%",
        margin: "auto",
        border: "1px solid yellow"
    }}>techstack
    {/* {tags.map((list,i)=>{
      return (
        <Paper>
          {list[i]}
        </Paper>
      )
    })} */}
    </Box>
    </Box>
    </div>
  )
}

export default ProjectCard