personalApp.factory('backendFactory', function ($http){

	var factory = {};
	factory.sendMail = function (info, callback){
		$http.post('/email', info).success(function (output){
			callback(output);
		})
	}
	return factory	
})