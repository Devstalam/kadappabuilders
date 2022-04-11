$(document).ready(function() {
//===============Mobile nav Function============
    $('#menu').on('click', function() {
        if ($(window).width() <= 767) {
            $('.navigation').slideToggle('normal');
        }
		return false;
    })
   $('.navigation>ul> li >a').on('click', function() { 
        if ($(window).width() <= 767) {
            $('.navigation>ul> li').removeClass('on');
            $('.navigation>ul> li> ul').slideUp('normal');
            if ($(this).next().next('ul').is(':hidden') == true) {
                $(this).parent('li').addClass('on');
                $(this).next().next('ul').slideDown('normal');
            }
        }
		//return false;
    });
    
    // header_fixed
      var headertopoption = $(window);
    var headTop = $('#header');

    headertopoption.on('scroll', function() {
        if (headertopoption.scrollTop() > 200) {
            headTop.addClass('menu-bg');
        } else {
            headTop.removeClass('menu-bg');
        }
    });
    
 
    
    /*----------------------------------------------
	 ----------- Loader Function  --------------------
	 -------------------------------------------------*/
	var preloader = $("#preloader");
	preloader.delay(500).fadeOut();
    
     //=============Window Height Function=============
     var bodyheight = $(window).height();
     var header_h = $(".header").height();
          $(".window_hieght2").height(bodyheight - header_h);
     $(window).resize(function() {
     	 var header_h = $(".header").height();
          var bodyheight = $(window).height();
          $(".window_hieght2").height(bodyheight - header_h);
       }); 
    //=============Accordion Function=============
 $('.mobile-heading').on('click', function() { 
 			 $('.tab-content .tab-block').slideUp('normal');
 			 $('.tab-content .tab__link').removeClass('active__tab');
  				$(this).addClass('active__tab');
            if ($(this).next().is(':hidden') == true) {
                $(this).next().slideDown('normal');
            }
       
    });  
    
    
    /*----------------------------------------------
	 -----------Masonry Function  --------------------
	 -------------------------------------------------*/
	var container_masonry = $(".container-masonry");
	container_masonry.imagesLoaded(function() {
		container_masonry.isotope({
			itemSelector : '.nf-item',
			transitionDuration : '1s',
			percentPosition : true,
			masonry : {
				columnWidth : '.grid-sizer'
			}
		});
	});

	/*----------------------------------------------
	 -----------Masonry filter Function  --------------------
	 -------------------------------------------------*/
	var container_filter = $(".container-filter");
	container_filter.on("click", ".categories", function() {
		var a = $(this).attr("data-filter");
		container_masonry.isotope({
			filter : a
		});

	});
	/*----------------------------------------------
	 -----------Masonry filter Active Function  --------------------
	 -------------------------------------------------*/
	container_filter.each(function(e, a) {
		var i = $(a);
		i.on("click", ".categories", function() {
			i.find(".active").removeClass("active"), $(this).addClass("active");
		});
	});

	/*----------------------------------------------
	 -----------Masonry Grid view Function  --------------------
	 -------------------------------------------------*/
	var container_grid = $(".container-grid");
	container_grid.imagesLoaded(function() {
		container_grid.isotope({
			itemSelector : ".nf-item",
			layoutMode : "fitRows"
		});
	});

	/*----------------------------------------------
	 -----------Masonry Grid Filter Function  --------------------
	 -------------------------------------------------*/
	container_filter.on("click", ".categories", function() {
		var e = $(this).attr("data-filter");
		container_grid.isotope({
			filter : e
		});
	});

	/*----------------------------------------------
	 -----------isotope Function  --------------------
	 -------------------------------------------------*/
	var isotop_grid = $('#isotope');
	if (isotop_grid.length) {
		// init Isotope
		var $grid = isotop_grid.isotope({
			itemSelector : 'li	',
			percentPosition : true,
			layoutMode : 'fitRows',
			fitRows : {
				gutter : 0
			}
		});
	}
    
    
/*----------------------------------------------
	 -----------Light Function  --------------------
	 -------------------------------------------------*/
	var fLight = $(".fancylight");
	if (fLight.length) {
		fLight.fancybox({
			openEffect : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
	//==========================================

	//===============Datepicker Function========
var datepicker = $('.datepicker');
	if (datepicker.length) {
	datepicker.pickadate({
    selectMonths: true, 
    selectYears: 15 
  });
}
/*-----------------------------------------------
	 -----------  style-switcher  --------------------
	 -------------------------------------------------*/
	$("body").append('<div id="style-switcher"></div>');
	$("#style-switcher").load("theme-option/swicher.html");



/*----------------------------------------------
	 -----------Counter Function  --------------------
	 -------------------------------------------------*/
	var counter = $('.counter');
	if (counter.length) {
		$('.counter').appear(function() {
			counter.each(function() {
				var e = $(this),
				    a = e.attr("data-count");
				$({
					countNum : e.text()
				}).animate({
					countNum : a
				}, {
					duration : 8e3,
					easing : "linear",
					step : function() {
						e.text(Math.floor(this.countNum));
					},
					complete : function() {
						e.text(this.countNum);
					}
				});
			});
		});
	}



/*----------------------------------------------
	 ----------- Map Function  --------------------
	 -------------------------------------------------*/
	var mapWrap = $('#map');
	if (mapWrap.length) {
		google.maps.event.addDomListener(window, 'load', initialize);

	}
	 	
	 //	Releted Project slider
	var relatedProject = $("#related-project");
	relatedProject.owlCarousel({
		loop : true,
		nav : true,
		dots : false,
		margin : 30,
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 2
			},
			1200 : {
				items : 3
			}
		},
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"]

	});

//index_testimonial
	var testimonial_carosule_wrap = $('.testimonial_carosule-wrap');
	testimonial_carosule_wrap.owlCarousel({
		loop : true,
		margin : 30,
		nav : true,
		dots : false,
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 2
			},
			1200 : {
				items : 2
			}
		}
	});

// home_team
		var home_team = $('#team-carousel');
	home_team.owlCarousel({
		loop : true,
		margin :30,
		nav : true,
		dots : false,
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 4
			},
			1200 : {
				items : 4
			}
		}
	});

