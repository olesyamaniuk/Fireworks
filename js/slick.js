$(function () {
  $(".w-w-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-w-gallery-list-left",
    nextArrow: ".w-w-gallery-list-right",
  });
});

$(function () {
  $(".w-w-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-w-reviews-list-left",
    nextArrow: ".w-w-reviews-list-right",
  });
});
