/**
 * @file index.js
 * @description This file is the root entry point for the React application.
 * It initializes the React DOM and renders the main App component inside the root HTML element.
 * React Strict Mode is enabled to highlight potential issues in the application.
 */


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);



