function getFilmVotes(callback) {
	$.get(userFilmVotesCachedParameters.splitStringPath, onListLoad);

	function onListLoad(respone) {
		var list = respone.split('.jpg').map(function(item) {
		  return item.split(/\\a|\\c|\\e/).reverse();
		});

		callback(list);
	}
}

getFilmVotes(function(arr) {
  var movies = [];

  arr.forEach(function(elem){
	movie = {
		titlePl: elem[4],
		title: elem[5],
		year: elem[3],
		rating: elem[1]
	};

	movies.push(movie);
  });

	$('body').empty().append('<textarea>'+ JSON.stringify(movies) +'</textarea>');
});
