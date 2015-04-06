var slideIndex = 0;
var numSlides = 5;

function cycleSlide() {
  
  slideIndex++;
  if(slideIndex == numSlides){
    slideIndex = 0;
  }

  document.getElementById("banner-img").src = "../img/dashboard/slide" + slideIndex.toString() + ".jpg";

  }

  setInterval(cycleSlide, 5000);

};