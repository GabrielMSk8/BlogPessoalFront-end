import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token != ""){
        footerComponent =   <Grid container direction="row" justifyContent='center' alignItems='center'>
        <Grid alignItems='center' item xs={12}>
            <Box className='icones' style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align='center' gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais</Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="">
                        <FacebookIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                    <a href="">
                        <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                    <a href="">
                        <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }
    return (
        <>
        {footerComponent}
           

        </>
    )
}
export default Footer;