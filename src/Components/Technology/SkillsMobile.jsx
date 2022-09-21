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
import style from "./tabmobile.module.css";

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
      <Box sx={{ maxWidth: { xs: 320 , sm: 480}, bgcolor: 'background.paper',justifyContent:"center", margin:"auto" }}>
        <Tabs
          value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        >
          <Tab label="FrontEnd" {...a11yProps(0)} />
          <Tab label="BackEnd" {...a11yProps(1)} />
          <Tab label="Ui Library" {...a11yProps(2)} />
          <Tab label="Deployments" {...a11yProps(3)} />
          <Tab label="Tools and Platform" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FrontEndSkill/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BackEndSkill/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Deployments/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Uilab/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ToolsAndPlatform/>
      </TabPanel>
    </Box>
  );
}
