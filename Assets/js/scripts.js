
window.onscroll = function() {    };

var menumobile =  document.querySelector("#menumobile");

window.onscroll = function() {  
    menumobile.className = "menumobile" 
  };

function abrirMenu (){
    if(menumobile.className == "menumobile") {
        menumobile.className = "menumobile visible";
    } else {
        menumobile.className = "menumobile";
   
    }


    
 }


 var $overlay = $('<div id="overlay"></div>');
 var $image = $("<img>");
 
 //An image to overlay
 $overlay.append($image);
 
 //Add overlay
 $("body").append($overlay);
 
   //click the image and a scaled version of the full size image will appear
   $("#photo-gallery a").click( function(event) {
     event.preventDefault();
     var imageLocation = $(this).attr("href");
 
     //update overlay with the image linked in the link
     $image.attr("src", imageLocation);
 
     //show the overlay
     $overlay.show();
   } );
 
   $("#overlay2").click(function() {
     $( "#overlay2" ).hide();
   });

   var $overlay2 = $('<div id="overlay"></div>');
 var $image2 = $("<img>");
 
 //An image to overlay
 $overlay2.append($image2);
 
 //Add overlay
 $("body").append($overlay2);
 
   //click the image and a scaled version of the full size image will appear
   $("#Flyers-gallery a").click( function(event) {
     event.preventDefault();
     var imageLocation2 = $(this).attr("href");
 
     //update overlay with the image linked in the link
     $image2.attr("src", imageLocation2);
 
     //show the overlay
     $overlay2.show();
   } );
 
   $("#overlay2").click(function() {
     $( "#overlay2" ).hide();
   });