(function($){
	$.fn.parent = function() {
		return $(this.selector.parentNode);
	};
	
	$.fn.val = function() {
		var args = arguments;
		var nodes = this.getNodeMap();
		for(var i = 0; i < nodes.length; i++) {
			var el = nodes[i];
			if(! this.isUndefined(el.value)) {
				if(args.length === 0) {
					return el.value;
				} else {
					el.value = args[0];
				}
			}	
		}	
	};

	$.fn.attr = function() {
		var args = arguments;
		var nodes = this.getNodeMap();
		for(var i = 0; i < nodes.length; i++) {
			var el = nodes[i];
			if(! this.isUndefined(el.getAttribute(args[0]))) {
				if(args.length === 1) {
					return el.getAttribute(args[0]);
				} else {
					el.setAttribute(args[0], args[1]);
				}
			}	
		}	
	};
})(Selector);