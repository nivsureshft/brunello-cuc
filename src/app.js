import 'babel-polyfill'
import 'polyfill/customEvent'

// =utils
import 'util/breakpoints'
import 'util/detectTouch'

// =layout
// if (document.querySelector('.header')) {
//   import(/* webpackChunkName: "header" */ 'layout/header')
// }

// =modules
if (document.querySelector('.m-page-container')) {
  import(/* webpackChunkName: "scrollingWindow" */ 'module/scroll-container')
}

// =blocks
// if (document.querySelector('.m-blockname')) {
//   import(/* webpackChunkName: "blockName" */ 'block/blockName')
// }

// =pages
// if (document.querySelector('.page-specific')) {
//   import(/* webpackChunkName: "pageSpecific" */ 'page/pageSpecific')
// }
