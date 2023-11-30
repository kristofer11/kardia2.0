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
    const handleOpenBlogMenu = (event) => {
        setBlogMenuAnchor(event.currentTarget)
    }

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
                    <ListItem>
                        <Button onClick={handleOpenAboutMenu}>About</Button>
                        <Menu
                            anchorEl={aboutMenuAnchor}
                            open={Boolean(aboutMenuAnchor)}
                            onClose={() => handleClose(setAboutMenuAnchor)}
                        >
                            <MenuItem onClick={() => handleClose(setAboutMenuAnchor)}><Link href='/beginning' style={{width: '100%'}}>Our Story</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setAboutMenuAnchor)}><Link href='/staff' style={{width: '100%'}}>Faculty, Staff and School Board</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setAboutMenuAnchor)}><Link href='/contact' style={{width: '100%'}}>Contact</Link></MenuItem>
                        </Menu>
                    </ListItem>
                    <ListItem>
                        <Button onClick={handleOpenAdmissionsMenu}>Admissions</Button>
                        <Menu
                            anchorEl={admissionsMenuAnchor}
                            open={Boolean(admissionsMenuAnchor)}
                            onClose={() => handleClose(setAdmissionsMenuAnchor)}
                        >
                            <MenuItem onClick={() => handleClose(setAdmissionsMenuAnchor)}><Link href='/programs' style={{width: '100%'}}>Program Options</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setAdmissionsMenuAnchor)}><Link href='/parent-partnership' style={{width: '100%'}}>What is a <em>Parent Partnership</em>?</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setAdmissionsMenuAnchor)}><Link href='/enrollment' style={{width: '100%'}}>Enrollment</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setAdmissionsMenuAnchor)}><Link href='/tuition' style={{width: '100%'}}>Tuition and Fees</Link></MenuItem>
                        </Menu>
                    </ListItem>
                    <ListItem>
                        <Button onClick={handleOpenFundraisingMenu}>Fundraising</Button>
                        <Menu
                            anchorEl={fundraisingMenuAnchor}
                            open={Boolean(fundraisingMenuAnchor)}
                            onClose={() => handleClose(setFundraisingMenuAnchor)}
                        >
                            <MenuItem onClick={() => handleClose(setFundraisingMenuAnchor)}><Link href='/fundraising' style={{width: '100%'}}>Fundraising Opportunities</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setFundraisingMenuAnchor)}><Link href='/donations' style={{width: '100%'}}>Donations</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setFundraisingMenuAnchor)}><Link href='/jog-a-thon' style={{width: '100%'}}>Jog-a-Thon</Link></MenuItem>
                        </Menu>
                    </ListItem>
                    <ListItem>
                        <Button onClick={handleOpenFamiliesMenu}>Current Families</Button>
                        <Menu
                            anchorEl={familiesMenuAnchor}
                            open={Boolean(familiesMenuAnchor)}
                            onClose={() => handleClose(setFamiliesMenuAnchor)}
                        >
                            <MenuItem onClick={() => handleClose(setFamiliesMenuAnchor)}><Link href='/sycamore' style={{width: '100%'}}>Sycamore Login</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setFamiliesMenuAnchor)}><Link href='/uniforms' style={{width: '100%'}}>Uniforms</Link></MenuItem>
                            <MenuItem onClick={() => handleClose(setFamiliesMenuAnchor)}><Link href='/calendar' style={{width: '100%'}}>Calendar</Link></MenuItem>

                        </Menu>
                    </ListItem>
                    <ListItem>
                        <Button onClick={() => handleClose(setBlogMenuAnchor)}>
                            <Link href='/blog'>Blog</Link>                        
                        </Button>

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