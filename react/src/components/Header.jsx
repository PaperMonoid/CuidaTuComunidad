import React, { useState, useEffect }from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


import SearchBar from './SearchBar.jsx';
import GovermentLogo from './GovermentLogo.jsx';


import logo_ctc from "../images/LogoCTC.png";


const appBarStyle = {
    background: '#0b231e',
    height: '70px'
};
const horizontalSpaceStyle = {
    display: 'block',
    width: '20px'
};
const bigHorizontalSpaceStyle = {
    display: 'block',
    width: '200px'
};


export default function({ isMobile }) {
    return (
	<header>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={appBarStyle} elevation={0}>
              <Toolbar>
                <a href="https://www.gob.mx/">
                  <GovermentLogo />
                </a>
                <span style={horizontalSpaceStyle}/>
                <span style={{ flexGrow: 1 }}/>
                <a href="." style={{ textDecoration: 'none', color: 'white', display: 'flex',   alignItems: 'center', justifyContent: 'center' }}>
                  <img src={logo_ctc} height="64px"/>
                  <Typography variant="h5" component="div">
                    Cuida Tu Comunidad
                  </Typography>
                </a>
                <span style={{ flexGrow: 1 }}/>
                <span style={bigHorizontalSpaceStyle}/>
              </Toolbar>
            </AppBar>
          </Box>
        </header>
    );
}



                // <span style={horizontalSpaceStyle}/>
                // {
                //     isMobile
                //         ? (<>
                //              <SearchBar className="search-bar"/>
                //              <Button variant="contained" color="secondary" size="large">
                //                <SearchIcon />
                //              </Button>
                //            </>)
                //         : (<span style={{ flexGrow: 1 }}/>)
                // }
                // <span style={horizontalSpaceStyle}/>
