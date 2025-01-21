const review = new Swiper('.swiper-review', {
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.review-next',
        prevEl: '.review-prev',
      },
      pagination: {
        el: '.review-pagination',
        clickable: 'true',
    },
    breakpoints: {
        0: {
          slidesPerView: 1.4,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.8,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1320: {
            spaceBetween: 30,
            slidesPerView: 5,
        },
  }
  });

//   review
const reviews = document.querySelectorAll('.review')

let count = 0;
reviews.forEach(review => {
    review.addEventListener('click', () => {
        if(count == 0) {
            review.children[0].play()
            review.children[0].setAttribute('controls' , '');
            review.classList.add('view-video')
            return count = 1
        } else {
            review.children[0].pause()
            review.children[0].removeAttribute('controls' , '');
            review.classList.remove('view-video')
            return count = 0
        }
    })
})