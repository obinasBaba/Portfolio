import gsap from "gsap";
import { useContext, useEffect } from "react";
import { AppStateContext } from "../contexts/AppStateContext";

export default (selector) => {
  const {
    backgroundOverlay
  } = useContext(AppStateContext)

  useEffect(() => {
    if ( backgroundOverlay )
      return

    // if ( !selector ) throw Error('Invalid selector in useTOolTIp---------')
    const toolTipTextNode = document.querySelector('.tool-tip-excerpt')


    const onEnter = el => {
      toolTipTextNode.textContent = el.target.dataset.tooltipText
      gsap.fromTo('.tool-tip-wrapper', {
        opacity: 0,
        y: 25,
      }, {
        opacity: 1,
        y: 0,
        duration: 1.2 * .5,
        ease: 'easeIn'
      })
    }

    const onLeave = () => {
      gsap.to('.tool-tip-wrapper', {
        opacity: 0,
        y: -25,
        duration: 1.2 * .5,
        ease: '[0.6, 0.01, 0, 0.9]',
        onComplete(){
          // toolTipTextNode.textContent = ''
        }
      })
    }

    const toolTipElements = document.querySelectorAll(selector)
    toolTipElements.forEach(el => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseenter', onEnter)

      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
  }, [selector, backgroundOverlay])
}