import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

import './index.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Markets from './components/Markets';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import TradingPortal from './components/TradingPortal';
import favoriteReducer from './components/favoriteSlice'

const persistedState = localStorage.getItem('reduxState')
                        ? JSON.parse(localStorage.getItem('reduxState'))
                        : {};

const store = configureStore({
  reducer: {
      favorites: favoriteReducer
  },
  preloadedState: persistedState
})

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
})

// <React.StrictMode> has been removed to stop double rendering in development

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
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
  </Provider>,
);


