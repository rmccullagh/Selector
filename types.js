(function($) {
	$.fn.isFunction = function(arg) {
		var toString = Object.prototype.toString;
		var type = toString.call(arg);
		if(type === "[object Function]") {
			return true;
		}
		return false;
	};
	
	$.fn.isString = function(arg) {
		var toString = Object.prototype.toString;
		var type = toString.call(arg);
		if(type === "[object String]") {
			return true;
		}
		return false;
	};
	
	$.fn.isUndefined = function(arg) {
		var toString = Object.prototype.toString;
		var type = toString.call(arg);
		if(type === "[object Undefined]") {
			return true;
		}
		return false;
	};	
	$.fn.isBoolean = function(arg) {
		var toString = Object.prototype.toString;
		var type = toString.call(arg);
		if(type === "[object Boolean]") {
			return true;
		}
		return false;
	};
	$.fn.isNull = function(arg) {
		var toString = Object.prototype.toString;
		var type = toString.call(arg);
		if(type === "[object Null]") {
			return true;
		}
		return false;
	};
	$.fn.toString = function(o) {
		var toString = Object.prototype.toString;
		return toString.call(o);
	};
})(Selector);