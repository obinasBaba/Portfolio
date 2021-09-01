// noinspection JSIgnoredPromiseFromCall

import React, { useCallback, useEffect, useMemo } from 'react'
import MagnetElement from '../../helpers/MagnetElement'
import PaperCursor from './PaperCursor'
import { debounce } from 'lodash'

const Cursor = ({ path }) => {
  const cursor = useMemo(() => PaperCursor.getInstance(), [])

  const initHover = useCallback(() => {
    cursor.pointed = false
    cursor.isStuck = false
    cursor.startPointed(false)

    document.body.classList.remove('canvas-hover')

    console.log('INIT__HOVER: ', path)

    const handleHover = e => {
      // console.log('enter hover')
      let type = e.currentTarget.dataset.pointer;
      if (type === 'stuck') {
        const rect = e.currentTarget.getBoundingClientRect()
        let x = Math.round(rect.left + rect.width / 2)
        let y = Math.round(rect.top + rect.height / 2)
        cursor.startStuck(x, y)
      }else if( type === 'focus'){
        cursor.focus = true;
      } else {
        document.body.classList.add('canvas-hover')
        cursor.startPointed(true)
      }
    }
    const handleLeave = () => {
      cursor.pointed = false
      cursor.startPointed(false)
      cursor.focus = false;

      document.body.classList.remove('canvas-hover')
      // console.log('classList: ', document.body.classList)
    }

    const pointerElements = document.querySelectorAll('[data-pointer]')
    // console.log(pointerElements)

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
          cursor.pointed = false
          cursor.startPointed(false)
          document.body.classList.remove('canvas-hover')
        })
      } else if (type !== 'stuck' && type !== 'magnet') {
        //only pointer
        element.addEventListener('mouseleave', handleLeave)
      }
    })
  }, [path])


  useEffect(() => {
    const onResize = debounce(cursor.reInit.bind(cursor, []), 1000, {})
    let onR = () => onResize()


    window.addEventListener('resize', onR )

    return () => {
      window.removeEventListener('resize', onR)
      cursor.destroy()
    }
  }, [])

  useEffect(() => {
    initHover()
  }, [path])

  return (
    <React.Fragment key={'cursorContainer'}>
    </React.Fragment>
  )
}

export default Cursor
