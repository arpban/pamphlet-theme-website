"use strict";function goback(){1==window.history.length?window.location.href="/":window.history.back()}var slides=document.querySelectorAll(".slide"),activeSlide=0;function advanceSlides(e){e||(e=1),(activeSlide+=e)==slides.length&&(activeSlide=0),activeSlide<0&&(activeSlide=slides.length-1),showSlide(activeSlide)}function showSlide(e){for(var i=0;i<slides.length;i++)slides[i].classList.remove("active");slides[e].classList.add("active")}var fwdClick=function(e){intervalId&&window.clearInterval(intervalId),advanceSlides()},backClick=function(e){intervalId&&window.clearInterval(intervalId),advanceSlides(-1)},intervalId=window.setInterval(advanceSlides,3e3);