import './App.css';
import react from 'react';
import React, { useState } from 'react';
import { array_tea, array_coffee } from './data.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from './components/Footer.js'

function App() {

  
  return (
<div>
  <Navbar />
  <Route path="/" exact={true} component={Home} />
  <Route path="/About" component={About} />
  <Footer />
</div>
  );
}

export default App;
