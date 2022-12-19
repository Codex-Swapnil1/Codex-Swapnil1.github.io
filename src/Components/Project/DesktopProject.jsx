import { Box } from '@mui/material'
import React from 'react'
import { projects } from './project'
import ProjectCard from './ProjectCard'
import GitHubCalender from "react-github-calendar"

const DesktopProject = () => {
  return (
    <div>
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
        <Box padding={"20px"}>
        <Box maxWidth={"1200px"}  sx={{margin:"30px auto", padding:"20px", boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px"}}>
  <GitHubCalender
   username="Codex-Swapnil1"
   blockSize= {14}
   />

</Box>
        <Box sx={{display:"flex",gap:"10px", justifyContent:"center",flexWrap:"wrap",width:"98%"}}>
<Box >
<a href="http://www.github.com/Codex-Swapnil1"><img style={{width:"98%"}} src="https://github-readme-stats.vercel.app/api?username=Codex-Swapnil1&show_icons=true&hide=&count_private=true&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&show_icons=true" alt="Codex-Swapnil1's GitHub stats" /></a>
</Box>
<Box>
<a href="http://www.github.com/Codex-Swapnil1"><img style={{width:"98%"}} src="https://github-readme-streak-stats.herokuapp.com/?user=Codex-Swapnil1&stroke=ffffff&background=1c1917&ring=0891b2&fire=0891b2&currStreakNum=ffffff&currStreakLabel=0891b2&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true" alt="Codex-Swapnil1's Streak"/></a>
</Box>
<Box >
<a  href="https://github.com/Codex-Swapnil1" align="left"><img style={{width:"98%"}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=Codex-Swapnil1&langs_count=10&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&locale=en&custom_title=Top%20%Languages" alt="Top Languages" /></a>
</Box>
</Box>

 </Box>
    </div>
  )
}

export default DesktopProject