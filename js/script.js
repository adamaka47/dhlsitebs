$(document).ready(function() {


	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();
		if (wScroll > 700) {
			$('.scrollToTop').fadeIn(200);
		} else {
			$('.scrollToTop').fadeOut(200);
		}
	});

	$('.scrollToTop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 1000)
	});

	$('.header_top_button').click(function() {
		$('.header_top_lang_menu').toggleClass('header_top_lang_menu_active');
	});

	$('.header_top_profile').on('click', function() {
		$('.header_top_info_menu').toggleClass('header_top_info_menu_active')
	});



	let navLink = $('.header_nav ul li a');

	navLink.on('click', function(event) {
		event.preventDefault();
		let name = $(this).attr('href');
		let offs = $(name).offset().top;
		$('html, body').animate({scrollTop: offs}, 2500);

	});

	$('.services_location_arrow').click(function(event) {
		event.preventDefault();
		$('.services_location_select').toggleClass('services_location_select_active');
	});

	$('.services_location_select input').click(function(event) {
		event.preventDefault();
		var valLoc = $('.services_location_option input').val();
		$('.services_location_option input').val($(this).val());
		$('.services_location_select input').val(valLoc);
	});


	$('.recom_elem_a .recom_option a').on('click', function(event) {
		event.preventDefault();
		$('.recom_elem_active').removeClass('recom_elem_active');
		$('.recom_option_active').removeClass('recom_option_active');
		$('.recom_text').removeClass('recom_text_active');
		$('.recom_option input').removeClass('active')
		$('.recom_elem a').removeClass('active');

		$('.recom_elem_a').addClass('recom_elem_active');
		$('.recom_elem_a .recom_option').addClass('recom_option_active');
		$('.recom_elem_a .recom_text').addClass('recom_text_active');
		$('.recom_elem_a .recom_option input').addClass('active')
		$('.recom_elem_a a').addClass('active');
	});


	$('.recom_elem_b .recom_option a').on('click', function(event) {
		event.preventDefault();
		$('.recom_elem_active').removeClass('recom_elem_active');
		$('.recom_option_active').removeClass('recom_option_active');
		$('.recom_text').removeClass('recom_text_active');
		$('.recom_option input').removeClass('active')
		$('.recom_elem a').removeClass('active');

		$('.recom_elem_b').addClass('recom_elem_active');
		$('.recom_elem_b .recom_option').addClass('recom_option_active');
		$('.recom_elem_b .recom_text').addClass('recom_text_active');
		$('.recom_elem_b .recom_option input').addClass('active')
		$('.recom_elem_b a').addClass('active');
	});


	$('.recom_elem_c .recom_option a').on('click', function(event) {
		event.preventDefault();
		$('.recom_elem_active').removeClass('recom_elem_active');
		$('.recom_option_active').removeClass('recom_option_active');
		$('.recom_text').removeClass('recom_text_active');
		$('.recom_option input').removeClass('active')
		$('.recom_elem a').removeClass('active');

		$('.recom_elem_c').addClass('recom_elem_active');
		$('.recom_elem_c .recom_option').addClass('recom_option_active');
		$('.recom_elem_c .recom_text').addClass('recom_text_active');
		$('.recom_elem_c .recom_option input').addClass('active')
		$('.recom_elem_c a').addClass('active');
	});


	$('.recom_elem_d .recom_option a').on('click', function(event) {
		event.preventDefault();
		$('.recom_elem_active').removeClass('recom_elem_active');
		$('.recom_option_active').removeClass('recom_option_active');
		$('.recom_text').removeClass('recom_text_active');
		$('.recom_option input').removeClass('active')
		$('.recom_elem a').removeClass('active');

		$('.recom_elem_d').addClass('recom_elem_active');
		$('.recom_elem_d .recom_option').addClass('recom_option_active');
		$('.recom_elem_d .recom_text').addClass('recom_text_active');
		$('.recom_elem_d .recom_option input').addClass('active')
		$('.recom_elem_d a').addClass('active');
	});


	var tab = $('.recom_tab');
	tab.on('click', function() {
		$('.recom_select_active').removeClass('recom_select_active');
		$('.recom_select[data-tab='+$(this).index()+']').addClass('recom_select_active');
	});


});