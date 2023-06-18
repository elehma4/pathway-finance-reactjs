import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from "react-router-dom";
import Markets from './components/Markets';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <NavBar />
    <Main />
    <Markets />
    </Router>
  </React.StrictMode>
);


