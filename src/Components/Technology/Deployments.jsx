
import React from 'react'
import SkillsCard from './SkillsCard';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { deployment } from './skills';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Deployments = () => {
  return (
    <Box>



    <Box sx={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:3}}>

        {deployment.map((item)=>(
         (

            <SkillsCard key={item.id} Item={Item} id={item.id} title={item.title} icon={item.icon}/>


            )
        ))}

    </Box>
    </Box>
  )
}

export default Deployments