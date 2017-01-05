import React from 'react';
import ReactRouter from 'react-router';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from '../containers/Home';
import HomeContainer from '../containers/HomeContainer';

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
    	<IndexRoute component={HomeContainer} />
    </Route>
  </Router>
);

module.exports = routes;