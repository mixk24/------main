var swiper = new Swiper('.slide-intro', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

var swiper = new Swiper('.slide-eft .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
})
document.addEventListener('scroll', function() {
  var scrollPos = window.scrollY;
  var section = document.querySelector('.scroll-section');
  var topImage = section.querySelector('.top-image');
  var bottomImage = section.querySelector('.bottom-image');
  
  if (scrollPos > 0) {
    topImage.style.opacity = 0;
  } else {
    topImage.style.opacity = 1;
  }
});

function showSlides(sectionId) {
  var slideIndex = 0;
  var section = document.getElementById(sectionId);
  var slides = section.getElementsByClassName("mySlides");
  
  function displaySlide() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(displaySlide, 1000);
  }
  displaySlide();
}

// 각 섹션의 슬라이드 쇼를 초기화
showSlides('section1');
showSlides('section2');
showSlides('section3');
showSlides('section4');
