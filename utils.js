(function($){
	$.fn.getNodeMap = function() {
		var toString = Object.prototype.toString;
		var type = toString.call(this.selector);
		if(type === "[object HTMLCollection]") {
		
			return this.selector;
		} else {
			//console.log(type);
			return [this.selector];
		}
	};
	
	$.fn.each = function(callback) {
		Array.prototype.forEach.call(this.getNodeMap(), function(el, index, arr) {
			callback.apply(el, [el, index, arr]);
		});
	};
	
	$.fn.ready = function(callback) {
		if(document.addEventListener) {
			window.addEventListener('DOMContentLoaded', function() {
				callback();
			});
		} else {
			document.onreadystatechange = function () {
				if (document.readyState == "complete") {
					callback();
				}
			}
		}
	};
})(Selector);