var phoneCatApp = angular.module('phoneCatApp',[]);

phoneCatApp.controller('phoneListCtrl' , function($scope) {
	  $scope.phones = [
	                   {'name': 'Nexus S',
	                    'snippet': 'Fast just got faster with Nexus S.',
	                    'age': 2},
	                   {'name': 'Motorola XOOM� with Wi-Fi',
	                    'snippet': 'The Next, Next Generation tablet.',
	                    'age': 1},
	                   {'name': 'MOTOROLA XOOM�',
	                    'snippet': 'The Next, Next Generation tablet.',
	                    'age': 3}
	                 ];

	                 $scope.orderProp = 'age';
}
);



phoneCatApp.controller('phoneListCtrlWithJSON', function ($scope, $http) {
	  $http.get('phones/phones.json').success(function(data) {
	    $scope.phones = data;
	  });

	  $scope.orderProp = 'age';
	});