jQuery(document).ready(function($) {"use strict";


	var myTheme = window.myTheme || {},
    $win = $( window );

	myTheme.Isotope = function () {

		// 4 column layout
		var isotopeContainer = $('.isotopeContainer21');
		if( !isotopeContainer.length || !jQuery().isotope ) return;
		$win.load(function(){
			isotopeContainer.isotope({
				itemSelector: '.isotopeSelector'
			});
		$('.isotopeFilters').on( 'click', 'a', function(e) {
				$('.isotopeFilters').find('.active').removeClass('active');
				$(this).parent().addClass('active');
				var filterValue = $(this).attr('data-filter');
				isotopeContainer.isotope({ filter: filterValue });
				e.preventDefault();
			});
		});
	};

	myTheme.Isotope();




});
