function goback(){
	if(window.history.length == 1){
		window.location.href = '/'
	}else{
		window.history.back()
	}
}


//----------------- CAROUSEL ------------------ //

let slides = document.querySelectorAll(".slide");
let activeSlide = 0;

function advanceSlides(count) {
  if (!count) {
    count = 1;
  }
  activeSlide = activeSlide + count;
  if (activeSlide == slides.length) {
    activeSlide = 0;
  }
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  showSlide(activeSlide);
}

function showSlide(slideIndex) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    // btns[i].classList.remove("active");
  }
  // btns[slideIndex].classList.add("active");
  slides[slideIndex].classList.add("active");

}

var fwdClick = function(evt) {
  if (intervalId) {
    window.clearInterval(intervalId);
  }
  advanceSlides();
};

var backClick = function(evt) {
  if (intervalId) {
    window.clearInterval(intervalId);
  }
  advanceSlides(-1);
};
//start slider
var intervalId = window.setInterval(advanceSlides, 3000);

// ----------- CAROUSEL ENDS HERE ----------------//

