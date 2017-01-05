import React from 'react';
import ReactRouter from 'react-router';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import EpisodesContainer from '../containers/EpisodesContainer';

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	<IndexRoute component={HomeContainer} />
    	<Route path="/episodes" component={EpisodesContainer}/>
    </Route>
  </Router>
);

module.exports = routes;