var slideIndex = 0;
var numSlides = 3;

  $( document ).ready(function() {
    startLoop();
  });

function cycleSlide() {
  
      slideIndex++;
      if(slideIndex == numSlides){
        slideIndex = 0;
      }

      fadeOutImage('#banner-img', "img/slides/img" + slideIndex.toString() + ".jpg");

  };

  function startLoop () {
    setInterval(cycleSlide, 10000);
  };