$(function (){
    $('.header__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite:false,
    });
});

$(document).ready(function () {
    $(".header__burger").click(function (event) {
      $(".header__burger,.navigation__nav").toggleClass("active");
    });
  });
  