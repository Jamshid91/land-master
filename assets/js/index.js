const  odometer1 = document.querySelector('.odometer1'),
odometer2 = document.querySelector('.odometer2'),
odometer3 = document.querySelector('.odometer3'),
odometer4 = document.querySelector('.odometer4'),
odometer5 = document.querySelector('.odometer5');

function addAdometer() {
setTimeout(() => {
odometer1.innerHTML = 3458
odometer2.innerHTML = 24
odometer3.innerHTML = 73
}, 500);
}

function addAdometerTwo() {
setTimeout(() => {
  odometer4.innerHTML = 24
  odometer5.innerHTML = 487
}, 500);
}

window.addEventListener('scroll', () => {
const positionOdometer = odometer1.getBoundingClientRect().top;
const positionOdometer4 = odometer4.getBoundingClientRect().top;

const screenPosition = window.innerHeight;

if(screenPosition > positionOdometer) {
   addAdometer()
}
if(screenPosition > positionOdometer4) {
  addAdometerTwo()
   }
});

const od1 = new Odometer({
  el: document.querySelector(".odometer1"),
  format: '( ddd ),dd',
  duration: 1000,
  theme: "default"
});

const od = new Odometer({
  el: document.querySelector(".odometer5"),
  format: "(d,dd).dd",
  duration: 3000,
  theme: "default"
});



// faqs home
$('.faq-head').parent().click(function() {
  $(this).siblings().removeClass('showFaq');
  $(this).toggleClass('showFaq');
});