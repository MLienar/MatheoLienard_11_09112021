import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import Header from './components/Header'

import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);

