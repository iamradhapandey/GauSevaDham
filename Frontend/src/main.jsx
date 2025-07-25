import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Ensure you have an index.css file for global styles
import { BrowserRouter } from 'react-router-dom';
import SplashCursor from './components/SplashCursor'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <SplashCursor />
    <App />
  </BrowserRouter>
);
