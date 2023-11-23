import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleToggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          {/* Other AppBar content */}
        </Toolbar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleToggleDrawer}
      >
        <List>
          {/* Your menu items go here */}
          <ListItem button>
            <ListItemText primary="Menu Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Menu Item 2" />
          </ListItem>
          {/* Add more menu items as needed */}
        </List>

        {/* Close button */}
        <Button onClick={handleToggleDrawer}>Close</Button>
      </Drawer>
    </Box>
  );
};

export default Navbar;