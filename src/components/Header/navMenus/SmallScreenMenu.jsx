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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Link from 'next/link';

const Navbar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const [aboutMenuAnchor, setAboutMenuAnchor] = useState(null)
    const [admissionsMenuAnchor, setAdmissionsMenuAnchor] = useState(null)
    const [fundraisingMenuAnchor, setFundraisingMenuAnchor] = useState(null)
    const [familiesMenuAnchor, setFamiliesMenuAnchor] = useState(null)
    const [blogMenuAnchor, setBlogMenuAnchor] = useState(null)

    const handleToggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const handleClose = (menu) => {
        menu(null);
        handleToggleDrawer()
    };

    const handleCloseMenuOnly = (menu) => {
        menu(null)
    }

    //opening navigation menus:
    const handleOpenAboutMenu = (event) => {
        setAboutMenuAnchor(event.currentTarget);
    };
    const handleOpenAdmissionsMenu = (event) => {
        setAdmissionsMenuAnchor(event.currentTarget)
    }
    const handleOpenFundraisingMenu = (event) => {
        setFundraisingMenuAnchor(event.currentTarget)
    }
    const handleOpenFamiliesMenu = (event) => {
        setFamiliesMenuAnchor(event.currentTarget)
    }
    // const handleOpenBlogMenu = (event) => {
    //     setBlogMenuAnchor(event.currentTarget)
    // }

    return (
        <Box sx={{ display: { xs: 'flex', md: 'none', zIndex: '50', } }}>
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
            </Toolbar>
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={handleToggleDrawer}
                className='sm-menu-drawer'
                sx={{backgroundColor: '#14611A' }}
            >
                <List sx={{ width: '80vw', display: 'flex', flexDirection: 'column', alignItems: 'center !important', textAlign: 'center', }}>
                    <ListItem className='small-menu-button'>
                        <Button onClick={handleOpenAboutMenu}>About <ArrowForwardIosIcon /></Button>
                        <Menu
                            anchorEl={aboutMenuAnchor}
                            open={Boolean(aboutMenuAnchor)}
                            onClose={() => handleCloseMenuOnly(setAboutMenuAnchor)}
                        >
                            <MenuItem onClick={() => handleClose(setAboutMenuAnchor)} className='small-menu-item'><Link href='/beginning' style={{ width: '100%' }}>Our Story</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setAboutMenuAnchor)} className='small-menu-item'><Link href='/staff' style={{ width: '100%' }}>Faculty, Staff and School Board</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setAboutMenuAnchor)} className='small-menu-item'><Link href='/contact' style={{ width: '100%' }}>Contact</Link></MenuItem>
                        </Menu>
                    </ListItem>
                    <ListItem className='small-menu-button'>
                        <Button onClick={handleOpenAdmissionsMenu}>Admissions <ArrowForwardIosIcon /></Button>
                        <Menu
                            anchorEl={admissionsMenuAnchor}
                            open={Boolean(admissionsMenuAnchor)}
                            onClose={() => handleCloseMenuOnly(setAdmissionsMenuAnchor)}
                        >
                            <MenuItem onClick={() => handleClose(setAdmissionsMenuAnchor)} className='small-menu-item'><Link href='/programs' style={{ width: '100%' }}>Program Options</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setAdmissionsMenuAnchor)} className='small-menu-item'><Link href='/parent-partnership' style={{ width: '100%' }}>What is a <em>Parent Partnership</em>?</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setAdmissionsMenuAnchor)} className='small-menu-item'><Link href='/enrollment' style={{ width: '100%' }}>Enrollment</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setAdmissionsMenuAnchor)}><Link href='/tuition' style={{ width: '100%' }}>Tuition and Fees</Link></MenuItem>
                        </Menu>
                    </ListItem>
                    <ListItem className='small-menu-button'>
                        <Button onClick={handleOpenFundraisingMenu}>Fundraising <ArrowForwardIosIcon /></Button>
                        <Menu
                            anchorEl={fundraisingMenuAnchor}
                            open={Boolean(fundraisingMenuAnchor)}
                            onClose={() => handleCloseMenuOnly(setFundraisingMenuAnchor)}
                        >
                            <MenuItem onClick={() => handleClose(setFundraisingMenuAnchor)} className='small-menu-item'><Link href='/fundraising' style={{ width: '100%' }}>Fundraising Opportunities</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setFundraisingMenuAnchor)} className='small-menu-item'><Link href='/donations' style={{ width: '100%' }}>Donations</Link></MenuItem>

                            {/* REMOVE JOG-A-THON UNTIL IT IS RELEVANT IN 2024 */}
                            
                            {/* <MenuItem onClick={() => handleClose(setFundraisingMenuAnchor)} className='small-menu-item'><Link href='/jog-a-thon' style={{ width: '100%' }}>Jog-a-Thon</Link></MenuItem> */}
                            
                        </Menu>
                    </ListItem>
                    <ListItem className='small-menu-button'>
                        <Button onClick={handleOpenFamiliesMenu}>Current Families <ArrowForwardIosIcon /></Button>
                        <Menu
                            anchorEl={familiesMenuAnchor}
                            open={Boolean(familiesMenuAnchor)}
                            onClose={() => handleCloseMenuOnly(setFamiliesMenuAnchor)}
                        >
                            <MenuItem onClick={() => handleClose(setFamiliesMenuAnchor)} className='small-menu-item'><Link href='/sycamore' style={{ width: '100%' }}>Sycamore Login</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setFamiliesMenuAnchor)} className='small-menu-item'><Link href='/uniforms' style={{ width: '100%' }}>Uniforms</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setFamiliesMenuAnchor)} className='small-menu-item'><Link href='/calendar' style={{ width: '100%' }}>Calendar</Link></MenuItem>

                        </Menu>
                    </ListItem>
                    <ListItem className='small-menu-button'>
                        <Button onClick={() => handleClose(setBlogMenuAnchor)}>
                            <Link href='/blog' className='blog-link'>Blog</Link>
                        </Button>

                    </ListItem>

                    {/* Add more menu items as needed */}
                </List>

                {/* Close button */}
                <div className='close-btn-div'>
                    <Button onClick={handleToggleDrawer} className='close-btn-sm-screen' variant="contained">Close</Button>
                </div>
            </Drawer>
        </Box>
    );
};

export default Navbar;