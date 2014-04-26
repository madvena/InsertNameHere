$(function() {
	var science = 0;
	var technology = 0;
	var engineering = 0;
	var math = 0;

	var selectionHeight = $('#selections').height();
	console.log(selectionHeight);
	$('#questionbox').css('height', selectionHeight + 60);

	for (var id = 0; id < 14; id++) {
		$('#choice' + id).click(function() {
			$('#choice' + id).css('background-color', '#a1d9ee');
		}); // end click
	}
});