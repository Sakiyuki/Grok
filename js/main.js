$(function () {
	var today = new Date();
	grokDay = new Date(2015, 4, 29, 0, 0, 0, 0);
	$('#countdown').countdown({until: grokDay});
	$('#countdown').countdown('pause');
});
