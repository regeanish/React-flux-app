"use strict";

var React = require('react');

var Router = require('react-router');

// what component should load when the url hits the default route
var DefaultRoute = Router.DefaultRoute;

// Route component used to define routes
var Route = Router.Route;


var routes = (
	<Route name= "app" path="/" handler= {require('./components/app')}>
		<DefaultRoute handler = {require('./components/homePage')} />
		<Route name="authors" handler = {require('./components/authors/authorPage')} />
		<Route name="about" handler = {require('./components/about/aboutPage')} />
	</Route>	
);

module.exports = routes;