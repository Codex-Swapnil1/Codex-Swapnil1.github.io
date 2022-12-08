
import React from 'react'
import { fronted } from './skills';
import SkillsCard from './SkillsCard';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const FrontEndSkill = () => {
  return (
    <Box>

    <Box sx={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:3}}>

        {fronted.map((item)=>(
         (

            <SkillsCard key={item.id} Item={Item} id={item.id} title={item.title} icon={item.icon}/>


            )
        ))}

    </Box>
    </Box>
  )
}

export default FrontEndSkill