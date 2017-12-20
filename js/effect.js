//Alle Tobias funktioner ligger her


				//Checker hvilket slide der er tale om, og deaktiverer tekst
				
				//Variables: X = slide nummer; Y = hvilket spørgsmål (se kommentarer i HTML); Z = Lokalt spørgsmålsnummer, mellem 1 og 3;
				//Step 1: Brug nedenstående funktion, set masterslide.api.index = X; Set tre funktioner, en for hvert overlay med data: qYaZ;
	            

				/*
				 $(function() {
	               masterslider.api.addEventListener(MSSliderEvent.WAITING , function(){
	                    if(masterslider.api.index() == X )
	                    {
	                       
	                        $('#qYaZ').delay(10).hide().animate({width: '20%'});
	                        $('#qYaZ').delay(10).hide().animate({width: '20%'});
	                        $('#qYaZ').delay(10).hide().animate({width: '20%'});
	                    }
	                    
	                })
	            }); 
				 */

				//Live eksempel:
				$(function() {
	               masterslider.api.addEventListener(MSSliderEvent.WAITING , function(){
	                    if(masterslider.api.index() == 1 )
	                    {
	                       
	                        $('#q2a1').delay(10).hide().animate({width: '20%'});
	                        $('#q2a2').delay(10).hide().animate({width: '20%'});
	                        $('#q2a3').delay(10).hide().animate({width: '20%'});
	                    }
	                    
	                })
	            });
				
				
				//Step 2: Brug nedenstående funktion til at lave et overlay ved mouseover og mouseleave
				//Disse funktioner tilføjer tekst når musen rykker over et billede
				//Variables: Y = hvilket spørgsmål (se kommentarer i HTML); Z = Lokalt spørgsmålsnummer, mellem 1 og 3;
				//Først, sæt info ved #1 til at matche '<div class="layer-qYaZ">' i html.
				//Sæt #3 #qYaZ til at matche '<div id="qYaZ">
				//Sæt #7 #qYaZ til at matche '<div id="qYaZ">
				/*
				$(function() {
#1                $('.layer-qYaZ').mouseover(function(){
#2                        
#3                        $('#qYaZ').show().animate({opacity: '0.85', width: '100%'});
#4
#5                        
#6                    }).mouseleave(function() {
#7                    	$('#q1a1').animate({opacity: '0',width: '20%'});
#8                    	
#9                    });
                });
                */
                
                
                //Live eksempel
                $(function() {
                    $('.layer-q2a1').mouseover(function(){
                        
                        $('#q2a1').show().animate({opacity: '0.85', width: '100%'});

                        
                    }).mouseleave(function() {
                    	$('#q2a1').animate({opacity: '0',width: '20%'});
                    	
                    });
					$('.layer-q2a2').mouseover(function(){
                        
                        $('#q2a2').show().animate({opacity: '0.85', width: '100%'});

                        
                    }).mouseleave(function() {
                    	
                    	$('#q2a2').animate({opacity: '0',width: '20%'});
                    	
                    });
					$('.layer-q2a3').mouseover(function(){
					    
					    //$('#q1a3').fadeTo("slow", 0.15)
					    $('#q2a3').show().animate({opacity: '0.85', width: '100%'});
					
					    
					}).mouseleave(function() {
						$('#q2a3').animate({opacity: '0',width: '20%'});
					});
                });


            $.fn.slideFadeToggle  = function(speed, easing, callback) {
                return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
            }; 
            
            
            
            //step 3: Lav overlay til forkerte svar
            // Funktioner til pop-up
            
            //Step 3, part 1: HTML
            // Tilføj id="lay-qYaZ" til en class, der ligner den nedenfor)
            /*
             <div class="ms-layer msp-cn-1215-88"
                         style="width:300px;"
                         id="lay-q5a2" ......> 
             
             */
            
            /*
             * Tilføj en div indholdende overlayet, umiddelbart under Valg teksten, lign:
             * 
             * 
             */
            //Step 3, part 2: CSS
            //Step 3, part 3: JQuery
            
            
            //Live eksempel:
            $(function() {
          	  $('#lay-q2a1').on('click', function() {
          	    
          	    $('#messagepopq2a1').slideFadeToggle();
          	    $('#messagepopq2a2').hide();
          	    $('#messagepopq2a3').hide();
          	  });
          	  
          	  $('#lay-q2a2').on('click', function() {
          	    
          	    $('#messagepopq2a2').slideFadeToggle();
          	    $('#messagepopq2a1').hide();
          	    $('#messagepopq2a3').hide();
          	  });
          	  
          	  //Denne skal slettes, da dette også er det rigtige svar.
          	  $('#lay-q2a3').on('click', function() {
          	    
          	    $('#messagepopq2a3').slideFadeToggle();
          	    $('#messagepopq2a1').hide();
          	    $('#messagepopq2a2').hide();
          	  });
            });
          	  
            	
            	
        	//Step 4: lav ekstra overlay til forkerte svar
            //Ikke kommenteret endnu, og mangler lige det sidste fix.. 
            
            	$(function() {
                	$('#messagepopq5a2a1').on('click', function() {
                	    
                	      $(this).addClass('selected');
                	      //messagepopq5a2a1 = q5a2; a1 = 
                	      $('#messagepopq5a2a1pop').slideFadeToggle();
                	    
                	    
                	  });
                	});
            	
            	
            	
            	
            	//Generelle funktioner:
            	function deselect(e) {
              	  $('.pop').slideFadeToggle(function() {
              	    e.removeClass('selected');
              	  });    
              	}