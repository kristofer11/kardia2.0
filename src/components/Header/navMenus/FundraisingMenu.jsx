import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';


import Link from 'next/link';



const FundraisingMenu = ({ anchorElFundraising, handleOpenFundraisingMenu, handleCloseFundraisingMenu }) => {
    return (
        <div
        onMouseEnter={handleOpenFundraisingMenu}
        onMouseLeave={handleCloseFundraisingMenu}
        className='lg-menu'
        >
            <Button
             sx={{ p: 0 }}
             >
                <Typography textAlign="center" style={{ color: 'white' }} className='nav-title'>Fundraising</Typography>
            </Button>

            <Popper
                sx={{ mt: '45px', zIndex: 1000, }}
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
                                <Typography textAlign="center">Donations</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseFundraisingMenu}>
                            <Link href='/auction'>
                                <Typography textAlign="center">Auction</Typography>
                            </Link>
                        </MenuItem>


                        {/* REMOVE JOG-A-THON UNTIL IT IS RELEVANT IN 2024-25 SCHOOL YEAR */}
                        {/* <MenuItem onClick={handleCloseFundraisingMenu}>
                            <Link href='/jog-a-thon'>
                                <Typography textAlign="center">Jog-a-Thon</Typography>
                            </Link>
                        </MenuItem> */}


                    </Box>
            </ClickAwayListener>
            </Popper>

        </div>

    )
}

export default FundraisingMenu
