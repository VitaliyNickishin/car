$(document).ready(function(){
/*
var flag=true;
    $("#min").click(function()
        {
            if(flag==true)
            {
                $(".package-min").fadeIn();
                flag=!flag;
            }
            else
            {
                $(".package-min").fadeOut();
                flag=!flag;
            }
    });
*/
$('#min').click(
  function(){
    $('.package-min').fadeIn('slow',0.5);
  },
  function(){
    $('.package-min').fadeOut('normal',1);
  }
);

/*
        $('#min').click(function(){

            $('.package-min').css(
              {'display', 'block'})
        });
        $('html').click(function(){

            $('.package-min').css(
              {'display', 'none'})
        });
 */
 /*
 $('#min').click(function (e){ // отслеживаем событие клика по веб-документу
        var block = $(".package-min"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            block.fadeIn(); // если условия выполняются - скрываем наш элемент
        }else {
    $(block).fadeOut();
                       }
    });
*/

/*    
$('#min').on('click', function(e) {
        e.preventDefault();
        $('.package-min').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
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
/*
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
*/

}); 


