// noinspection JSIgnoredPromiseFromCall

import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import MagnetElement from '../../helpers/MagnetElement'
import { AppStateContext } from '../../contexts/AppStateContext'
import styled from 'styled-components'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import EventUtil from "../../helpers/EventUtil";

let show = false
let Events;
let animId;

const CursorContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
  z-index: 30;
  opacity: 0;

  & * {
    pointer-events: none;
  }
`

export const PointerContainer = styled(motion.div)`
  //display: g;
  position: absolute;
  //border: thin solid lightcoral;
  height: 1rem;
  width: 1rem;
  top: calc(-1rem / 2);
  left: calc(-1rem / 2);
  right: auto;
  bottom: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
  //transform: translate(-50%, -50%);

  p {

    position: absolute;
    font-family: 'shapes', serif;
    line-height: 0;
    padding: 0;
    margin: 0;
    top: -50%;
    left: -50%;
    inset: auto;
    //color: #b9c8d3;
    //color: rgba(2, 11, 22, 1);
    color: var(--theme);


    font-size: 3.6rem;

    //mix-blend-mode: difference;
  }

  &.inner {
    p {
      transition: color .25s ease-in-out;
      font-size: .78rem;
    }
  }


`

const InnerPointer = ({isPointed, isFocused}) => {

  useEffect(() => {
    gsap.to('.pointer.inner > *', {
      rotation:  (e) => e % 2 ? 360 : -360,
      duration: (e) => e % 2 ? 6.6 * 1.2 : 5 * 1.2,
      ease: 'none',
      repeat: -1
    })
  }, [])

  useEffect(() => {

    console.log('isPointed: ' , isPointed);


    // setTimeout(() => {
      gsap.to('.pointer.inner', {
        scale: isPointed ? 3.3 :  1,
      })


  }, [isPointed])

  useEffect(() => {

    console.log('focused :', isFocused, );

    gsap.to('.pointer.inner > *', {
      color: isFocused ? '#a4b5c0' : 'var(--theme)',
    })

    gsap.to('.pointer.inner', {
      scale: isFocused ? 1.2 : 1,
    })

  }, [isFocused])

  return (
    <PointerContainer className='pointer inner'>
      <p className='inner-one'>h</p>
      <p className='inner-two'>i</p>
    </PointerContainer>
  );
}

const OuterPointer = ({isFocused, isPointed}) => {

  useEffect(() => {
    gsap.to('.pointer.outer', {
      scale: isFocused ? 0 : 1,
      opacity: isFocused ? 0 : 1
    })
  }, [isFocused])

  useEffect(() => {

    gsap.to('.cursor-container', {
      zIndex: isPointed ? 8 : 30
    })

    gsap.to('.pointer.outer', {
      scale: isPointed ? .78 :  1,
      duration: .5
    })
  }, [isPointed])

  useEffect(() => {
    gsap.to('.pointer.outer > *', {
      rotation:  (e) => e % 2 ? 360 : -360,
      duration: (e) => e % 2 ? 7.5 * 1.2 : 5.8 * 1.2,
      ease: 'none',
      repeat: -1
    })

  }, [])

  return (
    <PointerContainer className='pointer outer'>
      <p className='outer-one'>f</p>
      <p className='outer-two'>g</p>
    </PointerContainer>
  );
}

const Cursor = ({ path, loadingOverlay }) => {

  const [isFocused, setIsFocused] = useState(false)
  const [isPointed, setIsPointed] = useState(false)


  const { listenerTargetSelector, } = useContext(AppStateContext)

  /*const cursor = useMemo(() => PaperCursor.getInstance(), [])

  const initHover = useCallback(async () => {
    cursor.pointed = false
    cursor.isStuck = false
    cursor.isPointed = false
    cursor.focus = false;

    document.body.classList.remove('canvas-hover')

    // console.log('INIT__HOVER: ', path)

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
        cursor.isPointed = true
      }
    }

    const handleLeave = () => {
      cursor.pointed = false
      cursor.isPointed = false;
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
          cursor.isPointed = (false)
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
  }, [path, menuIsOpen])*/

  const refreshEventListeners = (selector) => {

    // if ( selectorCheck.get(selector) ) return
    // selectorCheck.set(selector, true)

    const pointerElements = document.querySelectorAll(selector)
    console.log(selector, pointerElements)

    pointerElements.forEach(element => {

      element.removeEventListener('mouseenter', handleHover)
      element.removeEventListener('mouseleave', handleLeave)

      element.addEventListener('mouseenter', handleHover)

      const type = element.dataset.pointer

      if ( type === 'magnet' ) {
        // console.log(element)
        const attraction = element.dataset.magnetAttraction ?? 1
        const distance = element.dataset.magnetDistance ?? 0.7
        new MagnetElement({
          element: element,
          stop: attraction,
          distance: distance,
        }).on('leave',
          () => {
            //if it is magnet no mouseleave needed
            // console.log('LEAVE invoked')
            setIsPointed(false)
            // document.body.classList.remove('canvas-hover')
          })
      } else {
        //only for pointer and focused add mouseleave
        element.addEventListener('mouseleave', handleLeave)
      }
    })
  }

  const handleHover = e => {
    // console.log('enter hover')
    let type = e.currentTarget.dataset.pointer;

    if ( type === 'focus' )
      setIsFocused(true);
     else
      setIsPointed(true)

  }

  const handleLeave = () => {
    setIsPointed(false);
    setIsFocused(false);
  }

  useLayoutEffect(() => {
    Events = EventUtil.getInstance()
  }, [ ])

  // initial opacity
  useEffect(() => {
      window.addEventListener('mousemove',
        () => {
          if ( show ) return

          gsap.to('.cursor-container',
            {
              opacity: 1,
              duration: 1.2,
              onComplete () {
                show = true
              }
            },)
        })

    }, [])

  useEffect(() => {
    refreshEventListeners('[data-pointer]')
  }, [])

  useEffect(() => {
    if ( !listenerTargetSelector ) return;

    // return;
      console.log('selector: ', listenerTargetSelector, 'loading: ', loadingOverlay);

      setTimeout(() => {
        refreshEventListeners(listenerTargetSelector)
      }, 5000)

    }, [listenerTargetSelector])

  // mouse track animation
  useEffect(() => {
    const clearAnim = () => {
      console.log('canceling animation : ', animId);
      cancelAnimationFrame(animId)
      animId = undefined
    }

    clearAnim()

    updateMousePos()

    return () => clearAnim()
  }, [])

  const updateMousePos = () => {
    const render = () => {
      if ( !animId ) return;

      gsap.to('.cursor-container .pointer.inner', {
        x: Events.mousePos.x,
        y:  Events.mousePos.y ,
        duration: 0,
      })

      gsap.to('.cursor-container .pointer.outer', {
        x: Events.mousePos.x,
        y:  Events.mousePos.y ,
        duration: .83,
        ease: 'power2.out'
      })



     animId = requestAnimationFrame(() => render())

    }

     animId = requestAnimationFrame(() => render())
  }


  return (
    <CursorContainer className='cursor-container'>
      <InnerPointer isPointed={isPointed} isFocused={isFocused} />
      <OuterPointer isPointed={isPointed} isFocused={isFocused} />
    </CursorContainer>
  )
}

export default Cursor
