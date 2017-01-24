angular.module('FilmsModule')

.controller('FilmDetailsController', function($scope, Film) {

  var initView = function(){

    $scope.film = Film.build({"Title":"The Secret World of Arrietty","Year":"2010","Rated":"G","Released":"17 Feb 2012","Runtime":"94 min","Genre":"Animation, Adventure, Family","Director":"Hiromasa Yonebayashi","Writer":"Mary Norton (novel), Hayao Miyazaki (screenplay), Keiko Niwa (screenplay)","Actors":"Moises Arias, Bridgit Mendler, David Henrie, Will Arnett","Plot":"The Clock family are four-inch-tall people who live anonymously in another family's residence, borrowing simple items to make their home. Life changes for the Clocks when their daughter, Arrietty, is discovered.","Language":"Japanese, English","Country":"Japan","Awards":"11 wins & 6 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTAxNjk3OTYyODReQTJeQWpwZ15BbWU3MDgyODY2OTY@._V1_SX300.jpg","Metascore":"80","imdbRating":"7.6","imdbVotes":"55,440","imdbID":"tt1568921","Type":"movie","Response":"True"});

  };

  $scope.$on('$ionicView.loaded', function() {
    initView();
  })

});