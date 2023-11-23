"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import Link from 'next/link';
import Image from 'next/image';

import AboutMenu from './navMenus/AboutMenu';
import AdmissionsMenu from './navMenus/AdmissionsMenu';
import FundraisingMenu from './navMenus/FundraisingMenu';
import FamiliesMenu from './navMenus/FamiliesMenu';
import BlogMenu from './navMenus/BlogMenu'

import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: [
        '400', '500', '600', '700', '800', '900'
    ]
})

import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: [
        '400',
        '500',
        '700',
        // '900'
    ],
})

//navbar links:
const pages = ['Products', 'Pricing', 'Blog'];

//Goes with avatar, delete later:
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElAbout, setAnchorElAbout] = React.useState(null)
    const [anchorElAdmissions, setAnchorElAdmissions] = React.useState(null)
    const [anchorElFundraising, setAnchorElFundraising] = React.useState(null)
    const [anchorElFamilies, setAnchorElFamilies] = React.useState(null)
    const [anchorElBlog, setAnchorElBlog] = React.useState(null)

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };



    //opening navigation menus:
    const handleOpenAboutMenu = (event) => {
        setAnchorElAbout(event.currentTarget);
    };
    const handleCloseAboutMenu = () => {
        setAnchorElAbout(null);
    };
    const handleOpenAdmissionsMenu = (event) => {
        setAnchorElAdmissions(event.currentTarget);
    }
    const handleCloseAdmissionsMenu = () => {
        setAnchorElAdmissions(null);
    };
    const handleOpenFundraisingMenu = (event) => {
        setAnchorElFundraising(event.currentTarget);
    }
    const handleCloseFundraisingMenu = () => {
        setAnchorElFundraising(null);
    };
    const handleOpenFamiliesMenu = (event) => {
        setAnchorElFamilies(event.currentTarget);
    };
    const handleCloseFamiliesMenu = () => {
        setAnchorElFamilies(null)
    };
    const handleOpenBlogMenu = (event) => {
        setAnchorElBlog(event.currentTarget);
    };
    const handleCloseBlogMenu = () => {
        setAnchorElBlog(null)
    };




    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        component='img'
                        width='4rem'
                        height='4rem'
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 0.5 }}
                        src='/images/logo.png'
                    />

                    {/* TRYING MUI BOX INSTEAD OF NEXT IMAGE, DELETE UNUSED IMAGE */}
                    {/* <Image 
                        src='/images/logo.png'
                        width='181'
                        height='181'
                        alt='Kardia Classical School logo featuring the letters K and C and a cross and phoenix'
                        className='logo'
                        
                    /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            // fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        className={cinzel.className}
                    >
                        <Link href='/' className='logo-text' >
                            <h4>Kardia</h4>
                            <h5>Classical School</h5>
                        </Link>

                    </Typography>

                    {/* Navigation for SMALLER SCREENS (INCLUDING THE HAMBURGER BUTTON) */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>


                    {/* navigation menu items LARGER SCREENS: */}
                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box> */}









                    {/* Drop-down navigation for larger screens: */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='nav-menu-lg'>

                        <AboutMenu
                            anchorElAbout={anchorElAbout}
                            handleOpenAboutMenu={handleOpenAboutMenu}
                            handleCloseAboutMenu={handleCloseAboutMenu}
                        />

                        <AdmissionsMenu
                            anchorElAdmissions={anchorElAdmissions}
                            handleOpenAdmissionsMenu={handleOpenAdmissionsMenu}
                            handleCloseAdmissionsMenu={handleCloseAdmissionsMenu}
                        />
                        {/* TO DO: FUNDRAISING MENU */}
                        <FundraisingMenu
                            anchorElFundraising={anchorElFundraising}
                            handleOpenFundraisingMenu={handleOpenFundraisingMenu}
                            handleCloseFundraisingMenu={handleCloseFundraisingMenu}
                        />
                        {/* TO DO: CURRENT FAMILIES MENU  */}
                        <FamiliesMenu
                            anchorElFamilies={anchorElFamilies}
                            handleOpenFamiliesMenu={handleOpenFamiliesMenu}
                            handleCloseFamiliesMenu={handleCloseFamiliesMenu}
                        />
                        <BlogMenu
                            anchorElBlog={anchorElBlog}
                            handleOpenBlogMenu={handleOpenBlogMenu}
                            handleCloseBlogMenu={handleCloseBlogMenu}
                        />
                    </Box>






                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
