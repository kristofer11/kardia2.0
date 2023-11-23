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



const BlogMenu = ({ anchorElBlog, handleOpenBlogMenu, handleCloseBlogMenu }) => {
    return (
        <div
            onMouseEnter={handleOpenBlogMenu}
            onMouseLeave={handleCloseBlogMenu}
        >
            <Button
                sx={{ p: 0 }}
            >
                <Typography textAlign="center" style={{ color: 'white' }}>Blog</Typography>
            </Button>

            <Popper
                sx={{ mt: '45px' }}
                // id="menu-appbar"
                anchorEl={anchorElBlog}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElBlog)}
                onClose={handleCloseBlogMenu}
            >
                <ClickAwayListener onClickAway={handleCloseBlogMenu}>

                    <Box sx={{ border: '1px solid #d3d4d5', bgcolor: 'background.paper' }} >
                        <MenuItem onClick={handleCloseBlogMenu}>
                            <Link href='/blog'>
                                <Typography textAlign="center">All Articles</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseBlogMenu}>
                            <Link href='/blog/october2023'>
                                <Typography textAlign="center">Screen Time</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseBlogMenu}>
                            <Link href='/blog/july2023'>
                                <Typography textAlign="center">AI in Education</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseBlogMenu}>
                            <Link href='/blog/july2022'>
                                <Typography textAlign="center">Martial Arts</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseBlogMenu}>
                            <Link href='/blog/june2022'>
                                <Typography textAlign="center">Retain Learning</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseBlogMenu}>
                            <Link href='/blog/june2022-siblings'>
                                <Typography textAlign="center">Keep Younger Siblings Busy!</Typography>
                            </Link>
                        </MenuItem>
                    </Box>
                </ClickAwayListener>
            </Popper>

        </div>

    )
}

export default BlogMenu
