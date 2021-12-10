import gsap from 'gsap'
import MagnetElement from '../helpers/MagnetElement'
import { useCallback, useContext, useEffect } from 'react'
import { BackgroundOverlayStateContext } from '../contexts/AppStateContext'

export default function (selector) {
  const animateFocus = useCallback(
    (isFocused, color) => {
      gsap.to('.pointer.inner > *', {
        color: isFocused ? color || '#a4b5c0' : 'var(--theme)',
        duration: gsap.defaults().duration,
      })

      gsap.to('.pointer.inner', {
        scale: isFocused ? 1.2 : 1,
      })

      gsap.to('.pointer.outer', {
        scale: isFocused ? 0 : 1,
        opacity: isFocused ? 0 : 1,
      })
    },
    [selector]
  )

  const animatePointed = useCallback(
    (isPointed, pointedColor) => {
      gsap.to('.pointer.inner', {
        scale: isPointed ? 3.17 : 1,
      })

      gsap.to('.pointer.inner > *', {
        color: isPointed ? pointedColor || '#a4b5c0' : 'var(--theme)',
        duration: gsap.defaults().duration,
      })

      gsap.to('.pointer.outer', {
        scale: isPointed ? 0.84 : 1,
        duration: 0.5,
      })

      gsap.to('.cursor-container', {
        zIndex: isPointed ? 8 : 30,
      })
    },
    [selector]
  )

  const refreshEventListeners = useCallback(selector => {
    const handleHover = e => {
      // console.log('enter hover')
      let type = e.currentTarget.dataset.pointer
      let color = e.currentTarget.dataset.pointerColor
      // setPointedColor(color || undefined)

      if (type === 'focus') {
        // setIsFocused(true)

        animateFocus(true, color)
      } else {
        // gsap.timeline()

        animatePointed(true, color)
        // setIsPointed(true)
      }
    }

    const handleLeave = () => {
      animateFocus(false)
      // setIsFocused(false);
      animatePointed(false)
    }

    const pointerElements = document.querySelectorAll(selector)
    console.log(selector, pointerElements)

    pointerElements.forEach(element => {
      element.removeEventListener('mouseenter', handleHover)
      element.removeEventListener('mouseleave', handleLeave)

      element.addEventListener('mouseenter', handleHover)

      const type = element.dataset.pointer

      if (type === 'magnet') {
        // console.log(element)
        const attraction = element.dataset.magnetAttraction ?? 1
        const distance = element.dataset.magnetDistance ?? 0.7
        new MagnetElement({
          element: element,
          stop: attraction,
          distance: distance,
        }).on('leave', () => {
          //if it is magnet no mouseleave needed
          // console.log('LEAVE invoked')
          // setIsPointed(false)
          animatePointed(false)
          // document.body.classList.remove('canvas-hover')
        })
      } else {
        //only for pointer and focused add mouseleave
        element.addEventListener('mouseleave', handleLeave)
      }
    })
  }, selector)

  const { backgroundOverlay } = useContext(BackgroundOverlayStateContext)

  useEffect(() => {
    if (backgroundOverlay) return

    const invoke = () => {
      refreshEventListeners(selector)

      window.removeEventListener('mousemove', invoke)
    }

    window.addEventListener('mousemove', invoke)
  }, [selector, backgroundOverlay])
}