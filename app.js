$(function() {

	// Fixed Header
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, introH)

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH)
	});

	function checkScroll(scrollPos, introH) {
		if ( scrollPos > introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	// Smooth Scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data("scroll");
		let elementOffset = $(elementId).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 60
		}, 700);
	});


	// Nav Toggle
	let nav = $("#nav");

	$("#navToggle").on("click", function (event) {
		event.preventDefault();

		nav.toggleClass("show");
	})


	// certificates: https://kenwheeler.github.io/slick/
	let slider = $("#certificatesSlider");


	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true
	});

});