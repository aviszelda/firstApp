angular.module('FilmsModule')

.controller('FilmsController', function($scope, Film, FilmsServices) {

  var initView = function(){

    FilmsServices.getFilms().then(function() {
    	$scope.films = FilmsServices.films;
    },
    	function(error) {
    		$scope.films = [];
    	})
  };

  $scope.$on('$ionicView.loaded', function() {
    initView();
  })

});