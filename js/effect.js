//Alle Tobias funktioner ligger her

                //Disse tre funktioner tilføjer tekst når musen rykker over et billede
                $(function() {
                    $('.layer-q1a1').mouseover(function(){
                        
                        $('#q1a1').show().animate({opacity: '0.85', width: '100%'});

                        
                    }).mouseleave(function() {
                    	$('#q1a1').animate({opacity: '0',width: '20%'});
                    	
                    });
					$('.layer-q1a2').mouseover(function(){
                        
                        $('#q1a2').show().animate({opacity: '0.85', width: '100%'});

                        
                    }).mouseleave(function() {
                    	
                    	$('#q1a2').animate({opacity: '0',width: '20%'});
                    	
                    });
					$('.layer-q1a3').mouseover(function(){
					    
					    //$('#q1a3').fadeTo("slow", 0.15)
					    $('#q1a3').show().animate({opacity: '0.85', width: '100%'});
					
					    
					}).mouseleave(function() {
						$('#q1a3').animate({opacity: '0',width: '20%'});
					});
                });
                


                //Checker hvilket slide der er tale om, og deaktiverer tekst
            $(function() {
               masterslider.api.addEventListener(MSSliderEvent.WAITING , function(){
                    if(masterslider.api.index() == 1 )
                    {
                       
                        $('#q1a1').delay( 10 ).hide().animate({width: '20%'});
                        $('#q1a2').delay( 10 ).hide().animate({width: '20%'});
                        $('#q1a3').delay( 10 ).hide().animate({width: '20%'});
                    }
                    
                })
            });


            $.fn.slideFadeToggle  = function(speed, easing, callback) {
                return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
            }; 
            
            
            
            
            // Funktioner til pop-up
            
            
            function deselect(e) {
            	  $('.pop').slideFadeToggle(function() {
            	    e.removeClass('selected');
            	  });    
            	}

            	$(function() {
            	  $('#q5a2').on('click', function() {
            	    if($(this).hasClass('selected')) {
            	      deselect($(this));               
            	    } else {
            	      $(this).addClass('selected');
            	      $('.pop').slideFadeToggle();
            	    }
            	    return false;
            	  });

            	  $('.close').on('click', function() {
            	    deselect($('#q5a2'));
            	    return false;
            	  });
            	});
            	
            	$(function() {
                	$('#pop2Svar1').on('click', function() {
                	    if($(this).hasClass('selected')) {
                	      deselect($(this));               
                	    } else {
                	      $(this).addClass('selected');
                	      $('#messagepopq5a2a1').slideFadeToggle();
                	    }
                	    return false;
                	  });

                	  $('.close').on('click', function() {
                	    deselect($('#q5a2'));
                	    return false;
                	  });
                	});