import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider } from '@mui/material';
import { Link } from "react-scroll";
import navstyle from "./Navbarcss.module.css";

const options = [
   {id: 1, name1:"Home",name2:"home"} ,
   {id: 2, name1:"About",name2:"about"} ,
   {id: 3, name1:"Skills",name2: "skills"} ,
   {id: 4, name1:"Education",name2:"education"} ,
   {id: 5, name1:"Experience",name2:"experience"} ,
   {id: 6, name1:"Projects",name2:"projects"} ,
   {id: 7, name1:"Contact",name2:"contact"} ,
];

const ITEM_HEIGHT = 60;

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuIcon
        aria-label="more"
        id="long-button"
        color="rgb(126,126,129)"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{paddingRight:"30px"}}
      >
        <MoreVertIcon  />
      </MenuIcon>
      <Menu
        id="long-menu"
        bg="rgb(32,32,42)"
        color="rgb(126,126,129)"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
            backgroundColor: "rgb(32,32,42)",
            color: "rgb(126,126,129)",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.id} onClick={handleClose}>
          <Link activeClass={navstyle.active} smooth spy to={option.name2}>
            {option.name1}
          </Link>
          <Divider/>
          </MenuItem>

        ))}
      </Menu>
    </div>
  );
}
