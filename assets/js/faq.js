const faqs = document.querySelectorAll('.faq-head');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.parentElement.classList.toggle('showFaq')
  })
})