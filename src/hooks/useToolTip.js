import gsap from 'gsap'
import { useContext, useEffect } from 'react'
import { BackgroundOverlayStateContext } from '../contexts/AppStateContext'

export default selector => {
  const { backgroundOverlay } = useContext(BackgroundOverlayStateContext)

  useEffect(() => {
    if (backgroundOverlay) return

    // if ( !selector ) throw Error('Invalid selector in useTOolTIp---------')
    const toolTipTextNode = document.querySelector('.tool-tip-excerpt')

    const onEnter = el => {
      toolTipTextNode.textContent = el.target.dataset.tooltipText
      gsap.fromTo(
        '.tool-tip-wrapper',
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2 * 0.5,
          ease: 'easeIn',
        }
      )
    }

    const onLeave = () => {
      gsap.to('.tool-tip-wrapper', {
        opacity: 0,
        y: -25,
        duration: 1.2 * 0.5,
        ease: '[0.6, 0.01, 0, 0.9]',
        onComplete() {
          // toolTipTextNode.textContent = ''
        },
      })
    }

    const addListener = async () => {
      const toolTipElements = document.querySelectorAll(selector)
      toolTipElements.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseenter', onEnter)

        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })

      window.removeEventListener('mousemove', addListener)
    }

    window.addEventListener('mousemove', addListener)
  }, [selector, backgroundOverlay])
}