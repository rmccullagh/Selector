(function(window) {
	'use strict';
	var
		CLASS_REG = /^\.[a-zA-Z_]+[a-zA-Z_0-9-]*/
		,ID_REG    = /^\#[a-zA-Z_]+[a-zA-Z_0-9-]*/;

	var Selector = function(s) {
		return new Selector.fn.init(s);
	}
	
	Selector.fn = Selector.prototype = {
		constructor: Selector
	};
	
	var init = Selector.fn.init = function(selector) {
		if(typeof selector === 'object') {
			selector = selector;
		} else if(CLASS_REG.test(selector)) {
			selector = document.getElementsByClassName(selector.slice(1));
		} else if(ID_REG.test(selector)) {
			selector = document.getElementById(selector.slice(1));
		} else if(typeof selector === 'string') {
			selector = document.getElementsByTagName(selector);
		} else {
			selector = [];
		}
		var nodes = selector;
		this.selector = nodes;
		return this;
	};
	init.prototype  = Selector.fn;
	window.Selector = Selector;
	window.$ = Selector;
})(this);