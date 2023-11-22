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
import { Popper } from '@mui/material';

import Link from 'next/link';



const AdmissionsMenu = ({ anchorElAdmissions, handleOpenAdmissionsMenu, handleCloseAdmissionsMenu }) => {
    return (
        <div
        onMouseEnter={handleOpenAdmissionsMenu}
        onMouseLeave={handleCloseAdmissionsMenu}
        >

            <Button onClick={handleOpenAdmissionsMenu} sx={{ p: 0 }}>
                <Typography textAlign="center" style={{ color: 'white' }}>Admissions</Typography>
            </Button>
            <Popper
                sx={{ mt: '45px' }}
                // id="menu-appbar"
                anchorEl={anchorElAdmissions}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={anchorElAdmissions}
                onClose={handleCloseAdmissionsMenu}
            >
                <Box sx={{ border: '1px solid #d3d4d5', bgcolor: 'background.paper' }} >
                    <MenuItem onClick={handleCloseAdmissionsMenu}>
                        <Link href='/programs'>
                            <Typography textAlign="center">Program Options</Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseAdmissionsMenu}>
                        <Link href='/parent-partnership'>
                            <Typography textAlign="center">What is a <em>Parent Partnership</em>?</Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseAdmissionsMenu}>
                        <Link href='/enrollment'>
                            <Typography textAlign="center">Enrollment</Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseAdmissionsMenu}>
                        <Link href='/tuition'>
                            <Typography textAlign="center">Tuition and Fees</Typography>
                        </Link>
                    </MenuItem>
                </Box>
            </Popper>

        </div>

    )
}

export default AdmissionsMenu
