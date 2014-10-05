var phoneCatControllers = angular.module('phoneCatControllers',[]);

phoneCatControllers.controller('phoneListCtrlWithJSON',['$scope','$http', function ($scope, $http) {
	  $http.get('phones/phones.json').success(function(data) {
	    $scope.phones = data;
	  });
	  $scope.orderProp = 'age';
	}]);
	

phoneCatControllers.controller('phoneDetailCtrl',['$scope','$routeParams','$http', function($scope,$routeParams,$http){
	$http.get('phones/'+$routeParams.phoneId+'.json').success(function(data) {
		 $scope.phone = data;
		 $scope.imageUrl = data.images[0];
	});
	
	$scope.setImage = function (imgUrl) {
		 $scope.imageUrl = imgUrl;
	};
}]);

phoneCatControllers.controller('phoneListCtrlWithServices',['$scope','Phone', function ($scope, Phone) {
	  $scope.phones = Phone.query();
	  $scope.orderProp = 'age';
	}]);
	

phoneCatControllers.controller('phoneDetailCtrlServices',['$scope','$routeParams','Phone', function($scope,$routeParams,Phone){
	 $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
		    $scope.imageUrl = phone.images[0];
		  });
	
	$scope.setImage = function (imgUrl) {
		 $scope.imageUrl = imgUrl;
	};
}]);

phoneCatControllers.controller('phoneListCtrlWithAnimation',['$scope','Phone', function ($scope, Phone) {
	  $scope.phones = Phone.query();
	  $scope.orderProp = 'age';
	}]);
	

phoneCatControllers.controller('phoneDetailCtrlAnimations',['$scope','$routeParams','Phone', function($scope,$routeParams,Phone){
	 $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
		    $scope.imageUrl = phone.images[0];
		  });
	
	$scope.setImage = function (imgUrl) {
		 $scope.imageUrl = imgUrl;
	};
}]);