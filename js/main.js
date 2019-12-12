document.addEventListener('DOMContentLoaded', function() {
  const select = (target, el) => el ? el.querySelector(target) : document.querySelector(target)
  const selectAll = (target, el) => el ? el.querySelectorAll(target) : document.querySelectorAll(target)
  const hasClass = (className, el) => el ? el.classList.contains(className) : document.classList.contains(className)
  const removeClass = (className, els) => {
    if (els.length) {
      els.forEach(el => {
        if (hasClass(className, el)) {
          el.classList.remove(className)
        }
      })
    }
  }


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

  const reviewBlock = select('.js-ega-review')

  if (reviewBlock) {
    const toggleEls = selectAll('.js-review-toggle', reviewBlock)
    const toggleElsWrappers = selectAll('.js-review-toggle-wrapper', reviewBlock)
    const quoteEls = selectAll('.js-quote', reviewBlock)
    const authorEls = selectAll('.js-review-author', reviewBlock)

    if (toggleEls.length && toggleElsWrappers.length && quoteEls.length && authorEls.length) {
      reviewBlock.addEventListener('click', (e) => {
        const t = e.target

        if (!hasClass('js-review-toggle', t)) {
          return
        }

        if (!hasClass('is-activated', t)) {
          const indexData = +t.dataset.index

          removeClass('is-activated', toggleEls)
          removeClass('is-activated', toggleElsWrappers)
          removeClass('is-activated', quoteEls)
          removeClass('is-activated', authorEls)

          t.classList.add('is-activated')
          toggleElsWrappers[indexData].classList.add('is-activated')
          quoteEls[indexData].classList.add('is-activated')
          authorEls[indexData].classList.add('is-activated')

        }
      })
    }
  }

})
