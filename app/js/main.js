$(document).ready(function(){

/*
        $('#min').click(function(){

            $('.package-min').fadeIn();
        });
        $('#standart').click(function(){
            $('.package-min').fadeOut();
            $('.package-standart').fadeIn();
        });
 
*/




/*
$('#min').click(function(){
               $('.package-min').slideToggle(250);
               return false;
             });
$('#standart').click(function(){
               $('.package-standart').slideToggle(250);
               return false;
             });
*/



/*
$("#min").click(function () {
                       if ($(".package-min").is(":hidden")) {

                               $(".package-min").show("slow");

                       } else {

                               $(".package-min").hide("slow");

                       }
 return false;
});
$("#standart").click(function () {
                       if ($(".package-standart").is(":hidden")) {

                               $(".package-standart").show("slow");

                       } else {

                               $(".package-standart").hide("slow");

                       }
 return false;
});
*/
/*
	$("#min").click(function() { 
        
        $(".package-min").fadeIn(); 
        
         $(".package-min").fadeOut(); 	
       
      });
	$("#standart").click(function() { 
        
        $(".package-standart").fadeIn(); 
         
         $(".package-standart").fadeOut(); 
       
      });
*/
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


}); 


