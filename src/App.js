import React from 'react';
import { Box, AppBar } from '@mui/material';

import Properties from './app/pages/Properties';

import './App.css';

import Logo from './app/assets/logo.svg';

const drawerWidth = 72;

function App() {
  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <AppBar
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
          position="fixed"
          color="default">
        </AppBar>
        <Box
          component="nav"
          sx={{ p: '28px 15px', width: { sm: "42px" }, flexShrink: { sm: 0 }, height: '100vh', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)'}}
        >
          <img
            src={Logo}
            alt='logo'
          />
        </Box>
        <Box
          component="main"
          sx={{ pt: '68px', width: { sm: `calc(100% - ${drawerWidth}px)` }, background: '#FAFAFA' }}
        >
          <Properties/>
        </Box>

      </Box>
    </div>
  );
}

export default App;
