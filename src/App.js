// App.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar'; // Adjust the import path as necessary
//import OtherComponent from './components/OtherComponent'; // Example other component

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Custom primary color
    },
    secondary: {
      main: '#dc004e', // Custom secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto', // Custom font family
  },
});

function App() {
  return (
    
      <Navbar />
      
    
    
  );
}

export default App;
