import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ScopedCssBaseline>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ScopedCssBaseline>
);
