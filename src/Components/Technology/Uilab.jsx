
import React from 'react'
import SkillsCard from './SkillsCard';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { uilab } from './skills';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Uilab = () => {
  return (
    <Box>



    <Box sx={{ display:"flex",flexWrap:"wrap" ,gap:2, margin :"auto",justifyContent:"center"}}>

        {uilab.map((item)=>(
         (

            <SkillsCard Item={Item} key={item.id} id={item.id} title={item.title} icon={item.icon}/>

            )
        ))}

    </Box>
    </Box>
  )
}

export default Uilab