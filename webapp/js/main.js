define([

    'require',
    'jquery',
    'lib/turn.min'

], function(require){

    var $    = require('jquery'),
        Turn = require('lib/turn.min');
		
	$('.sample-flipbook').turn({
		width:400,
		height:300,
		autoCenter: true,
		shadows: $.isTouch,
		acceleration: $.isTouch
	});
});