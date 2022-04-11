	var tpj=jQuery;					
					var revapi34;
					tpj(document).ready(function() {
						if(tpj("#rev_slider_34_1").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_34_1");
						}else{
							revapi34 = tpj("#rev_slider_34_1").show().revolution({
								sliderType:"standard",
								jsFileLocation:"assets/",
								sliderLayout:"fullscreen",
								dottedOverlay:"none",
								delay:9000,
								navigation: {
									keyboardNavigation:"on",
									keyboard_direction: "horizontal",
									mouseScrollNavigation:"off",
									onHoverStop:"on",
									touch:{
										touchenabled:"on",
										swipe_threshold: 75,
										swipe_min_touches: 1,
										swipe_direction: "horizontal",
										drag_block_vertical: false
									}
									,
									arrows : {
					style : "",
					enable : true,
					hide_onmobile : false,
					hide_onleave : false,
					hide_under : 0,
					hide_over : 9999,
					tmp : '',
					left : {
						h_align : "left",
						v_align : "center",
						h_offset : 50,
						v_offset : 0
					},
					right : {
						h_align : "right",
						v_align : "center",
						h_offset : 50,
						v_offset : 0
					}
				},
									
	bullets:{
         style:"",
         enable:false,
         hide_onmobile:true,
         hide_onleave:true,
         hide_delay:200,
         hide_delay_mobile:1200,
         hide_under:0,
         hide_over:9999,
         tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>', 
         direction:"horizontal",
         space:15,       
         h_align:"bottom",
         v_align:"center",
         h_offset:0,
         v_offset:20
        }
			},
								
	viewPort: {
		enable:true,
		outof:"pause",
		visible_area:"80%"
			},
		responsiveLevels:[1240,1024,778,480],
		gridwidth:[1240,1024,778,480],
		gridheight:[600,600,500,400],
		lazyType:"none",
		parallax: {
		type:"none",
		origo:"enterpoint",
		speed:400,
		levels:[5,10,15,20,25,30,35,40,45,50],
					},
								
		shadow:0,
		spinner:"off",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		fullWidth: "off",
        fullScreen: "on",
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
					}
				});
						}
					});	/*ready*/