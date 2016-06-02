personalApp.controller('MainController', function ($scope, $location, $window){

	$scope.formError = [];
	$scope.success;

	$scope.linkedIn = function () {
		console.log('Check me out on linkedIn!');
	}

	$scope.github = function () {
		console.log('Check out my gitHub!');
	}
	$scope.submitForm = function (formData){
		console.log(formData);
		if (formData.name.length < 5){
			$scope.formError.push("Please enter your full name.");
		}
		if (formData.content.length < 15){
			$scope.formError.push("Please elaborate on your interest.")
		}
		$scope.requestEmail = {};
	}
})