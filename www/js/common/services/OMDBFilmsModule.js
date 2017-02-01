angular.module('OMDBFilmsModule', ['FilmModel'])

.constant('filmNames', [
	'Transformers',
	'Arrietty',
	'Avatar'
])

.constant('omdbApi', (function() {

	var namePlaceHolder = '[namePlaceHolder]';

	return {
		url: 'http://www.omdbapi.com/?t=' + namePlaceHolder + '&y=&plot=short&r=json',
		namePlaceHolder: namePlaceHolder
	};
})()
)

.factory('FilmsService', function($http, $q, filmNames, omdbApi, Film) {

	var filmsService = {};

	filmsService.films = [];
	filmsService.selectedFilm = null;

	var urlFromTitle = function(title) {
		//replace SPACE by +
		var queryString = title.split(' ').join('+');
		//replace placeholder with query
		var url = omdbApi.url.replace(omdbApi.namePlaceHolder, queryString);
		return url;
	}

	var selectFilmByTitle = function(title) {
		for (var i=0; i<filmsService.films.length; i++) {
			if (filmsService.films[i].title === title) {
				return filmsService.films[i];
			}
		}
	}

	filmsService.getFilm = function(title) {

		var deferred = $q.defer();

		if (filmsService.films.length > 0) {
			filmsService.selectedFilm = selectFilmByTitle(title);
			deferred.resolve(filmsService.selectedFilm);
		} else {
			$http.get(urlFromTitle(title), {}).then(
				function(response) {
					filmsService.selectedFilm = Film.build(response.data);
					deferred.resolve(filmsService.selectedFilm);
				}, function(error) {
					filmsService.selectedFilm = null;
					deferred.resolve(null);
				});
		}

		return deferred.promise;
	};

	filmsService.getFilms = function () {
		var deferred = $q.defer();
		if(filmsService.films.length > 0) {
			deferred.resolve(filmsService.films);
		} else {

			var nDownloads = 0;
			var someErrorOcurred = false;
			var resolveIfFinished = function(success) {
				nDownloads++;
				if(!success) {
					someErrorOcurred = true;
				}
				if(nDownloads === filmNames.length) {
					if(!someErrorOcurred) {
						deferred.resolve(filmsService.films);
					} else {
						deferred.reject;
					}
				}
			}

			var resolveIfFinished = function(success) {};

				for(var i=0; i < filmNames.length; i++) {
					$http.get(urlFromTitle(filmNames[i]), {}).then (
					function(response) {
						filmsService.films.push(Film.build(response.data));
						resolveIfFinished(true);
					},
					function(error) {
						resolveIfFinished(false);
					}
				);
			}
		}

		return deferred.promise;
	};

	return filmsService;

})