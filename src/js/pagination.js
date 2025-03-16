// Try to import InfiniteScroll if available
let InfiniteScroll;
try {
  InfiniteScroll = require('infinite-scroll');
} catch (e) {
  // InfiniteScroll is not available, we'll handle this below
}

(function (document) {
  // Check if InfiniteScroll is available
  if (typeof InfiniteScroll === 'undefined') {
    console.log('InfiniteScroll is not available, pagination disabled');
    return;
  }

  // Next link Element
  const nextElement = document.querySelector('link[rel=next]')
  if (!nextElement) return

  // Post Feed element
  const $feedElement = document.querySelector('.js-feed-entry')
  if (!$feedElement) return

  const $viewMoreButton = document.querySelector('.load-more-btn')
  if (!$viewMoreButton) return

  try {
    const infScroll = new InfiniteScroll($feedElement, {
      append: '.js-story',
      button: $viewMoreButton,
      history: false,
      debug: false,
      hideNav: '.pagination',
      path: '.pagination .older-posts'
    })

    infScroll.on('load', onPageLoad)

    function onPageLoad () {
      if (infScroll.loadCount === 1) {
        // after 3nd page loaded
        // disable loading on scroll
        infScroll.options.loadOnScroll = false
        // show button
        $viewMoreButton.classList.add('flex')
        $viewMoreButton.classList.remove('hidden')
        // remove event listener
        infScroll.off(onPageLoad)
      }
    }

    $viewMoreButton.addEventListener('click', function () {
      // load next page
      infScroll.loadNextPage()
      // enable loading on scroll
      infScroll.options.loadOnScroll = true
      // hide page
      this.classList.add('hidden')
    })
  } catch (e) {
    console.log('Error initializing InfiniteScroll:', e);
    // Hide the button if InfiniteScroll fails to initialize
    if ($viewMoreButton) {
      $viewMoreButton.classList.add('hidden');
    }
  }
})(document)
