import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import Header from './components/common/Header'
import Footer from './components/common/Footer'

import Home from './pages/Home';
import About from './pages/About';
import House from './pages/House'
import Error from './pages/Error';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
        <Routes>
          
          <Route path="/about" element={<About />} />
          <Route 
          path="/house/:id" 
          element={<House />}
           />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          
        </Routes>
        <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

