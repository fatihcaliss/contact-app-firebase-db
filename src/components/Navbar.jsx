import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import image from "../assets/logo.png"
const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <a href="https://github.com/fatihcaliss" target="_blank"><img src={image} alt="logo" width={48}/></a>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1,marginLeft:"1rem" }}>
                        Contact App
                    </Typography>
                    {/* <Button color="inherit"><img src={image} alt="logo" width={48}/></Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Navbar