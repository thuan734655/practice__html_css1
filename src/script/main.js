//header
var header__button__left = document.querySelector(".right-content--btnleft");
var header__button__right = document.querySelector(".right-content--btnRight");
var btnLeft_text = document.querySelector(".btnleft--text");
var btnRight_text = document.querySelector(".btnRight--text");

header__button__left.addEventListener("mouseenter", function (event) {
  header__button__left.style.backgroundColor = "rgba(93, 80, 198, 1)";
  btnLeft_text.style.color = "rgba(238, 238, 238, 1)";

  btnRight_text.style.color = "rgba(34, 40, 49, 1)";
  header__button__right.style.backgroundColor = "white";
});

header__button__left.addEventListener("mouseleave", function (event) {
  header__button__left.style.backgroundColor = "white";
  btnLeft_text.style.color = "rgba(34, 40, 49, 1)";
  btnRight_text.style.color = "rgba(238, 238, 238, 1)";
  header__button__right.style.backgroundColor = "rgba(93, 80, 198, 1)";
  
});
document.addEventListener("DOMContentLoaded", function() {
  var animatedElements = [
    ".section-services__content--left",
    ".section-services__content--right",
    ".section-destination__content--top",
    ".section-destination__content--bottom",
    ".top-content--right",
    ".section-travelPoint__content--right",
    ".section-travelPoint__content--left",
    ".section-keyFeatures__container--left",
    ".section-keyFeatures__container--right"
  ];
  animatedElements.forEach(function(elementClass) {
    var animatedElement = document.querySelector(elementClass);
    setAnimate(animatedElement);
  });
});


var setAnimate = (animatedElement)=> {
  window.addEventListener("scroll", function() {
     // tra ve khoang cach tu top cua phan tu toi viewport
    var elementTop = animatedElement.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (elementTop < windowHeight * 0.85) {
        animatedElement.classList.add("slide-up");
    }
});
}
