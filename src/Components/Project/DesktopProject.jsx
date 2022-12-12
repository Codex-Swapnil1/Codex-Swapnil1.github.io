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
          item={item}
            />
          )
        })}
        </Box>
        <Box>My GitHub Stats</Box>
        <Box>

<a href="http://www.github.com/Codex-Swapnil1"><img src="https://github-readme-stats.vercel.app/api?username=Codex-Swapnil1&show_icons=true&hide=&count_private=true&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&show_icons=true" alt="Codex-Swapnil1's GitHub stats" /></a>

<a href="https://github.com/Codex-Swapnil1" align="left"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Codex-Swapnil1&langs_count=10&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&locale=en&custom_title=Top%20%Languages" alt="Top Languages" /></a>
        </Box>
    </div>
  )
}

export default DesktopProject