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
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';


import Link from 'next/link';



const FamiliesMenu = ({ anchorElFamilies, handleOpenFamiliesMenu,handleCloseFamiliesMenu }) => {
    return (
        <div
            onMouseEnter={handleOpenFamiliesMenu}
            onMouseLeave={handleCloseFamiliesMenu}
            className='lg-menu'
        >
            <Button
                sx={{ p: 0 }}
            >
                <Typography textAlign="center" style={{ color: 'white' }} className='nav-title'>Current Families</Typography>
            </Button>

            <Popper
                sx={{ mt: '45px', zIndex: 1000, }}
                // id="menu-appbar"
                anchorEl={anchorElFamilies}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                placement="bottom-start"  
                open={Boolean(anchorElFamilies)}
                onClose={handleCloseFamiliesMenu}
            >
                <ClickAwayListener onClickAway={handleCloseFamiliesMenu}>

                    <Box sx={{ border: '1px solid #d3d4d5', bgcolor: 'background.paper' }} >
                        <MenuItem onClick={handleCloseFamiliesMenu}>
                            <Link href='/sycamore'>
                                <Typography textAlign="center">Sycamore Login</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseFamiliesMenu}>
                            <Link href='/uniforms'>
                                <Typography textAlign="center">Uniform Info</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseFamiliesMenu}>
                            <Link href='/calendar'>
                                <Typography textAlign="center">School Calendar</Typography>
                            </Link>
                        </MenuItem>
                    </Box>
                </ClickAwayListener>
            </Popper>

        </div>

    )
}

export default FamiliesMenu
