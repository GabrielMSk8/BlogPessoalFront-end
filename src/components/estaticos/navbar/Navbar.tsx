import { Box, AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react"
import './Navbar.css'
import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useDispatch } from 'react-redux/es/exports';
import { addToken } from "../../../store/tokens/actions";
import {toast} from 'react-toastify';


function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useNavigate();
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuario deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme:'colored',
            progress: undefined,
        });
        alert('Usuário deslogado')
        history('/login')
    }

    var navbarComponent;

    if(token != ""){
         navbarComponent =  <Box sx={{ flexGrow: 1 }}>
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

    }

    
    return (
        <>
            {navbarComponent}
        </>
    );
}
export default Navbar;