import {MotionValue, useMotionValue, useViewportScroll} from "framer-motion";
// @ts-ignore
import React, {useLayoutEffect, createContext, useEffect} from 'react'
// @ts-ignore


type MotionValueContextType = {
  projectImgLoaded: MotionValue<boolean>,
  registerScrollRestoration: MotionValue<string >,
  inView: MotionValue<string | null >,

  mouse: {
    mouseX: MotionValue<number>
    mouseY: MotionValue<number>
  },

  moScroll: {
    x: MotionValue<number>
    y: MotionValue<number>
    yProgress: MotionValue<number>
    xProgress: MotionValue<number>
    limit: MotionValue<number>
    scrollDirection: MotionValue<string>;
  },
  variantsUtil: {
    fromProjectList: MotionValue<boolean>
    fromCaseStudy: MotionValue<boolean>
    isTop: MotionValue<boolean>
  }
}

export const MotionValueContext = createContext<MotionValueContextType>({} as any)

export const MotionStateWrapper : React.FC = ({ children }) => {
  //using motionValue to avoid rerender
  const fromProjectList = useMotionValue(false)
  const fromCaseStudy = useMotionValue(false)
  const isTop = useMotionValue(true)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const yProgress = useMotionValue(0)
  const xProgress = useMotionValue(0)
  const limit = useMotionValue(0)
  const projectImgLoaded = useMotionValue(false)
  const registerScrollRestoration = useMotionValue('')
  const scrollDirection = useMotionValue('down')
  const inView = useMotionValue(null)

  //mouse_event motion_values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // const { scrollY, scrollYProgress } =  useViewportScroll()

  useEffect(() => {
    y.onChange( v => {
      console.log('scrollY: ', v)
    } )
  }, [])

  useLayoutEffect(() => {
    const updateMouseMotionValue = (ev : MouseEvent) => {
      mouseX.set(ev.clientX)
      mouseY.set(ev.clientY)
    }

    window.addEventListener('mousemove', updateMouseMotionValue)
  }, [])

  return (
    <MotionValueContext.Provider
      value={{
        moScroll: {
          x,
          y,
          yProgress,
          xProgress,
          limit,
          scrollDirection,
        },
        mouse: {
          mouseX,
          mouseY,
        },
        variantsUtil: {
          fromCaseStudy,
          fromProjectList,
          isTop,
        },
        projectImgLoaded,
        registerScrollRestoration,
        inView
      }}
    >
      {children}
    </MotionValueContext.Provider>
  )
}