
window.onscroll = function() {    };

let menumobile =  document.querySelector("#menumobile");

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


 let $overlay = $('<div id="overlay"></div>');
 let $image = $("<img>");
 
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
 
   $("#overlay").click(function() {
     $( "#overlay" ).hide();
   });

   //click the image and a scaled version of the full size image will appear
   $("#Flyers-gallery a").click( function(event) {
     event.preventDefault();
     var imageLocation2 = $(this).attr("href");
 
     //update overlay with the image linked in the link
     $image.attr("src", imageLocation2);
 
     //show the overlay
     $overlay.show();
   } );
     