import gsap from 'gsap'
import MagnetElement from '../helpers/MagnetElement'
import { useCallback, useContext, useEffect } from 'react'
import {
  AppStateContext,
  BackgroundOverlayStateContext,
} from '../contexts/AppStateContext'

export default function (selector, isMobile) {
  const { currentPath } = useContext(AppStateContext)

  const { backgroundOverlay } = useContext(BackgroundOverlayStateContext)

  const animateFocus = useCallback(
    (isFocused, color) => {
      if (isMobile) return

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
    }, [selector, isMobile])

  const animatePointed = useCallback(
    (isPointed, pointedColor) => {
        if (isMobile) return;

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
    [selector, isMobile]
  )

  const refreshEventListeners = useCallback(selector => {

        if (isMobile) return;

      const handleHover = e => {


        // console.log('enter hover')
        let type = e.currentTarget.dataset.pointer
        let color = e.currentTarget.dataset.pointerColor

        if (type === 'focus')
          animateFocus(true, color)
         else
          animatePointed(true, color)

      }

      const handleLeave = () => {
        animateFocus(false)
        // setIsFocused(false);
        animatePointed(false)
      }

      const pointerElements = document.querySelectorAll(selector)
      // console.log(selector, pointerElements)

      pointerElements.forEach(element => {
        element.removeEventListener('mouseenter', handleHover)
        element.removeEventListener('mouseleave', handleLeave)

        const type = element.dataset.pointer

        if (type === 'magnet') {
          // console.log(element)

          const attraction = element.dataset.magnetAttraction ?? 1
          const distance = element.dataset.magnetDistance ?? 0.7

          element.addEventListener('mouseenter', handleHover)

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
        } else if (type === 'focus') {
          //only for pointer and focused add mouseleave
          element.addEventListener('mouseenter', handleHover)

          element.addEventListener('mouseleave', handleLeave)
        }
      })
    },
    [selector, isMobile]
  )

  useEffect(() => {
      if (isMobile) return;

    animateFocus(false)
    animatePointed(false)
  }, [currentPath, isMobile])

  useEffect(() => {

      if (isMobile) return;

    if (backgroundOverlay) return

    const invoke = () => {
      animateFocus(false)
      animatePointed(false)
      refreshEventListeners(selector)

      window.removeEventListener('mousemove', invoke)
    }

    window.addEventListener('mousemove', invoke)
  }, [selector, backgroundOverlay, isMobile])
}