/*!
 * jQuery AlphaID  - v0.0.1
 * ------------------------
 * Developed by @b03ir4 & @musicompositor
 * Licensed under MIT (https://github.com/marceloboeira/jquery-alphaID/blob/master/LICENSE)
 * ---------------------------------------------
 * Fork us at @github https://github.com/marceloboeira/jquery-alphaID
 * Found a bug? suggestion? Please open an issue at https://github.com/marceloboeira/jquery-alphaID/issues
!*/

if (typeof jQuery === 'undefined') { 
	// Alert users without jQuery instanced
	throw new Error('jQuery AlphaID\'s  is a jQuery Plugin, so it needs jQuery to work ;) ');
}

(function( $ ) {

	// Heart of the plug-in
	$.fn.alphaID = function(options) {
	    var opts = $.extend( {}, $.fn.alphaID.defaults, options );
	    this.alphaID.core('1','2',opts.salt);
	    return this;
	};

	// Soon core convert/unconvert functions will be here
	$.fn.alphaID.core = function(str, toNum, salt) {
		toNum = (toNum === null) ? true : false;
	    console.log({'string':str,'toNum':toNum,'salt':salt});
	};

	// Default Options
	$.fn.alphaID.defaults = {
    	salt: "nPcobmtNh6BqUdJjWA_rpS0-K1kFC2luMX3Dxzf549sGZ8yR7OEeHTvgIVwaYiLQ"
	};

})( jQuery );