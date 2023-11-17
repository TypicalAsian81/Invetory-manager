import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
// import Firebase from './services/Firebase/Firebase.tsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <Firebase>
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
  // </Firebase>
);
