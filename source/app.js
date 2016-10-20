var React = window.React = require('react')
	, ReactDOM = window.ReactDOM = require('react-dom')
	, $ = window.$ = require('jquery');

var Application = require('./components/Application.react');
var result = [1, 2, 3, 4, 5, 7].map(el => el*2)
console.log(result);
console.log('test')
require('./scss/index.scss');