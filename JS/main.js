$(document).ready(function () {
  /*scroll */
  const $header = $("header");
  const $toggle = $("#toggle");
  const $menuUl = $("#menuList>ul");

  function pcHeader() {
    $(window).scrollTop() > 0
      ? $header.addClass("active")
      : $header.removeClass("active");

    $("header").mouseenter(function () {
      $header.addClass("active");
    });

    $("header").mouseleave(function () {
      $(window).scrollTop() > 0
        ? $header.addClass("active")
        : $header.removeClass("active");
    });

    /*sub */
    $("#menuList>ul>li").mouseenter(function () {
      if ($(this).children(".sub_menu").length > 0) {
        $(this).children(".sub_menu").slideDown();
        $menuUl.addClass("block");
      }
    });

    $("#menuList>ul>li").mouseleave(function () {
      if ($(this).children(".sub_menu").length > 0) {
        $(this).children(".sub_menu").slideUp();
        $menuUl.removeClass("block");
      }
    });
  }

  function mobileHeader() {
    if ($menuUl.hasClass("block")) {
      $header.addClass("active");
    } else {
      $(window).scrollTop() > 0
        ? $header.addClass("active")
        : $header.removeClass("active");
    }

    /*sub */
    $("#menuList>ul>li").mouseenter(function (e) {
      if ($(this).children(".sub_menu").length > 0) {
        $(this).children(".sub_menu").slideDown();
      }
    });

    $("#menuList>ul>li").mouseleave(function (e) {
      if ($(this).children(".sub_menu").length > 0) {
        $(this).children(".sub_menu").slideUp();
      }
    });
  }

  function activeHeader() {
    if ($(window).width() >= 875) {
      pcHeader();
    } else {
      mobileHeader();
    }
  }

  // 모바일 메뉴 토글 이벤트 (checkHeaderState 외부)
  $toggle.on("click", function () {
    // 메뉴 표시/숨김 토글
    $menuUl.toggleClass("block");
    mobileHeader();
  });

  // 스크롤 이벤트 핸들러를 한 번만 연결
  $(window).on("scroll", activeHeader);

  // 크기 조정 이벤트 핸들러를 한 번만 연결
  $(window).on("resize", function () {
    activeHeader();
  });

  // 초기 상태 확인
  activeHeader();

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
      delay: 2300,
    },
  });
});
