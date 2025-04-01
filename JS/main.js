$(document).ready(function () {
  /*스크롤 */
  const $header = $("header");
  const $toggle = $("#toggle");
  const $menuUl = $("#menuList>ul");

  /*PC */
  function pcHeader() {
    $(window).scrollTop() > 0
      ? $header.addClass("active")
      : $header.removeClass("active");

    $("header").mouseenter(function (e) {
      e.preventDefault();
      $header.addClass("active");
    });

    $("header").mouseleave(function (e) {
      e.preventDefault();
      $(window).scrollTop() > 0
        ? $header.addClass("active")
        : $header.removeClass("active");
    });

    /*서브메뉴 */
    $("#menuList>ul>li").off("mouseenter mouseleave"); // 이전 이벤트 핸들러 제거

    $("#menuList>ul>li").mouseenter(function (e) {
      e.preventDefault();
      if ($(this).children(".sub_menu").length > 0) {
        $("#menuList>ul>li .sub_menu").hide(); // 다른 모든 서브메뉴 먼저 숨기기
        $(this).children(".sub_menu").css("display", "block");
        $menuUl.addClass("block");
      }
    });

    $("#menuList>ul>li").mouseleave(function (e) {
      e.preventDefault();
      if ($(this).children(".sub_menu").length > 0) {
        $(this).children(".sub_menu").css("display", "none");
        // 서브메뉴가 있는 다른 메뉴 항목 위에 호버 중이 아닐 때만 block 클래스 제거
        if (
          !$("#menuList>ul>li:hover").length ||
          !$("#menuList>ul>li:hover").children(".sub_menu").length
        ) {
          $menuUl.removeClass("block");
        }
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

    /*서브메뉴 */
    $("#menuList>ul>li").off("mouseenter mouseleave"); // 이전 이벤트 핸들러 제거

    $("#menuList>ul>li").mouseenter(function (e) {
      e.preventDefault();
      if ($(this).children(".sub_menu").length > 0) {
        $(this).children(".sub_menu").stop().slideDown();
      }
    });

    $("#menuList>ul>li").mouseleave(function (e) {
      e.preventDefault();
      if ($(this).children(".sub_menu").length > 0) {
        $(this).children(".sub_menu").stop().slideUp();
      }
    });
  }

  function activeHeader() {
    // 이벤트 핸들러 중복을 방지하기 위해 먼저 모든 이벤트 핸들러 제거
    $("header").off("mouseenter mouseleave");
    $("#menuList>ul>li").off("mouseenter mouseleave");

    if ($(window).width() >= 875) {
      pcHeader();
    } else {
      mobileHeader();
    }
  }

  // 모바일 메뉴 토글 이벤트
  $toggle.on("click", function () {
    // 메뉴 표시/숨김 토글
    $menuUl.toggleClass("block");
    mobileHeader();
  });

  // 스크롤 이벤트 핸들러를 한 번만 연결
  $(window).on("scroll", activeHeader);

  // 크기 조정 이벤트 핸들러를 한 번만 연결
  $(window).on("resize", activeHeader);

  // 초기 상태 확인
  activeHeader();

  /*스와이프 */
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 2,
    breakpoints: {
      // 화면 너비가 768px 이상일 때
      768: {
        slidesPerView: 3, // PC 모드에서 3개로 변경
      },
      1200: {
        slidesPerView: 4,
      },
    },
    spaceBetween: 20,
    autoplay: {
      delay: 2300,
    },
  });
});
