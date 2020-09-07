import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ProductDetails from './ProductDetails';

const HomePage = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/shop/:id' component={ProductDetails} />
      </Switch>
    </Router>
  );
};

const Home = () => {
  return <h1>Home Page</h1>;
};

export default HomePage;
