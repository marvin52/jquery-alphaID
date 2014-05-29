/*!
 * jQuery AlphaID  - v0.0.2b
 * ------------------------
 * Developed by @b03ir4 & @musicompositor
 * Licensed under MIT (https://github.com/marceloboeira/jquery-alphaID/blob/master/LICENSE)
 * ---------------------------------------------
 * Fork us at @github https://github.com/marceloboeira/jquery-alphaID
 * Found a bug? suggestion? Please open an issue at https://github.com/marceloboeira/jquery-alphaID/issues
!*/

if (typeof jQuery === 'undefined') { 
	// Alert users without jQuery instanced
	throw new Error('jQuery AlphaID is a jQuery Plugin, so it needs jQuery to work ;) ');
}

(function( $ ) {

	$.fn.alphaID = function(a,b,c) {
		var opts = $.extend({}, $.fn.alphaID.defaults, a);		
	    if (this.selector == "") {
	    	return core(a,b);
	    }
	    else {
	    	$(this).on(opts.event, function(){
	    		try {
	    			opts.before(this);
	    			source = $(this);
	    			$.each($(opts.target),function(){
						$(this).html(core(source.val(),opts.toNum));
	    			});
	    			opts.success(this);
	    		}
	    		catch (e) {
	    			opts.error(e,this);	
	    		}
	    		finally {
	    			opts.finally(this);
	    		}
	    	});
	    	return this;
	    }
	};

	function core(v, toNum) {
		toNum = (toNum === null) ? true : toNum;
		index = $.fn.alphaID.defaults.index
		return (toNum === true) ? decode(v,index) : encode(v,index);
	};

	function encode(n, index) {
		n = parseInt(n);
		if('undefined' == typeof n){
	      return null;
	    }
	    else if('number' != typeof(n)){
	      throw new Error('jQuery AlphaID: Wrong parameter type!');
	    }
	    var ret = '';
	    for(var i=Math.floor(Math.log(parseInt(n))/Math.log(index.length));i>=0;i--){
	      ret = ret + index.substr((Math.floor(parseInt(n) / getBaseLog(index.length, i)) % index.length),1);
	    }
	    return ret.reverse();
	};

	function decode(s, index) {
		s = String(s);
		if('undefined' == typeof s){
	      return null;
	    }
	    else if('string' != typeof s){
	      throw new Error('jQuery AlphaID: Wrong parameter type!');
	    }
	    var str = s.reverse();
	    var ret = 0;
	    for(var i=0;i<=(str.length - 1);i++){
	      ret = ret + index.indexOf(str.substr(i,1)) * (getBaseLog(index.length, (str.length - 1) - i));
	    }
	    return ret;
	}; 

	function getBaseLog(x,y) {
	    return Math.floor(Math.pow(parseFloat(x), parseInt(y)));
	};

	String.prototype.reverse = function(){
		return this.split('').reverse().join('');
	};

	$.fn.alphaID.defaults = {
		index: 'wGR4_-iEXgvIaSrycdABYKL8pFokTqe6UzPJWhMbCDH5fZul3Os1m207V9NtnxjQ',
		event: 'keyup',
		target: '#alphaID-target',
		toNum: false,
		
		//Events
		before: function(){},
		success: function(){},
		error: function(){},
		finally: function(){},

		debug: 0
	};

})( jQuery );