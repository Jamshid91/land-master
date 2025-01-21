const slider1 = new Swiper('.slider1', {
    loop: true,
    navigation: {
        nextEl: '.slider1-next',
        prevEl: '.slider1-prev',
      },
      pagination: {
        el: '.slider1-pagination',
        clickable: 'true',
    },
  });

  const slider2 = new Swiper('.slider2', {
    loop: true,
    navigation: {
        nextEl: '.slider2-next',
        prevEl: '.slider2-prev',
      },
      pagination: {
        el: '.slider2-pagination',
        clickable: 'true',
    },
  });

  const slider3 = new Swiper('.slider3', {
    loop: true,
    navigation: {
        nextEl: '.slider3-next',
        prevEl: '.slider3-prev',
      },
      pagination: {
        el: '.slider3-pagination',
        clickable: 'true',
    },
  });

  $(document).ready(function() {
    $('.sliders').hide();
    $('.sliders:first-child').show();
    $('.zoom-btn').click(function() {
    $('.block20-sliders').removeClass('d-none')
      let pageInfo = $(this).attr('data-slide');
      $('.sliders').hide();
      $('.' + pageInfo).show();
    })

    $('.sliders-close').click(function() {
        $('.block20-sliders').addClass('d-none')
    })
  });