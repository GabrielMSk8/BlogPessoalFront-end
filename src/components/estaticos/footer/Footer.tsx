import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

function Footer (){
    return(
        <>
        <Grid container direction="row" justifyContent='center' alignItems='center'>
            <Grid alignItems='center' item xs={12}>
                <Box style={{backgroundColor: "#3F51B5", height:"120px"}}>
                    <Box paddingTop={1} display="flex" alignItems="Center" justifyContent="Center">
                    <Typography variant="h5" align='center' gutterBottom style={{color: "white"}}>Siga-nos nas redes sociais</Typography>
                   </Box>
                   <Box className='icones' display="flex" alignItems="Center" justifyContent="Center">
                    <a href="">
                        <FacebookIcon style={{ fontSize: 60, color:"white"}}/>
                        </a>
                        <a href="">
                        <InstagramIcon style={{ fontSize: 60, color:"white"}}/>
                        </a>
                        <a href="">
                        <LinkedInIcon style={{ fontSize: 60, color:"white"}}/>
                        </a>
                        </Box>
                        </Box>
                        </Grid>
                        </Grid>

                    </>
    )
}
export default  Footer;