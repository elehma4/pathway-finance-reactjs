import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Markets from './components/Markets';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import TradingPortal from './components/TradingPortal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <Element name="main">
              <Main />
            </Element>
            <Element name="markets">
              <Markets />
            </Element>
            <Element name="news">
              <News />
            </Element>
          </>
        } />
        <Route path="/TradingPortal" element={<TradingPortal />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


