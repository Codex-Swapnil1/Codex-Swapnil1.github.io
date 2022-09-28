import { Box } from '@mui/material'
import React from 'react'
import { projects } from './project'
import ProjectCard from './ProjectCard'

const DesktopProject = () => {
  return (
    <div>DesktopProject
        <Box>
        {projects.map(item=>{
          return (
          <ProjectCard key={item.id}
          image={item.image}
          title={item.title}
          body={item.bodyText}
          features={item.features}
          footerbody={item.team}
          links={item.links}
          tags={item.tags}
            />
          )
        })}
        </Box>
    </div>
  )
}

export default DesktopProject