// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Path to your App component

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2', // Custom primary color
//     },
//     secondary: {
//       main: '#dc004e', // Custom secondary color
//     },
//   },
//   typography: {
//     fontFamily: 'Roboto', // Custom font family
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   
      <App />
    
  </React.StrictMode>
);
