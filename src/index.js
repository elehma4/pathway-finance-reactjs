import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Markets from './components/Markets';
import News from './components/News';
import { Element } from 'react-scroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
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
  </React.StrictMode>
);


