// Start form code
const userPhone = document.getElementById('userPhone'),
      popUp_thanks = document.querySelector('.popUp-thanks')
      formBtn = document.querySelector('.form-submit');


formBtn.addEventListener('click', () => {
checkInputCalc();
const userPhoneSuc =  userPhone.nextElementSibling.classList

if(userPhoneSuc == 'success') {
  // formBtn.type = 'submit'
  popUp_thanks.classList.remove('d-none');
}
})

function checkInputCalc() {
const userPhoneVal = userPhone.value.trim();

if(userPhoneVal == '' || userPhone.value.substr(-1) === '_') {
  setError(userPhone)
} else {
  setSuccess(userPhone)
}

}

function setSuccess(input) {
input.style.borderColor = '#37acd5'
input.nextElementSibling.classList.add('success')
}

function setError(input) {
input.style.borderColor = 'red'
}
 
  
// input mask
  $("#userPhone").inputmask({"mask": "+7(999) 999-99-99"});