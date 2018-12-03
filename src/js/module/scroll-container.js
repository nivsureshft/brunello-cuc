import scrollMonitor from 'scrollmonitor'
import _ from 'lodash'
import {isDesktop} from 'util/breakpoints'

let textOne = document.querySelector('.scroll-window.-one .scroll-window-content')

window.onbeforeunload = function () {
/*  window.scrollTo(0, 0)
  textOne.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'})*/
}

let scrollPos = 0
let isScrollDown = false
const docBody = document.querySelector('.document-body')
console.log(docBody)

window.addEventListener('scroll', _.throttle((e) => {
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
    isScrollDown = false
  } else {
    isScrollDown = true
  }
  // saves the new position for iteration.
  scrollPos = (document.body.getBoundingClientRect()).top
}, 500))

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

const textNine = document.querySelector('.scroll-window.-nine .scroll-window-content')
const textNineWatcher = scrollMonitor.create(textNine)

const textTen = document.querySelector('.scroll-window.-ten .scroll-window-content')
const textTenWatcher = scrollMonitor.create(textTen)

/* Banner scroll button  */
const heroBannerScroll = document.querySelector('.scroll-window__btn')
heroBannerScroll.addEventListener('click', (e) => {
  e.preventDefault()
  textTwo.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'})
})

/* TextOne */
textOneWatcher.enterViewport(function () {
  pageContainer.classList.remove('-two', '-three', '-four', '-five', '-six', '-seven', '-eight', '-nine', '-darken')
  pageContainer.classList.add('-one')
})

textOneWatcher.exitViewport(function () {
})

textOneWatcher.fullyEnterViewport(function () {
  pageContainer.classList.remove('-two', '-three', '-four', '-five', '-six', '-seven', '-eight', '-nine')
  pageContainer.classList.add('-one')
})

/* TextTwo */
textTwoWatcher.enterViewport(function () {
  pageContainer.classList.add('-darken', '-one')
  pageContainer.classList.remove('-two', '-three', '-four', '-five', '-six', '-seven', '-eight', '-nine')
})

textTwoWatcher.exitViewport(function () {
  if (textThreeWatcher.isInViewport) {
    pageContainer.classList.add('-two')
    pageContainer.classList.remove('-one', '-darken')
  }
})

textTwoWatcher.fullyEnterViewport(function () {
})

textThreeWatcher.enterViewport(function () {
  pageContainer.classList.add('-two')
  pageContainer.classList.remove('-one', '-three', '-four', '-five', '-six', '-seven', '-eight', '-nine')
})

textThreeWatcher.exitViewport(function () {

})

textThreeWatcher.fullyEnterViewport(function () {

})

textFourWatcher.enterViewport(function () {
  pageContainer.classList.add('-three')
  pageContainer.classList.remove('-one', '-two', '-four', '-five', '-six', '-seven', '-eight', '-nine')
})
textFourWatcher.exitViewport(function () {

})

textFourWatcher.fullyEnterViewport(function () {
})

textFiveWatcher.enterViewport(function () {
  pageContainer.classList.add('-four')
  pageContainer.classList.remove('-one', '-two', '-three', '-five', '-six', '-seven', '-eight', '-nine', '-darken')
})

textFiveWatcher.exitViewport(function () {
})

textFiveWatcher.fullyEnterViewport(function () {
})

textSixWatcher.enterViewport(function () {
  pageContainer.classList.add('-five')
  pageContainer.classList.remove('-one', '-two', '-three', '-four', '-six', '-seven', '-eight', '-nine', '-darken')
})
textSixWatcher.exitViewport(function () {

})

textSixWatcher.fullyEnterViewport(function () {
})

textSevenWatcher.enterViewport(function () {
  pageContainer.classList.add('-six')
  pageContainer.classList.remove('-one', '-two', '-three', '-four', '-five', '-seven', '-eight', '-nine', '-darken')
})
textSevenWatcher.exitViewport(function () {

})

textSevenWatcher.fullyEnterViewport(function () {
})

textEightWatcher.enterViewport(function () {
  pageContainer.classList.add('-seven')
  pageContainer.classList.remove('-one', '-two', '-three', '-four', '-five', '-six', '-eight', '-nine', '-darken')
})

textEightWatcher.exitViewport(function () {

})

textEightWatcher.fullyEnterViewport(function () {

})

textNineWatcher.enterViewport(function () {
  pageContainer.classList.add('-eight', '-darken')
  pageContainer.classList.remove('-one', '-two', '-three', '-four', '-five', '-six', '-seven', '-nine')
})

textNineWatcher.exitViewport(function () {

})
textNineWatcher.fullyEnterViewport(function () {

})
textTenWatcher.enterViewport(function () {
  pageContainer.classList.add('-nine')
  pageContainer.classList.remove('-one', '-two', '-three', '-four', '-five', '-six', '-seven', '-eight', '-darken')
})

textTenWatcher.exitViewport(function () {

})
textTenWatcher.fullyEnterViewport(function () {

})

const toolTipContainer = document.querySelector('.tooltip-info')
const toolTipImg = toolTipContainer.querySelector('img')

console.log(toolTipImg)

toolTipContainer.addEventListener('click', (e) => {
  console.log('sdnjas')
  toolTipContainer.classList.toggle('-hover')
})

const scrollTop = document.querySelector('.footer-navigate-top')
scrollTop.addEventListener('click', (e) => {
  e.preventDefault()
  textOne.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'})
})
