 $( document ).ready(function() {
    startLoop();
  });

function setHeight() {

    document.getElementById("banner-img").src = "img/slides/img" + slideIndex.toString() + ".jpg";

  };

  function startLoop () {
    setInterval(setHeight, 500);
  };