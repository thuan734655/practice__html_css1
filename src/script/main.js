//header
var header__button__left = document.querySelector(".right-content--btnleft");
var header__button__right = document.querySelector(".right-content--btnRight");
var btnLeft_text = document.querySelector(".btnleft--text");
var btnRight_text = document.querySelector(".btnRight--text");

header__button__left.addEventListener("mouseenter", function (event) {
  header__button__left.style.backgroundColor = "rgba(93, 80, 198, 1)";
  btnLeft_text.style.color = "rgba(238, 238, 238, 1)";
  header__button__left.style.boxShadow = "0 2px 3px 1px rgb(90, 25, 241)";

  btnRight_text.style.color = "rgba(34, 40, 49, 1)";
  header__button__right.style.backgroundColor = "white";
});

header__button__left.addEventListener("mouseleave", function (event) {
  header__button__left.style.backgroundColor = "white";
  btnLeft_text.style.color = "rgba(34, 40, 49, 1)";
  btnRight_text.style.color = "rgba(238, 238, 238, 1)";
  header__button__right.style.backgroundColor = "rgba(93, 80, 198, 1)";
  header__button__left.style.boxShadow = "none";
});
