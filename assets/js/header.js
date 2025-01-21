const menu = document.querySelector('.menu'),
      menuBtn = document.querySelector('.menu-btn'),
      body = document.querySelector('body');


menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('clickedMenu')
    menu.classList.toggle('d-none');
    body.classList.toggle('bodyStopScroll');
});


