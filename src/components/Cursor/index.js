// noinspection JSIgnoredPromiseFromCall

import React, { useCallback, useEffect, useRef } from 'react'
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
} from 'framer-motion'
import { CursorContainer, Pointer } from './components'
import MagnetElement from '../../helpers/MagnetElement'
import PaperCursor from './PaperCursor'

const pointerVariants = {
  initial: {
    scale: 1,
  },
  small: {
    scale: 1,
    transition: {
      ease: 'linear',
      duration: 0.45,
    },
  },

  big: {
    scale: 3.5,
    transition: {
      ease: 'linear',
      duration: 0.4,
    },
  },

  animate(c) {
    return {
      rotate: [null, 360 * c.factor],
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'linear',
        duration: 5 * 1.2,
      },
    }
  },
}

const Cursor = ({ path }) => {
  const canvasRef = useRef(null)

  let x = useMotionValue(window ? window.innerWidth / 2 : 0)
  let y = useMotionValue(window ? window.innerHeight / 2 : 0)
  const control = useAnimation()
  const containerControl = useAnimation()

  const initHover = useCallback(() => {
    const handleHover = e => {
      // console.log('enter hover')
      if (e.currentTarget.dataset.stuck) {
        const rect = e.currentTarget.getBoundingClientRect()
        // stuckPos.x = Math.round(rect.left + rect.width / 2)
        // stuckPos.y = Math.round(rect.top + rect.height / 2)
        // isStuck = true
      } else {
        containerControl.start({ zIndex: 11 })
        control.start('big')
      }
    }
    const handleLeave = () => {
      // console.log('leave hover')
      control.start('small')
    }

    const pointerElements = document.querySelectorAll('[data-pointer]')
    // console.log(pointerElements)

    pointerElements.forEach(element => {
      element.removeEventListener('mouseenter', handleHover)
      element.removeEventListener('mouseleave', handleLeave)
      const attraction = element.dataset.attraction ?? 1
      const distance = element.dataset.distance ?? 0.7

      if (element.dataset.magnet) {
        // console.log(element)
        const magnet = new MagnetElement({
          element: element,
          stop: attraction,
          distance: distance,
        })

        magnet.on('leave', () => {
          // console.log('LEAVE invoked')
          control.start('small')
          containerControl.start({
            zIndex: 20,
          })
        })

        element.addEventListener('mouseenter', handleHover)
      } else {
        element.addEventListener('mouseenter', handleHover)
      }
    })
  }, [path])

  useEffect(() => {
    const handleMouse = e => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const cursor = PaperCursor.getInstance()

    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('resize', cursor.reInit)

    return () => {
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('resize', cursor.reInit)
    }
  }, [])

  useEffect(() => {
    control.start('initial')
    control.start('animate')

    initHover()
  }, [path])

  return (
    <CursorContainer animate={containerControl}>
      <Pointer style={{ x, y }}>
        <motion.p
          variants={pointerVariants}
          initial="initial"
          animate={control}
          custom={{ factor: 1 }}
        >
          h
        </motion.p>

        <motion.p
          variants={pointerVariants}
          initial="initial"
          animate={control}
          custom={{ factor: -1 }}
        >
          i
        </motion.p>
      </Pointer>
    </CursorContainer>
  )
}

export default Cursor
