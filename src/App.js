import './App.css';
import react from 'react';
import React, { useState } from 'react';
import { array_tea, array_coffee } from './data.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About';
import Menu from './components/Menu';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import Cart from './components/Cart';




function App() {

  return (
<div>
  <Navbar />
  <Cart />
  <Route path="/" exact={true} component={Home} />
  <Route path="/About" component={About} />
  <Route path="/Contact" component={Contact} />
  <Route path="/Menu" component={Menu} />
  <Footer />
</div>
  );
}

export default App;
