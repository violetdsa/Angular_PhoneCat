'use strict';
var phoneCatApp = angular.module('phoneCatApp', ['ngRoute', 'phoneCatControllers','phoneCatFilters']);

phoneCatApp.config(['$routeProvider',
     function($routeProvider){
	$routeProvider.
		when('/phones',{
			templateUrl:'/partials/phone-list.html',
			controller:'phoneListCtrlWithJSON'
		}).
		when('/phones/:phoneId',{
			templateUrl:'/partials/phone-detail.html',
			controller:'phoneDetailCtrl'
		}).
		otherwise({
			redirectTo:'/phones'
		});
}
]);

var phoneCatAppServicesMod = angular.module('phoneCatAppServicesMod', ['ngRoute', 'phoneCatControllers','phoneCatFilters','phoneCatAppServices']);

phoneCatAppServicesMod.config(['$routeProvider',
     function($routeProvider){
	$routeProvider.
		when('/phones',{
			templateUrl:'/partials/phone-list.html',
			controller:'phoneListCtrlWithServices'
		}).
		when('/phones/:phoneId',{
			templateUrl:'/partials/phone-detail.html',
			controller:'phoneDetailCtrlServices'
		}).
		otherwise({
			redirectTo:'/phones'
		});
}
]);

var phoneCatAppAnimate = angular.module('phoneCatAppAnimate', ['ngRoute', 'phoneCatControllers','phoneCatFilters','phoneCatAppServices','phoneCatAnimations']);

phoneCatAppAnimate.config(['$routeProvider',
     function($routeProvider){
	$routeProvider.
		when('/phones',{
			templateUrl:'/partials/phone-list.html',
			controller:'phoneListCtrlWithAnimation'
		}).
		when('/phones/:phoneId',{
			templateUrl:'/partials/phone-detail.html',
			controller:'phoneDetailCtrlAnimations'
		}).
		otherwise({
			redirectTo:'/phones'
		});
}
]);

