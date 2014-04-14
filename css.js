(function($){
	function classManager(type) {
		var forEach = Array.prototype.forEach;
		var args    = arguments[1].split(/\s/);
		forEach.call(this.getNodeMap(), function(el) {
			args.forEach(function(class_name) {
				el.classList[type](class_name);
			});
		});
		return this;
	};	
	$.fn.addClass = function() {
		var args = Array.prototype.slice.call(arguments);
		args.unshift('add');
		classManager.apply(this, args);
	
		return this;
	};		
	$.fn.removeClass = function() {
		var args = Array.prototype.slice.call(arguments);
		args.unshift('remove');
		classManager.apply(this, args);
		
		return this;
	};

})(Selector);