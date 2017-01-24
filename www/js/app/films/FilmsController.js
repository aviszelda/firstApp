angular.module('FilmsModule')

.controller('FilmsController', function($scope, Film) {

  var initView = function(){

    var film1 = Film.build({"Title":"The Secret World of Arrietty","Year":"2010","Rated":"G","Released":"17 Feb 2012","Runtime":"94 min","Genre":"Animation, Adventure, Family","Director":"Hiromasa Yonebayashi","Writer":"Mary Norton (novel), Hayao Miyazaki (screenplay), Keiko Niwa (screenplay)","Actors":"Moises Arias, Bridgit Mendler, David Henrie, Will Arnett","Plot":"The Clock family are four-inch-tall people who live anonymously in another family's residence, borrowing simple items to make their home. Life changes for the Clocks when their daughter, Arrietty, is discovered.","Language":"Japanese, English","Country":"Japan","Awards":"11 wins & 6 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTAxNjk3OTYyODReQTJeQWpwZ15BbWU3MDgyODY2OTY@._V1_SX300.jpg","Metascore":"80","imdbRating":"7.6","imdbVotes":"55,440","imdbID":"tt1568921","Type":"movie","Response":"True"});

    var film2 = Film.build({"Title":"Transformers","Year":"2007","Rated":"PG-13","Released":"03 Jul 2007","Runtime":"144 min","Genre":"Action, Adventure, Sci-Fi","Director":"Michael Bay","Writer":"Roberto Orci (screenplay), Alex Kurtzman (screenplay), John Rogers (story), Roberto Orci (story), Alex Kurtzman (story)","Actors":"Shia LaBeouf, Megan Fox, Josh Duhamel, Tyrese Gibson","Plot":"An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.","Language":"English, Spanish","Country":"USA","Awards":"Nominated for 3 Oscars. Another 19 wins & 40 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Metascore":"61","imdbRating":"7.1","imdbVotes":"520,916","imdbID":"tt0418279","Type":"movie","Response":"True"});

    $scope.films = [film1, film2];

  };

  $scope.$on('$ionicView.loaded', function() {
    initView();
  })

});
