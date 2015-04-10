var galleryIndex = 0;
var gallerySlides = 12;
var galleryType = '';
var intervalID;

  $( document ).ready(function() {
    startGalleryLoop();
  });

function galleryCycle() {

      galleryIndex++;
      if(galleryIndex == gallerySlides){
        galleryIndex = 0;
      }
  
    fadeOutImage('#gallery-main-lg', "img/galleries/" + galleryType + "/img" + galleryIndex.toString() + ".jpg");
    fadeOutImage('#gallery-main-md', "img/galleries/" + galleryType + "/img" + galleryIndex.toString() + ".jpg");
    fadeOutImage('#gallery-main-sm', "img/galleries/" + galleryType + "/img" + galleryIndex.toString() + ".jpg");  
  };

  function startGalleryLoop () {
    intervalID = setInterval(galleryCycle, 6000);
  };

  $('.thumbnail-img').click(function(){

    clearInterval(intervalID);

    galleryIndex = $(this).attr('name').replace(/\D/g,'');

    fadeOutImage('#gallery-main-lg', "img/galleries/" + galleryType + "/img" + galleryIndex.toString() + ".jpg");
    fadeOutImage('#gallery-main-md', "img/galleries/" + galleryType + "/img" + galleryIndex.toString() + ".jpg");
    fadeOutImage('#gallery-main-sm', "img/galleries/" + galleryType + "/img" + galleryIndex.toString() + ".jpg");   

    intervalID = setInterval(galleryCycle, 6000);

  });

function fadeOutImage(elementName, newSource){

  var imageElement = $(elementName);

  imageElement.fadeOut(500, function(){
      changeSource(imageElement, newSource);
  })

}

function changeSource(imgElement, newSource){

  imgElement.attr('src', newSource);

  imgElement.fadeIn(1000);
}