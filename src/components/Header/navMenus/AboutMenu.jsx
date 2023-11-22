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



const AboutMenu = ({ anchorElAbout, handleOpenAboutMenu, handleCloseAboutMenu }) => {
    return (
        <>
            <Button onClick={handleOpenAboutMenu} sx={{ p: 0 }}>
                <Typography textAlign="center" style={{ color: 'white' }}>About</Typography>
            </Button>
            <Menu
                sx={{ mt: '45px' }}
                // id="menu-appbar"
                anchorEl={anchorElAbout}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={anchorElAbout}
                onClose={handleCloseAboutMenu}
            >

                <MenuItem onClick={handleCloseAboutMenu}>
                    <Link href='/beginning'>
                        <Typography textAlign="center">Our Beginning</Typography>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseAboutMenu}>
                    <Link href='/staff'>
                        <Typography textAlign="center">Faculty, Staff and School Board</Typography>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseAboutMenu}>
                    <Link href='/contact'>
                        <Typography textAlign="center">Contact</Typography>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseAboutMenu}>
                    <Link href='/employment'>
                        <Typography textAlign="center">Employment</Typography>
                    </Link>
                </MenuItem>

            </Menu>
        </>
    )
}

export default AboutMenu




