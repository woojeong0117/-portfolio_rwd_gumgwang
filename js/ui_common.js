$(function () {
  // pc gnb
  $('#header .gnb').on('mouseenter', function () {
    $('#header').addClass('on');
  });
  $('#header .inner').on('mouseleave', function () {
    $('#header').removeClass('on');
  });

  // 모바일, 태블릿 gnb
  $('#header .btn_open').on('click', function () {
    $('#header .gnb_area').addClass('on');
    $('body').addClass('on');
  });
  $('#header .m_gnb>li>a').on('click', function (e) {
    e.preventDefault();
    if (!$(this).next().is(':visible')) {
      $(this).addClass('on').parent().siblings().find('>a').removeClass('on');
      $(this).next().slideDown().parent().siblings().find('.depth02').slideUp();
      $(this).find('i').attr('class', 'fa-solid fa-minus');
      $(this).parent().siblings().find('i').attr('class', 'fa-solid fa-plus');
    } else {
      $(this).removeClass('on');
      $(this).next().slideUp();
      $(this).find('i').attr('class', 'fa-solid fa-plus');
    }
  });

  $('#header .gnb_area .btn_close').on('click', function () {
    $('#header .gnb_area').removeClass('on');
    $('body').removeClass('on');
  });

  // 메인슬라이더
  function customMainSlider() {
    var mainSlider = new Swiper('.main_slider .swiper-container', {
      loop: true,
      effect: 'fade',
      speed: 700,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
    });

    function getRealIndex() {
      var idx = mainSlider.realIndex + 1;
      idx = idx < 10 ? '0' + idx : idx;

      $('.main_slider .current').text(idx);
    }
    getRealIndex();
    mainSlider.on('slideChange', getRealIndex);
  }
  customMainSlider();

  // 메인 프로젝트 슬라이드
  var projectSlider = new Swiper('.main_project .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 700,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 'auto',
      },
    },
  });

  // 메인 뉴스 슬라이드
  var newsSlider = new Swiper('.main_news .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 12,
    speed: 700,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      767: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
    },
  });

  // 메인 배너 슬라이드
  var bannerSlider = new Swiper('.main_banner .swiper-container', {
    loop: true,
    speed: 700,
    slidesPerView: 5,
    spaceBetween: 100,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 80,
      },

      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  // 패밀리사이트
  $('#footer .family_wrap').on('click', function (e) {
    e.preventDefault();
    $(this).find('.family').slideToggle();
  });

  // 푸터탑버튼
  $('#footer .top_wrap .btn_top').on('click', function (e) {
    e.preventDefault();
    $('body, html').animate({ scrollTop: 0 }, 500);
  });
});
