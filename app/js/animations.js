var phoneCatAnimations = angular.module('phoneCatAnimations',['ngAnimate']);

phoneCatAnimations.animation('.phone',function (){
	var animateUp = function (element, className, done) {
		if (className !='active'){
			return;
		}
		
		element.css({
			position : 'absolute',
			top : 500,
			left : 0,
			display:'block'
		});
		console.log(element);
		jQuery(element).animate({
			top : 0
		},done);
		addClass : animateUp;
		return function(cancel) {
			if(cancel){
				element.stop();
			};
		}
	};
	
	var animateDown = function(element, className, done){
		if (className !='active'){
			return;
		}
		
		element.css({
			position : 'absolute',
			top : 0,
			left : 0,
		});
		console.log(element);
		jQuery(element).animate({
			top : -500
		},done);
		addClass : animateDown;
		return function(cancel) {
			if(cancel){
				element.stop();
			};
		}
	};
	
	return {
		addClass : animateUp,
		removeClass : animateDown
	};
});