const userName = document.getElementById('userName'),
      userEmail = document.getElementById('userEmail'),
      userText = document.getElementById('userText'),
      popUp_thanks = document.querySelector('.popUp-thanks')
      formBtn = document.querySelector('.form-submit');

formBtn.addEventListener('click', () => {
checkInputs();
const userNameSuc =  userName.nextElementSibling.classList,
      userEmailSuc =  userEmail.nextElementSibling.classList,
      userTextSuc =  userText.nextElementSibling.classList;

if(userNameSuc == 'success' && userEmailSuc == 'success' && userTextSuc == 'success') {
  // formBtn.type = 'submit'
  popUp_thanks.classList.remove('d-none')
}
})

function checkInputs() {
const userNameVal = userName.value.trim(),
      userEmailVal = userEmail.value.trim(),
      userTextVal = userText.value.trim();

  if(userNameVal == '' || userName.value.length < 2) {
    setError(userName)
  } else {
    setSuccess(userName)
  }

  if(userEmailVal === '') {
    setError(userEmail)
  }
  else if(!isEmail(userEmailVal)) {
    setError(userEmail)
  }
   else {
    setSuccess(userEmail)
  }

  if(userTextVal == '' || userText.value.length < 5) {
    setError(userText)
  } else {
    setSuccess(userText)
  }

}

function setSuccess(input) {
  input.style.borderColor = '#37acd5'
  let small = input.nextElementSibling;
  small.classList.add('success');
  small.classList.remove('error');
}
  
  function setError(input) {
  input.style.borderColor = 'red'
  let small = input.nextElementSibling;
  small.classList.add('error');
  small.classList.remove('success');
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
