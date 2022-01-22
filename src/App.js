import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import Cart from './components/Cart';

const App = () => {

  return (
<div>
  <Navbar />
  <Route path="/" exact={true} component={Home} />
  <Route path="/About" component={About} />
  <Route path="/Contact" component={Contact} />
  <Route path="/Menu" component={Menu} />
  <Route path="/Cart" component={Cart} />
  <Footer />
</div>
  );
}

export default App;
