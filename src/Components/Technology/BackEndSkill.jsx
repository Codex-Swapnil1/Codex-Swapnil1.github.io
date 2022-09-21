
import React from 'react'
import Grid from '@mui/material/Grid';
import { backend} from './skills';
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

const BackEndSkill = () => {
  return (
    <Box>



    <Box sx={{ display:"flex",flexWrap:"wrap" ,gap:2, margin :"auto",justifyContent:"center"}}>

        {backend.map((item)=>(
         (

            <SkillsCard key={item.id} Item={Item} id={item.id} title={item.title} icon={item.icon}/>


            )
        ))}

    </Box>
    </Box>
  )
}

export default BackEndSkill