$(document).ready(function () {
  /*scroll */
  var headerHeight = $("header").height();

  $(window).on("scroll", function () {
    var windowWidth = $(window).width();
    var scrollTop = $(window).scrollTop();

    // PC 모드일 때
    if (windowWidth > 875) {
      if (scrollTop > headerHeight) {
        $("header").addClass("active");
      } else {
        $("header").removeClass("active");
      }
    }
    // 모바일 모드일 때
    else {
      // ul이 보여지고 있다면 무조건 active
      if ($("nav #menuList ul").is(":visible")) {
        $("header").addClass("active");
      }
      // ul이 안 보이면 PC와 같이 헤더 높이에 따라 active 처리
      else {
        if (scrollTop > headerHeight) {
          $("header").addClass("active");
        } else {
          $("header").removeClass("active");
        }
      }
    }
  });

  /*toggle */
  $("#toggle").on("click", function (e) {
    e.preventDefault();
    // 모바일일 때
    if ($(window).width() <= 875) {
      // 제일 상단에 있을 때
      if ($(window).scrollTop() === 0) {
        $("header").addClass("active");
      }
    }
    $("nav #menuList ul").slideToggle();
  });

  /*swipe */
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 2,
    breakpoints: {
      // 화면 너비가 768px 이상일 때
      875: {
        slidesPerView: 3, // PC 모드에서 3개로 변경
      },
    },
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
    },
  });
});
