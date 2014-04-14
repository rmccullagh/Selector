(function($) {
	function getEventTarget(etype, context, callback) {
		var contextType = undefined;
		if($.fn.isString(context)) {
			contextType = Array.prototype.slice.call(context).shift();
		}
		
		this.addEventListener(etype, function(e) {		
			var target = e.target;
			var currentNodeName 	 = e.target.nodeName.toLowerCase();
			var currentNodeClassName = e.target.className;
			var currentNodeId 		 = e.target.id;
			
			if(typeof contextType != 'undefined') {
				if(contextType === '.') {
					var _className 	  = Array.prototype.slice.call(context);
					_className.shift();
					_className = _className.join("");					
					var _currentClass = currentNodeClassName.split(" ");					
					var node;
					while(node = _currentClass.shift()) {
						if(_className === node) {
							return callback.apply(e.target, arguments);
						}
					}
															
				} else if(contextType === '#') {
					var targetId = Array.prototype.slice.call(context);
					targetId.shift();
					targetId = targetId.join("");
					if(currentNodeId === targetId) {					
						return callback.apply(e.target, arguments);
					}
				} else { 
					var contextNodeName = context.toLowerCase();
					if(currentNodeName === contextNodeName) {
						console.log(currentNodeClassName);
						callback.apply(e.target, arguments);
					}
				}
			} else {
				return callback.apply(this, arguments);
			}
		});
	};
	
	$.fn.on = function(etype) {
		var args    = Array.prototype.slice.call(arguments, 1);
		var forEach = Array.prototype.forEach;
		var toString;
		var context;
		var callback;
		var len = args.length;
		var events = etype.split(/\s/);
		while(len--) {
			if(this.isFunction(args[len])) {
				callback = args[len];
				break;
			}
		}
		while(len--) {
			if(typeof args[len] === 'string') {
				context = args[len];
				break;
			}
		}
		forEach.call(this.getNodeMap(), function(el) {
			forEach.call(events, function(eventType) {
				getEventTarget.apply(el, [eventType, context, callback]);
			});
		});
		
		return this;
	};
	
})(Selector);