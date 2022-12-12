import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FrontEndSkill from './FrontEndSkill';
import BackEndSkill from './BackEndSkill';
import Deployments from './Deployments';
import Uilab from './Uilab';
import ToolsAndPlatform from './ToolsAndPlatform';
// import style from "./tabmobile.module.css";

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

export default function SkillsMobile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" , justifyContent:"center", margin:"auto"}}>
    <h1 style={{textAlign:"center", fontSize:"30px" ,color:"lightblue", marginBottom:"30px"}}>TechStack</h1>
    <Box  sx={{fontSize:"16px",lineHeight:"20px"}} width={"85%"} margin={"auto"} textAlign={"left"} marginBottom={"30px"}>I love to learn new things and experiment with new technologies.
These are some of the major languages, technologies, tools and platforms I have worked with:</Box>
      <Box
       sx={{ maxWidth: { xs: 320 , sm: 480},
        backgroundColor:"black",
        border:"1px solid gray",
        justifyContent:"center",
         margin:"auto",
         boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px"
          }}>
        <Tabs
          value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        >
          <Tab sx={{color:"lightgray"}} label="FrontEnd" {...a11yProps(0)} />
          <Tab sx={{color:"lightgray"}} label="BackEnd" {...a11yProps(1)} />
          <Tab sx={{color:"lightgray"}} label="Ui Library" {...a11yProps(2)} />
          <Tab sx={{color:"lightgray"}} label="Deployments" {...a11yProps(3)} />
          <Tab sx={{color:"lightgray"}} label="Tools and Platform" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FrontEndSkill/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BackEndSkill/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Uilab/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Deployments/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ToolsAndPlatform/>
      </TabPanel>
    </Box>
  );
}
