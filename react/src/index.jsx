import React from "react";
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import App from "./components/App.jsx";


const theme = createTheme({
    palette: {
        primary: {
            main: '#9d2449',
        },
        secondary: {
            main: '#edf2ff',
        },
        error: {
            main: '#852020',
        }
    },
});


const domNode = document.getElementById('ctc-id');
const root = createRoot(domNode);
root.render(
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
);
