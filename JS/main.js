$(document).ready(function () {
  var headerHeight = $("header").height();

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > headerHeight) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
});
