import { Box, AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react"
import './Navbar.css'
import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';


function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate();

    function goLogout(){
        setToken('')
        alert('Usuário deslogado')
        history('/login')
    }

    
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" >
                    <Toolbar >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/home" className='text-decorator-none'>
                        <Button style={{ color: "white" }}>home</Button>
                            </Link>
                        </Typography>
                        
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/temas" className='text-decorator-none'>
                            <Button style={{ color: "white" }}>tema</Button>
                            </Link>
                        </Typography>
                        
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/formularioTema" className='text-decorator-none'>
                                <Button style={{ color: "white" }}>cadastrar tema</Button>
                            </Link>
                        </Typography>


                        <Box mx={1} className='cursor' onClick= {goLogout}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        
                            <Button style={{ color: "white" }}>Logout</Button>
                         
                            </Typography>

                            </Box>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    );
}
export default Navbar;