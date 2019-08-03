import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Link } from '@wapps/gatsby-plugin-i18next';

export default function AdaptiveMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const styleLink ={
    root: {
      textDecoration: 'none',
      color: 'black',
    },

  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className='adaptive-menu'>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Меню
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
         <Link className='adaptive-menu-link' to="/">
        <MenuItem onClick={handleClose}>
         На главную
        </MenuItem>
        </Link>
        <Link className='adaptive-menu-link' to="/producers">
        <MenuItem onClick={handleClose} >
          К списку режиссёров</MenuItem>
           </Link>
          </Menu>
        </div >
        );
}