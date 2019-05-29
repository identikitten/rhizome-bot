// this is the data for holding which page we're on
let pageNumber = 0

// have the content for these pages
const pages = [
  {copy: 'Figuras de la mujer para dejar de ser Mujer (n-1)', border: '#edc7a9', circle: '#3e78ed'},
  {copy: '"¿Qué era yo? Era lo que los demás me habían visto ser, y así me conocía yo. No supe decir lo que era. Pero al menos, quiero acordarme: ¿Qué estaba haciendo yo?"', border: '#faffb8', circle: '#b472e6' },
  {copy: '<img src="world.png" alt="mapamundi">', border: '#a1fffe', circle: '#e34a47'},
  {copy: '""', border: '#d3c7f3', circle: '#f7fe00'},
  {copy: '"Y yo he sacado de ti mismo el fuego que te ha devorado; te he reducido a ceniza sobre la tierra, a los ojos de todos los que te miraban. Todos los pueblos que te conocían están pasmados por ti. Eres un objeto de espanto, y has desaparecido para siempre." (Ez 28.12-19)', border: '#faffb8', circle: '#b472e6' },
  {copy: '"<a href="https://www.youtube.com/watch?v=U-pVz2LTakM" target="_blank">Como si alguien hubiera borroneado la partitura de Tristán de Wagner cuando la tinta aún estaba fresca.</a>"', border: '#faffb8', circle: '#b472e6'},
  {copy: '<img src="eva.png" alt="eva">', border: '#faffb8', circle: '#b472e6' },
  {copy: 'Lucifer: <br> Mostly the world is lava&rsquo;s rythm, / the impurities of darkness / sometimes called stars.', border: '#d3c7f3', circle: '#f7fe00'},
  {copy: 'But of two more: there we have likeness moving, / And there knowledge therefore, and therefore creed.', border: '#faffb8', circle: '#b472e6' },
  {copy: 'Eva mitocondrial <br> <img src="eva_mito.jpeg" alt="ADN mitocondrial vs ADN cromosomatico" height="300">', border: '#d3c7f3', circle: '#f70e56'},
  {copy: '<a href="https://www.youtube.com/watch?v=lb-LhVJszWE" target="_blank"><img src="invention.png" alt="first fragment of 4th Invention in D Minor by Bach"></a>', border: '#faffb8', circle: '#f978e9' },
  {copy: ' “Un ojo vigilaba mi vida, y ese ojo era probablemente lo que yo llamaba ora verdad, ora moral, ora ley humana, ora Dios, ora yo. Vivía yo de tal suerte dentro de un espejo. Dos minutos después de nacer había perdido ya mis orígenes”', border: '#d3c7f3', circle: '#d3c7f3'},
  {copy: '(Mujer-Eva, mujer-lilith = mujer-producción) <br><br> <img src="ocean.gif" alt="Animated gif of the ocean">', border: '#d3c7f3', circle: '#a1fffe'},
  {copy: '“Se trata no de imitación, sino de captura de código, plusvalía de código, aumento de valencia, verdadero devenir, devenir avispa (mujer) de la orquídea (Eva), devenir orquídea (Eva) de avispa (mujer).”', border: '#d3c7f3', circle: '#edc7a9'},
  {copy: '<img src="deleuze.png" alt="Deleuze saying: I never desire anything by itself" height="550">', border: '#faffb8', circle: '#caf9e6' },
  {copy: '“El horror será responsabilidad mía hasta que se complete la metamorfosis y el horror se transforme en luz. No la luz que nace de un deseo de belleza y moralismo, como antaño, cuando no sabía lo que me proponía; sino la luz natural de lo que existe, y es esta luz natural lo que me aterra.”', border: '#faffb8', circle: '#faffb8' },
  {copy: '<em>li-lith<em>: movimiento de torsión u objeto retorcido', border: '#faffb8', circle: '#b472e6' },
  {copy: '"Necesito ver libre de mí para ver."', border: '#faffb8', circle: '#e34a47'},
  {copy: 'Existencia doble.', border: '#faffb8', circle: '#a1fffe' },
  {copy: '“There is a good principle which created order, light, and man, and an evil principle which created chaos, darkness, and woman.”', border: '#faffb8', circle: '#a1fffe'},
  {copy: 'Figuras de la mujer para dejar de ser Mujer (n-1)', border: '#edc7a9', circle: '#3e78ed'},
]

// pick the relevant tags
const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')

// make a next function to increase the pageNumber
const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

// make a previous function to decrease the pageNumber
const previous = function() {
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

// pick a random slide
const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length)

  updateSection()
}

// this will update the section's content and style
const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

// on click of nextTag, run this
nextTag.addEventListener('click', function() {
  next()
})

// on click of previousTag, run this
previousTag.addEventListener('click', function() {
  previous()
})

// on click of randomTag, run this
randomTag.addEventListener('click', function() {
  random()
})

// when a user presses a key, check for arrow left or right
// and do next or prev correctly
document.addEventListener('keyup', function(event) {
  console.log(event)

  // if the key being pressed is ArrowRight
  if (event.key == 'ArrowRight') {
    next()
  }

  // if the key being pressed is ArrowLeft
  if (event.key == 'ArrowLeft') {
    previous()
  }
})
