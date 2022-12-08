import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import style from "./tabmobile.module.css";
import TechnicalSkills from './TechnicalSkills';
import SoftSkills from './SoftSkills';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MobileSkill() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" , justifyContent:"center", margin:"auto"}}>
    <h1 style={{textAlign:"center", fontSize:"30px" ,color:"lightblue", marginBottom:"30px"}}>Skills</h1>
      <Box sx={{  maxWidth: { xs: 320 , sm: 480},
        backgroundColor:"black",
        border:"1px solid gray",
        justifyContent:"center",
         margin:"auto",
         boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px" }}>
        <Tabs
          value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        >
          <Tab sx={{color:"lightgray"}} label="Technical Skills" {...a11yProps(0)} />
          <Tab sx={{color:"lightgray"}} label="Soft Skill" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TechnicalSkills/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SoftSkills/>
      </TabPanel>
    </Box>
  );
}
