import scrollMonitor from 'scrollmonitor'
import _ from 'lodash'

window.onbeforeunload = function () {
  window.scrollTo(0, 0)
  alert()
}

const pageContainer = document.querySelector('.m-page-container')
const textOne = document.querySelector('.scroll-window.-one .scroll-window-content')
const textOneWatcher = scrollMonitor.create(textOne)

const textTwo = document.querySelector('.scroll-window.-two .scroll-window-content')
const textTwoWatcher = scrollMonitor.create(textTwo)

const textThree = document.querySelector('.scroll-window.-three .scroll-window-content')
const textThreeWatcher = scrollMonitor.create(textThree)

const textFour = document.querySelector('.scroll-window.-four .scroll-window-content')
const textFourWatcher = scrollMonitor.create(textFour)

const textFive = document.querySelector('.scroll-window.-five .scroll-window-content')
const textFiveWatcher = scrollMonitor.create(textFive)

const textSix = document.querySelector('.scroll-window.-six .scroll-window-content')
const textSixWatcher = scrollMonitor.create(textSix)

const textSeven = document.querySelector('.scroll-window.-seven .scroll-window-content')
const textSevenWatcher = scrollMonitor.create(textSeven)

let scrollPos = 0
let isScrollDown = false

window.addEventListener('scroll', _.throttle((e) => {
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
    console.log('up')
    isScrollDown = false
  } else {
    console.log('down')
    isScrollDown = true
  }
  // saves the new position for iteration.
  scrollPos = (document.body.getBoundingClientRect()).top
}, 500))

/* TextOne */
textOneWatcher.enterViewport(function () {
  console.log('I have entered the viewport')
})

textOneWatcher.exitViewport(function () {
  console.log('I have left the viewport')
})

textOneWatcher.fullyEnterViewport(function () {
  console.log('fully')
})

/* TextTwo */
textTwoWatcher.enterViewport(function () {
  console.log('I have entered the viewport2')
})
textTwoWatcher.exitViewport(function () {
  pageContainer.classList.remove('-darken')
})

textTwoWatcher.fullyEnterViewport(function () {
  pageContainer.classList.add('-darken')
  pageContainer.classList.remove('-secondImg')
  console.log(isScrollDown)
})

/* TextThree */
textThreeWatcher.enterViewport(function () {
  pageContainer.classList.remove('-darken')
})
textThreeWatcher.exitViewport(function () {
})

textThreeWatcher.fullyEnterViewport(function () {
  pageContainer.classList.add('-secondImg')
  pageContainer.classList.remove('-darken')
})

/* TextFour */
textFourWatcher.enterViewport(function () {
  console.log('I have entered the viewport2')
})
textFourWatcher.exitViewport(function () {
  if (isScrollDown) {
    pageContainer.classList.remove('-secondImg', '-darken')
    pageContainer.classList.add('-white')
  }
})

textFourWatcher.fullyEnterViewport(function () {
  pageContainer.classList.add('-darken')
  pageContainer.classList.remove('-white')
})

/* TextFive */
textFiveWatcher.enterViewport(function () {
  console.log('I have entered the viewport2')
})
textFiveWatcher.exitViewport(function () {
})

textFiveWatcher.fullyEnterViewport(function () {
  pageContainer.classList.add('-white')
  pageContainer.classList.remove('-darken')
})

/* TextSix */
textSixWatcher.enterViewport(function () {
})
textSixWatcher.exitViewport(function () {
  if (!isScrollDown) {
    pageContainer.classList.remove('-thirdImg')
    pageContainer.classList.add('-white')
  } else {
    pageContainer.classList.remove('-thirdImg')
    pageContainer.classList.add('-white')
  }
})
textSixWatcher.fullyEnterViewport(function () {
  pageContainer.classList.remove('-white')
  pageContainer.classList.add('-thirdImg')
})

/* TextSix */
textSevenWatcher.enterViewport(function () {
})
textSevenWatcher.exitViewport(function () {

})
textSevenWatcher.fullyEnterViewport(function () {

})
