angular.module('FilmsModule', ['FilmModel', 'OMDBFilmsModule'])

  .config(function($stateProvider) {
  $stateProvider

    .state('app.films', {
    url: '/films',
    views: {
      'content': {
        templateUrl: 'js/app/films/Films/films.html',
        controller: 'FilmsController'
      }
    }
  })

  .state('app.films-detail', {
  url: '/films-detail',
  views: {
    'content': {
      templateUrl: 'js/app/films/FilmDetails/films-detail.html',
      controller: 'FilmDetailsController'
      }
    }
  });

});