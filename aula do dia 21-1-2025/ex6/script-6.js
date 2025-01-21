
const oneobservador = new IntersectionObserver((entries) => {
  entries.forEach( (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll('.one_hidden')
elements.forEach((element)=> oneobservador.observe(element))

const two_elements = document.querySelectorAll('.two_hidden')
two_elements.forEach((element)=> oneobservador.observe(element))

const three_elements = document.querySelectorAll('.three_hidden')
three_elements.forEach((element)=> oneobservador.observe(element))

const four_elements = document.querySelectorAll('.four_hidden')
four_elements.forEach((element)=> oneobservador.observe(element))

const five_elements = document.querySelectorAll('.five_hidden')
five_elements.forEach((element)=> oneobservador.observe(element))

