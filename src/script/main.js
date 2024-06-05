//header
var header__button__left = document.querySelector(".right-content--btnleft");
var header__button__right = document.querySelector(".right-content--btnRight");
var header__right__btnleft__link = document.querySelector(".btnleft--text");
var header__right__btnRight__link = document.querySelector(".btnRight--text");


header__button__left.addEventListener('mouseenter', function(event) {
    header__button__left.style.backgroundColor = 'rgba(93, 80, 198, 1)';
    header__right__btnleft__link.style.color = 'rgba(238, 238, 238, 1)';
    header__button__left.style.boxShadow = '0 2px 3px 1px rgb(90, 25, 241)';

    header__right__btnRight__link.style.color = 'rgba(34, 40, 49, 1)';
    header__button__right.style.backgroundColor = 'white';
    

  });

  header__button__left.addEventListener('mouseleave', function(event) {
   header__button__left.style.backgroundColor = 'white';
   header__right__btnleft__link.style.color = 'rgba(34, 40, 49, 1)';
   header__right__btnRight__link.style.color = 'rgba(238, 238, 238, 1)';
   header__button__right.style.backgroundColor = 'rgba(93, 80, 198, 1)';
   header__button__left.style.boxShadow = 'none';

  });


// @media screen and (max-width:431) 
var header_bottom_left_first_text = document.querySelector(".first-text");
const mediaQueryMobile = window.matchMedia('(max-width: 431px)');
function handleScreenChangeMobile(mediaQuery) {
    if (mediaQuery.matches) {
        header_bottom_left_first_text.innerHTML = 'Travel <span>top <br> destination</span> of the <br> world';
    }
    else {
header_bottom_left_first_text.innerHTML = 'Travel <span>top destination <br></span> of the world';
    }
}

// goi ham handleScreenChange khi screen changed size
handleScreenChangeMobile(mediaQueryMobile);
mediaQueryMobile.addListener(handleScreenChangeMobile);


// @media screen and (max-width:1025) 
const mediaQueryTablet = window.matchMedia('(max-width: 1025px)');
function handleScreenChangeTablet(mediaQueryTablet) {
    if (mediaQueryTablet.matches) {
        header_bottom_left_first_text.innerHTML = 'Travel <span>top destination <br></span> of the world';
    }
    else {
        header_bottom_left_first_text.innerHTML = 'Travel <span>top destination</span> of the world';
    }
}

// goi ham handleScreenChange khi screen changed size
handleScreenChangeTablet(mediaQueryTablet);
mediaQueryTablet.addListener(handleScreenChangeTablet);
