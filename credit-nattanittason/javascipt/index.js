$('.slick--slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    nextArrow: '<button type="button" class="slick-next btn"> <i class="fas fa-chevron-right"></i> </button>',
    prevArrow: '<button type="button" class="slick-prev btn"> <i class="fas fa-chevron-left"></i> </button>',
});

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        // navbar_height = document.querySelector('.navbar').offsetHeight;
        // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        // remove padding top from body
        document.body.style.paddingTop = '0';
      }
    });
  });