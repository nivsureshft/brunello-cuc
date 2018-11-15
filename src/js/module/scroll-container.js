import scrollMonitor from 'scrollmonitor'
const pageContainer = document.querySelector('.m-page-container')
const textOne = document.querySelector('.scroll-window.-one .scroll-window-content')
const textOneWatcher = scrollMonitor.create(textOne)

const textTwo = document.querySelector('.scroll-window.-two .scroll-window-content')
const textTwoWatcher = scrollMonitor.create(textTwo)

const textThree = document.querySelector('.scroll-window.-three .scroll-window-content')
const textThreeWatcher = scrollMonitor.create(textThree)

const textFour = document.querySelector('.scroll-window.-four .scroll-window-content')
const textFourWatcher = scrollMonitor.create(textFour)

textOneWatcher.enterViewport(function() {
  console.log('I have entered the viewport')
})

textOneWatcher.exitViewport(function() {
  console.log('I have left the viewport')
})

textOneWatcher.fullyEnterViewport(function() {
  console.log('fully')
})

textTwoWatcher.enterViewport(function() {
  console.log('I have entered the viewport2')
})
textTwoWatcher.exitViewport(function() {
  pageContainer.classList.remove('-darken')
})

textTwoWatcher.fullyEnterViewport(function() {
  pageContainer.classList.add('-darken')
})

textThreeWatcher.enterViewport(function() {
  pageContainer.classList.remove('-darken')
})
textThreeWatcher.exitViewport(function() {
  pageContainer.classList.remove('-secondImg')
})

textThreeWatcher.fullyEnterViewport(function() {
  pageContainer.classList.add('-secondImg')
  pageContainer.classList.remove('-darken')
})

textFourWatcher.enterViewport(function() {
  console.log('I have entered the viewport2')
})
textFourWatcher.exitViewport(function() {
  pageContainer.classList.remove('-secondImg')
})

textFourWatcher.fullyEnterViewport(function() {
  pageContainer.classList.add('-secondImg', '-darken')
})
