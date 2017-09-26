"use strict";

var React = require('react');

var Router = require('react-router');

// what component should load when the url hits the default route
var DefaultRoute = Router.DefaultRoute;

// Route component used to define routes
var Route = Router.Route;

// Not found route
var NotFoundRoute = Router.NotFoundRoute;


// using redirect route
var Redirect = Router.Redirect;


var routes = (
	<Route name= "app" path="/" handler= {require('./components/app')}>
		<DefaultRoute handler = {require('./components/homePage')} />
		<Route name="authors" handler = {require('./components/authors/authorPage')} />
		<Route name="addAuthor" path="author" handler = {require('./components/authors/manageAuthorPage')} />
		<Route name="about" handler = {require('./components/about/aboutPage')} />
		<NotFoundRoute handler = {require('./components/notFoundPage')} />
		<Redirect from="about-us" to="about" />
		<Redirect from="awthurs" to="authors" />
		<Redirect from="about/*" to="about" />
	</Route>	
);

module.exports = routes;