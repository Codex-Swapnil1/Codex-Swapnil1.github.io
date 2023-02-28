import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider } from '@mui/material';
import { Link } from "react-scroll";
import navstyle from "./Navbarcss.module.css";
import { Button } from '@mui/joy';
import FileSaver from 'file-saver';
import { Scrollbars } from 'react-custom-scrollbars'

const options = [
   {id: 1, name1:"Home",name2:"home"} ,
   {id: 2, name1:"About Me",name2:"about"} ,
   {id: 3, name1:"Technical",name2 : "skills"} ,
   {id: 4, name1:"Projects",name2:"projects"} ,
   {id: 5, name1:"Contact",name2:"contact"} ,
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
  const saveFile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resources/Swapnil_Parchake_Resume.pdf",
      "Swapnil_Parchake_Resume.pdf"
    );
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
        <MoreVertIcon size="xl"  />
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
      <Scrollbars style={{height: 250,}}>
        {options.map((option) => (
          <MenuItem key={option.id} sx={{fontSize:"16px"}} onClick={handleClose}>
          <Link activeClass={navstyle.active} smooth spy to={option.name2}>
            {option.name1}
          </Link>
          </MenuItem>
        ))}
        <Divider/>
        <MenuItem onClick={handleClose}>
        <Button
        href="https://drive.google.com/file/d/1tDlKA8oN7c_-eGfz7EYgZQvBzgOUeJDs/view?usp=share_link"
        target="_blank"
       rel="noopener"
        style={{color:"lightgray",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}
            onClick={saveFile}>
            Resume
        </Button>
        </MenuItem>
        </Scrollbars>
      </Menu>
    </div>
  );
}
