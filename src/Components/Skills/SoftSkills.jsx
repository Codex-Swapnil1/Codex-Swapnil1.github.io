import { Box } from '@mui/material'
import React from 'react'
import { softskill } from './skillsdata'
import SkillsList from './SkillsList'


const SoftSkills = () => {
  return (
    <div>
    <Box><SkillsList key ={softskill.id} skills={softskill}/></Box>
    </div>
  )
}

export default SoftSkills