import React from 'react';
import './Home.css';
import { Box } from '@mui/material';
import { Grid, Typography, Button } from '@material-ui/core';

function Home() {
  return (
    <div className='banner'>
       <Grid container direction="row" justifyContent="center" alignItems='center' style={{backgroundColor: "#3F51B5"}}>
        <Grid alignItems='center' item xs={6}>
          <Box paddingX={20}>
          <Typography variant="h3" gutterBottom color='textPrimary' component="h3" align='center' style={{color:"white", fontWeight: "bold"}}>Bem vindo (a)!</Typography>
          <Typography variant="h5" gutterBottom color='textPrimary' component="h5" align='center' style={{color:"white", fontWeight: "bold"}}>Escreva aqui sua opiniões!</Typography>
          </Box>
          <Box display ="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" style={{borderColor:"white",backgroundColor: "#3F51B5", color: "white"}}>Visualizar Postagens</Button>

          </Box>
           </Grid>
           <Grid item xs={6}>
            <img src="https://th.bing.com/th/id/R.9a23815918b56a30290b9cce5b3a2344?rik=jRigPkWkg4N3Fw&pid=ImgRaw&r=0" alt="Logo Blog" width="400px" height="400px" />
           </Grid>
           <Grid xs={12} style={{ backgroundColor: "white"}}>


        
        </Grid>

       </Grid>
       </div>
  );
}


export default Home;
