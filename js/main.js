$(function () {
	$(".select__arrow").click(function () {
		$(".select__list").toggleClass("active");
		$(this).toggleClass("active");
	});
});
