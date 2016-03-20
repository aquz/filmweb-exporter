function getList () {
	var list = [],
		movie,
		title;

	$('.votesPanel .votePanel').each(function () {
	  movie = {};
	  movie.titlePl = $(this).find('.voteFilmTitle a')[0].title;
	  movie.year = $(this).find('.voteFilmTitle')[0].innerHTML.match(/\(([0-9]+)\)/)[1];
	  movie.rating = $(this).find('.rateText span').text() + '.0';

	  title = $(this).find('.voteFilmTitle')[0].innerHTML.match(/<br>(.+)<div class="countryLabel">/);
	  if (title) {
	  	movie.title = title[1];
	  } else {
	  	movie.title = movie.titlePl;
	  }

	  list.push(movie);
	});

	$('body').empty().append('<textarea>'+ JSON.stringify(list) +'</textarea>');
}

var option = $('<option value="999999">999999</option>');
$('.selectToReplace').append(option);
option.attr('selected', 'selected').parent().trigger('change');

$('.votesPanel').bind('DOMSubtreeModified', function checkVoteList () {
  var expected = parseInt($('.statsHeader b:first-child')[0].innerHTML),
  	length = $('.votesPanel .votePanel').length;

  if (expected === length) {
  	getList();
    console.log('OK');
  }
});