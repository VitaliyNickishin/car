$(document).ready(function(){

/*при клике на пакет появляются детали входящие в него*/
	$(function() {
	  $('#min').click(function() {
	    $('.package-min').toggle('slow');
	  });
	});
	$(function() {
	  $('#standart').click(function() {
	    $('.package-standart').toggle('slow');
	  });
	});
	$(function() {
	  $('#standart-plus').click(function() {
	    $('.package-standart-plus').toggle('slow');
	  });
	});
	$(function() {
	  $('#standart-2plus').click(function() {
	    $('.package-standart-2plus').toggle('slow');
	  });
	});
	$(function() {
	  $('#standart-3plus').click(function() {
	    $('.package-standart-3plus').toggle('slow');
	  });
	});



 $('#mini').click(function(){

            $('.showcase-citroen').fadeIn();
        });
 $('#medium').click(function(){

            $('.showcase-mazda').fadeIn();
        });
 $('#premium').click(function(){

            $('.showcase-mercedes').fadeIn();
        });









}); 