//	About page Carousel
	var carouselSlider = $('.abt-block__slider');
	carouselSlider.owlCarousel({
		loop : true,
		margin : 10,
		nav : false,
		dots : true,
		center : false,
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 1
			},
			992 : {
				items : 1
			},
			1200 : {
				items : 1
			}
		}
	});
	
	//	About page Carousel
	var carouselSlider = $('.carousel-slider');
	carouselSlider.owlCarousel({
		loop : true,
		margin : 30,
		nav : true,
		dots : false,
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 3
			},
			1200 : {
				items : 3
			}
		}
	});
	//services-items
	var historyBlock = $('.team_carousel');
	historyBlock.owlCarousel({
		loop : true,
		margin : 0,
		nav : true,
		dots : false,
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 4
			},
			1200 : {
				items : 4
			}
		}
	});

//team_page
	var team_slider = $('.team_slider');
	team_slider.owlCarousel({
		loop : true,
		margin : 0,
		nav : true,
		dots : false,
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 4
			},
			1200 : {
				items : 4
			}
		}
	});


// owl_carousel
//	Releted Project slider
	var servi_carousel = $("#servi-carousel");
	servi_carousel.owlCarousel({
		loop : true,
		nav : true,
		dots : false,
		margin : 30,
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 3
			},
			1200 : {
				items : 3
			}
		},
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"]

	});



	//Carousel home_2
	var carouselSlider = $('.carousel-slider');
	carouselSlider.owlCarousel({
		loop : true,
		margin : 10,
		nav : true,
		dots : false,
		center : true,
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 3
			},
			1200 : {
				items : 3
			}
		}
	});



	//Blog Slider
	var itemCarousel_1 = $(".item1-carousel");
	itemCarousel_1.owlCarousel({
		loop : true,
		margin : 10,
		nav : true,
		dots : false,
		center : true,
		autoplay : true,
		autoplayTimeout : 2000,
		autoplayHoverPause : true,
		responsive : {
			0 : {
				items : 1

			},
			600 : {
				items : 1

			},
			1000 : {
				items : 1

			}
		},
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"]

	});





	// End
});


/*-----------------------------------------------
 -----------  Map Color Theme Function  ----------
 -------------------------------------------------*/
var mapWrap = $('#map');
if (mapWrap.length) {
	var myCenter = new google.maps.LatLng(51.538308, -0.3817765);
	function initialize() {
		var mapProp = {
			center : myCenter,
			zoom : 15,
			mapTypeId : google.maps.MapTypeId.ROADMAP,
			scrollwheel : false,
			styles : [{
				elementType : 'geometry',
				stylers : [{
					color : '#242f3e'
				}]
			}, {
				elementType : 'labels.text.stroke',
				stylers : [{
					color : '#242f3e'
				}]
			}, {
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#746855'
				}]
			}, {
				featureType : 'administrative.locality',
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#d59563'
				}]
			}, {
				featureType : 'poi',
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#d59563'
				}]
			}, {
				featureType : 'poi.park',
				elementType : 'geometry',
				stylers : [{
					color : '#263c3f'
				}]
			}, {
				featureType : 'poi.park',
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#6b9a76'
				}]
			}, {
				featureType : 'road',
				elementType : 'geometry',
				stylers : [{
					color : '#38414e'
				}]
			}, {
				featureType : 'road',
				elementType : 'geometry.stroke',
				stylers : [{
					color : '#212a37'
				}]
			}, {
				featureType : 'road',
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#9ca5b3'
				}]
			}, {
				featureType : 'road.highway',
				elementType : 'geometry',
				stylers : [{
					color : '#746855'
				}]
			}, {
				featureType : 'road.highway',
				elementType : 'geometry.stroke',
				stylers : [{
					color : '#1f2835'
				}]
			}, {
				featureType : 'road.highway',
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#f3d19c'
				}]
			}, {
				featureType : 'transit',
				elementType : 'geometry',
				stylers : [{
					color : '#2f3948'
				}]
			}, {
				featureType : 'transit.station',
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#d59563'
				}]
			}, {
				featureType : 'water',
				elementType : 'geometry',
				stylers : [{
					color : '#17263c'
				}]
			}, {
				featureType : 'water',
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#515c6d'
				}]
			}, {
				featureType : 'water',
				elementType : 'labels.text.stroke',
				stylers : [{
					color : '#17263c'
				}]
			}]
		};
		var map = new google.maps.Map(document.getElementById("map"), mapProp);

		var marker = new google.maps.Marker({
			position : myCenter,
			icon : {
				url : 'assets/images/map-pin.png',
				size : new google.maps.Size(90, 111), //marker image size
				origin : new google.maps.Point(0, 0), // marker origin
				anchor : new google.maps.Point(35, 86) // X-axis value (35, half of marker width) and 86 is Y-axis value (height of the marker).
			}
		});

		marker.setMap(map);

	}

	function reloadStylesheets() {
		var queryString = 'reload=' + new Date().getTime();
		$('link[rel="stylesheet"]').each(function() {
			if (this.href.indexOf('?') === -1) {
				this.href = this.href + '&' + queryString;
			} else {
				this.href = this.href + '?' + queryString;
			}
		});
	}

}
