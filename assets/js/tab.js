$(document).ready(function() {
    $('.tab-item').hide();
    $('.tab-item:first-child').show();
    $('.tab-btn').click(function() {
      let pageInfo = $(this).attr('data-tab');
      $('.tab-item').hide();
      $('.' + pageInfo).show();
    })
});

const tab_active = document.querySelector('.tab-active');
const tab_btns = document.querySelectorAll('.tab-btn');

tab_active.addEventListener('click', () => {
  tab_active.parentElement.classList.toggle('showBtns');
});

tab_btns.forEach(btn => {
  btn.addEventListener('click', () => {
    tab_active.children[0].textContent = btn.children[1].textContent
    tab_active.parentElement.classList.remove('showBtns');
  })
})