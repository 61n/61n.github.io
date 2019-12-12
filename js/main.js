document.addEventListener('DOMContentLoaded', function() {
  const detailBlock = document.getElementsByClassName('js-ega-detail')

  if (detailBlock) {
    detailBlock[0].addEventListener('click', (e) => {
      const t = e.target
      if (t.classList.contains('js-toggle-button')) {
        e.preventDefault()
        const wrapperBlock = t.closest('.js-toggle-wrapper')
        const toggleEl = wrapperBlock ? wrapperBlock.getElementsByClassName('js-toggle-block') : null
        // toggle
        if (toggleEl) {
          if (t.classList.contains('js-is-show-more')) {
            toggleEl[0].classList.remove('show')
            t.textContent = 'Xem them'
            t.classList.remove('js-is-show-more')
          } else {
            toggleEl[0].classList.add('show')
            t.textContent = 'Thu gon'
            t.classList.add('js-is-show-more')
          }
        }
      }
    })
  }

  const imageIframe = document.getElementsByClassName('js-iframe-block')
  if (imageIframe) {
    imageIframe[0].addEventListener('click', (e) => {
      const t = e.target
      const video = imageIframe[0].getElementsByClassName('js-frame')

      if (t.classList.contains('js-frame-image')) {
        video[0].src += '?autoplay=1'
        t.classList.add('hide')
      }

    })
  }

})
