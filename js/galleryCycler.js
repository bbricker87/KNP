var galleryIndex = 0;
var gallerySlides = 4;
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

    document.getElementById("gallery-main-lg").src = "img/galleries/" + galleryType + "/img" + galleryIndex.toString() + ".jpg";
    document.getElementById("gallery-main-md").src = "img/galleries/" + galleryType + "/img" + galleryIndex.toString() + ".jpg";
    document.getElementById("gallery-main-sm").src = "img/galleries/" + galleryType + "/img" + galleryIndex.toString() + ".jpg";

  };

  function startGalleryLoop () {
    intervalID = setInterval(galleryCycle, 4000);
  };

  $('.thumbnail-img').click(function(){

    clearInterval(intervalID);

    document.getElementById("gallery-main-lg").src = "img/galleries/" + galleryType + "/" + $(this).attr('name') + ".jpg";
    document.getElementById("gallery-main-md").src = "img/galleries/" + galleryType + "/" + $(this).attr('name') + ".jpg";
    document.getElementById("gallery-main-sm").src = "img/galleries/" + galleryType + "/" + $(this).attr('name') + ".jpg";

    intervalID = setInterval(galleryCycle, 4000);

  });