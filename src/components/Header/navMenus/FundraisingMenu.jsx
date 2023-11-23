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



const FundraisingMenu = ({ anchorElFundraising, handleOpenFundraisingMenu, handleCloseFundraisingMenu }) => {
    return (
        <div
        onMouseEnter={handleOpenFundraisingMenu}
        onMouseLeave={handleCloseFundraisingMenu}
        >
            <Button
             sx={{ p: 0 }}
             >
                <Typography textAlign="center" style={{ color: 'white' }} className='nav-title'>Fundraising</Typography>
            </Button>

            <Popper
                sx={{ mt: '45px' }}
                // id="menu-appbar"
                anchorEl={anchorElFundraising}
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
                open={Boolean(anchorElFundraising)}
                onClose={handleCloseFundraisingMenu}
            >
                <ClickAwayListener onClickAway={handleCloseFundraisingMenu}>

                    <Box sx={{ border: '1px solid #d3d4d5', bgcolor: 'background.paper' }} >
                        <MenuItem onClick={handleCloseFundraisingMenu}>
                            <Link href='/fundraising'>
                                <Typography textAlign="center">Fundraising Opportunities</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseFundraisingMenu}>
                            <Link href='/donations'>
                                <Typography textAlign="center">What is a <em>Donations</em>?</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseFundraisingMenu}>
                            <Link href='/jog-a-thon'>
                                <Typography textAlign="center">Jog-a-Thon</Typography>
                            </Link>
                        </MenuItem>
                    </Box>
            </ClickAwayListener>
            </Popper>

        </div>

    )
}

export default FundraisingMenu
