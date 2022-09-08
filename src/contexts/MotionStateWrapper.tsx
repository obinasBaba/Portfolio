import { AnimationControls, MotionValue, useAnimation, useMotionValue } from 'framer-motion';
import React, { createContext, useContext, useEffect, useLayoutEffect } from 'react';
// @ts-ignore
import LocomotiveScroll from 'locomotive-scroll';
import { useMediaQuery, useTheme } from '@material-ui/core';
import RouteChangeEvent from '../helpers/RouteChangeEvent';


type ToolTipType = {
  text: string | string[];
  show: boolean;
  timer: number[] | null
}


type MotionValueContextType = {
  projectImgLoaded: MotionValue<boolean>,
  registerScrollRestoration: MotionValue<string>,
  inView: MotionValue,
  locoInstance: MotionValue<LocomotiveScroll>,
  toolTipsData: MotionValue<ToolTipType>,
  largeUp: MotionValue<boolean>,
  mainAnimationController: AnimationControls
  screenOverlayProxy: MotionValue<{ state: boolean, config: { [key: string]: any } }>,
  menuIsOpen: MotionValue<boolean>,
  screenOverlayEvent: MotionValue<string>,
  refreshCursorEventListeners: MotionValue<string>,


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

export const MotionValueContext = createContext<MotionValueContextType>({} as any);

export const MotionStateWrapper: React.FC = ({ children }) => {
  //using motionValue to avoid rerender
  const fromProjectList = useMotionValue(false);
  const fromCaseStudy = useMotionValue(false);
  const isTop = useMotionValue(true);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const yProgress = useMotionValue(0);
  const xProgress = useMotionValue(0);
  const limit = useMotionValue(0);
  const projectImgLoaded = useMotionValue(false);
  const registerScrollRestoration = useMotionValue('');
  const scrollDirection = useMotionValue('down');
  const inView = useMotionValue(null);
  const locoInstance = useMotionValue<LocomotiveScroll>(null);
  const largeUp = useMotionValue(false);

  const mainAnimationController = useAnimation();

  const screenOverlayProxy = useMotionValue({ state: false, config: {} });
  const screenOverlayEvent = useMotionValue('closed');
  const menuIsOpen = useMotionValue(false);

  const refreshCursorEventListeners = useMotionValue('[data-pointer]');

  const locoInstanceHelpers = useMotionValue(null);
  const toolTipsData = useMotionValue<ToolTipType>({
    text: '',
    show: false,
    timer: null,
  });

  //mouse_event motion_values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const routeEvent = RouteChangeEvent.GetInstance();


  useEffect(() => {
    largeUp.set(matches);

  }, [matches]);


  // const { scrollY, scrollYProgress } =  useViewportScroll()

  useEffect(() => {
    const showTip = () => toolTipsData.set({ timer: null, show: true, text: 'loading resource...' });

    routeEvent.addListener('start', showTip);

    return () => {
      routeEvent.removeListener('start', showTip);
    };

  }, []);

  useLayoutEffect(() => {
    const updateMouseMotionValue = (ev: MouseEvent) => {
      mouseX.set(ev.clientX);
      mouseY.set(ev.clientY);
    };

    window.addEventListener('mousemove', updateMouseMotionValue);
  }, []);

  // @ts-ignore
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
          mouseY,// @ts-ignore
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
        refreshCursorEventListeners,

      }}
    >
      {children}
    </MotionValueContext.Provider>
  );
};

export function useMotionValueContext() {
  return useContext(MotionValueContext);
}
