import {
  AnimationControls,
  MotionValue,
  useAnimation,
  useMotionValue,
  useTransform,
  useViewportScroll
} from "framer-motion";
// @ts-ignore
import React, {useLayoutEffect, createContext, useEffect} from 'react'
// @ts-ignore
import LocomotiveScroll from "locomotive-scroll";
import {useMediaQuery, useTheme} from "@material-ui/core";


type MotionValueContextType = {
  projectImgLoaded: MotionValue<boolean>,
  registerScrollRestoration: MotionValue<string >,
  inView: MotionValue,
  locoInstance: MotionValue<LocomotiveScroll>,
  toolTipsData: MotionValue<{ text: string | string[], show: boolean, timer: number[] | null  }>,
  largeUp: MotionValue<boolean>,
  mainAnimationController: AnimationControls
  screenOverlayProxy: MotionValue< {state: boolean, config: { [key: string]: any }} >,
  menuIsOpen: MotionValue<boolean>,
  screenOverlayEvent: MotionValue<string>,


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
  const locoInstance = useMotionValue<LocomotiveScroll>(null)
  const largeUp = useMotionValue(false)

  const mainAnimationController = useAnimation();

  const screenOverlayProxy = useMotionValue( { state: false, config: {} }  );
  const screenOverlayEvent = useMotionValue( ''  );
  const menuIsOpen = useMotionValue(false);

  const locoInstanceHelpers = useMotionValue(null)
  const toolTipsData = useMotionValue ({
    text: '',
    show: false,
    timer: null,
  })

  //mouse_event motion_values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  useEffect(() => {
    largeUp.set(matches)

  }, [matches])


  // const { scrollY, scrollYProgress } =  useViewportScroll()

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
        inView,
        locoInstance,
        toolTipsData,
        largeUp,
        mainAnimationController,
        screenOverlayProxy,
        screenOverlayEvent,
        menuIsOpen,

      }}
    >
      {children}
    </MotionValueContext.Provider>
  )
}