import scrollMonitor from 'scrollmonitor'
import _ from 'lodash'

let textOne = document.querySelector('.scroll-window.-one .scroll-window-content')

window.onbeforeunload = function () {
  window.scrollTo(0, 0)
  textOne.scrollIntoView({behavior: 'instant', block: 'center', inline: 'nearest'})
}

const pageContainer = document.querySelector('.m-page-container')
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

const textEight = document.querySelector('.scroll-window.-eight .scroll-window-content')
const textEightWatcher = scrollMonitor.create(textEight)

/* Banner scroll button  */
const heroBannerScroll = document.querySelector('.scroll-window__btn')
heroBannerScroll.addEventListener('click', (e) => {
  e.preventDefault()
  textTwo.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'})
})

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

  if (isScrollDown) {
    pageContainer.classList.add('-white')
  }
})

textTwoWatcher.fullyEnterViewport(function () {
  pageContainer.classList.add('-darken')
  pageContainer.classList.remove('-secondImg')
})

/* TextThree */
textThreeWatcher.enterViewport(function () {
  pageContainer.classList.remove('-darken', '-white')
})
textThreeWatcher.exitViewport(function () {
})

textThreeWatcher.fullyEnterViewport(function () {
  pageContainer.classList.add('-white')
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
  if (!isScrollDown) {
    pageContainer.classList.remove('-white')
    pageContainer.classList.add('-secondImg')
  }
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

/* TextSeven */
textSevenWatcher.enterViewport(function () {
})
textSevenWatcher.exitViewport(function () {

})
textSevenWatcher.fullyEnterViewport(function () {
  pageContainer.classList.remove('-final', '-darken')
})

/* TextEight */
textEightWatcher.enterViewport(function () {

})

textEightWatcher.exitViewport(function () {
  if (!isScrollDown) {
    pageContainer.classList.remove('-final', '-darken')
  }
})
textEightWatcher.fullyEnterViewport(function () {
  pageContainer.classList.add('-final', '-darken')
})
