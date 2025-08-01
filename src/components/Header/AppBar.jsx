"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import AboutMenu from './navMenus/AboutMenu';
import AdmissionsMenu from './navMenus/AdmissionsMenu';
import FundraisingMenu from './navMenus/FundraisingMenu';
import FamiliesMenu from './navMenus/FamiliesMenu';
import SmallScreenMenu from './navMenus/SmallScreenMenu';

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

function ResponsiveAppBar() {
    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    const [anchorElAbout, setAnchorElAbout] = React.useState(null)
    const [anchorElAdmissions, setAnchorElAdmissions] = React.useState(null)
    const [anchorElFundraising, setAnchorElFundraising] = React.useState(null)
    const [anchorElFamilies, setAnchorElFamilies] = React.useState(null)
    const [anchorElBlog, setAnchorElBlog] = React.useState(null)

    const [anchorEl, setAnchorEl] = React.useState(null);

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

//NOT CURRENTLY USING BLOG MENU. ADD THESE BACK IF WE DECIDE TO HAVE BLOG DROPDOWN
    // const handleOpenBlogMenu = (event) => {
    //     setAnchorElBlog(event.currentTarget);
    // };
    // const handleCloseBlogMenu = () => {
    //     setAnchorElBlog(null)
    // };

    return (
        <AppBar position="static" className='app-bar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href='/' className='logo-text' >
                        <Box
                            component='img'
                            width='4rem'
                            height='4rem'
                            sx={{ display: 'flex', mr: 0.5, boxShadow: 'unset' }}
                            src='/images/logo.png'
                        />
                    </Link>
                    <Typography
                        variant="h6"
                        noWrap
                      
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: 'flex',
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
                    <div className='small-screen-menu-div'>
                        <SmallScreenMenu />

                    </div>



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
                        <FundraisingMenu
                            anchorElFundraising={anchorElFundraising}
                            handleOpenFundraisingMenu={handleOpenFundraisingMenu}
                            handleCloseFundraisingMenu={handleCloseFundraisingMenu}
                        />
                        <FamiliesMenu
                            anchorElFamilies={anchorElFamilies}
                            handleOpenFamiliesMenu={handleOpenFamiliesMenu}
                            handleCloseFamiliesMenu={handleCloseFamiliesMenu}
                        />
                        {/* <BlogMenu
                            anchorElBlog={anchorElBlog}
                            handleOpenBlogMenu={handleOpenBlogMenu}
                            handleCloseBlogMenu={handleCloseBlogMenu}
                        /> */}
                        <Link href='/blog' className='blog-link'>Blog</Link>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default ResponsiveAppBar;
