personalApp.controller('MainController', function ($scope, $location, $window, backendFactory){

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
		var sendObj = {};
		sendObj.name = formData.name;
		sendObj.email = formData.email;
		sendObj.content = formData.content;
		backendFactory.sendMail(sendObj, function (data){
			console.log('yay!')
		})
		$scope.requestEmail = {};
	}
	
})