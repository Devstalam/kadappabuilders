jQuery(function($) {"use strict";
	var Site = {

		initialized : false,

		initialize : function() {

			if (this.initialized)
				return;
			this.initialized = true;

			this.build();
			this.validation();
			//this.events();
		},

		build : function() {
		},
		
		validation : function() {
			var bool = true;

			$('#name,#sub,#email,#message').blur(function() {
				validateForm2(this);
			});

			$('#submit').click(function() {
				var i = 0;
				var x = $('#name').val();

				if (x == null || x == "" || x == "Name") {

					$('#name').addClass('error')
					bool = false;

				} else {
					i++;
					$('#name').removeClass('error');
					name_val = $('#name').val();

				}

				var x = $('#sub').val();

				if (x == null || x == "" || x == "Name") {
					$('#sub').addClass('error')
					bool = false;

				} else {
					i++;
					$('#sub').removeClass('error');
					comp_val = $('#sub').val();

				}

				var x = $('#email').val();

				var atpos = x.indexOf("@");
				var dotpos = x.lastIndexOf(".");
				if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length || x == 'Email') {
					$('#email').addClass('error')
					bool = false;
				} else {

					i++;
					$('#email').removeClass('error');
					email_val = $('#email').val();

				}

				msg_val = $('#message').val();
				//alert(i);

				if (i == 3) {

					bool = true;
				}

				if (!bool) {

					return false;
				} else {
//alert(1);
					$.post('mail.php', {
						name : name_val,
						email : email_val,
						company : comp_val,
						msg : msg_val,
					}, function(data) {
						//alert(2);

						if (data == 1) {
							setTimeout(function() {
								$('#name').val('');
								$('#email').val('');
								$('#sub').val('');
								$('#message').val('');
								//$('#name,#sub,#email,#message').next().removeClass("focussed");
								//$('.ch').css('top', 0)
								//$('#success').find('div').fadeOut();
								$('#success').fadeIn(400);
								
								$('#success').find('div').fadeIn();
								setTimeout(function() {
									$('#success').find('div').fadeOut();

								}, 2500)
							}, 400);

						}
					})
				
				}

			});

			function validateForm2(abc) {

				if ($(abc).val() != "") {
					$(abc).removeClass('error');

				} else {
					$(abc).addClass('error');

				}
				//email
				if ($(abc).attr('id') == 'email') {
					if (($(abc).val() != "" || $(abc).val() != null) && ($(abc).val().match(emailRegex))) {
						$(abc).removeClass('error');

					} else {
						$(abc).addClass('error');
					}
				}

			}

			var name_val = ''
			var email_val = '';

			var msg_val = '';
			var comp_val = '';
			var emailRegex = /^[a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
			var numericExpression = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
		}
	};

	Site.initialize();
})

