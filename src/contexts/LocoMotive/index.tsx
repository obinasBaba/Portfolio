import React, {
  createContext,
  DependencyList,
  MutableRefObject,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LocomotiveScrollOptions, Scroll } from 'locomotive-scroll';
import useResizeObserver from 'use-resize-observer';
import { useDebounce } from 'use-debounce';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { MotionValue, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';

import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLocation } from '@reach/router';
import MouseFollower from '@components/MouseFollwer';
import RouteChangeEvent from '@helpers/RouteChangeEvent';
import { useMotionBreakPoint } from '@contexts/BreakPoint';
import { isMobile } from 'react-device-detect';


gsap.registerPlugin(ScrollTrigger);

type WithChildren = {
  children?: React.ReactNode;
};


export interface LocomotiveScrollContextValue {
  locoInstance: Scroll | null;
  isReady: boolean;
  scale: MotionValue<number>;
  scrollDirection: MotionValue<string>;
  yProgress: MotionValue<number>;
  yProgressSmooth: MotionValue<number>;
  onScrollCallbacks: MutableRefObject<Map<string, Function>>;
  cursor: MutableRefObject<MouseFollower | undefined>;
}

const LocomotiveScrollContext = createContext<LocomotiveScrollContextValue>({
  scroll: null,
  isReady: false,
  scale: new MotionValue<number>(0),
} as any);

export interface LocomotiveScrollProviderProps {
  options: LocomotiveScrollOptions;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  watch: DependencyList | undefined;
  onUpdate?: (scroll: Scroll) => void;
  location?: string;
  onLocationChange?: (scroll: Scroll) => void;
  onExitComplete: MotionValue<boolean>;
}

// const onScrollCallbacks = new Map<string, Function>();

export function LocomotiveScrollProvider({
  children,
  options,
  containerRef,
  watch,
  onUpdate,
  location,
  onLocationChange,
  onExitComplete,
}: WithChildren<LocomotiveScrollProviderProps>) {
  const { height: containerHeight } = useResizeObserver<HTMLDivElement>({
    ref: containerRef,
  });

  // const {  } = us;
  const { breakpoint } = useMotionBreakPoint();


  // dec
  const [isReady, setIsReady] = useState(false);
  const LocomotiveScrollRef = useRef<Scroll | null>(null);
  const onScrollCallbacks = useRef<Map<string, Function>>(new Map());
  const [height] = useDebounce(containerHeight, 100);
  const { pathname } = useLocation();
  const cursor = useRef<MouseFollower>();


  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const yLimit = useMotionValue(0);
  const xLimit = useMotionValue(0);
  const scrollDirection = useMotionValue('');


  const ySmooth = useSpring(y, { damping: 50, stiffness: 400 });
  const velocity = useVelocity(ySmooth);
  const scale = useTransform(velocity, [-3000, 0, 3000], [1.01, 1, 1.01]);
  const { scrollYProgress, scrollY } = useScroll();

  const yProgress = useTransform(y, [0, isReady ? yLimit.get() : 0], [0, 1], {
    clamp: true,
  });

  useLayoutEffect(() => {
    const event = RouteChangeEvent.GetInstance();

    event.addListener('end', () => {
      cursor.current?.removeText();
      cursor.current?.removeState('-opaque');
      cursor.current?.removeState('-pointer');
      cursor.current?.removeImg();

      onExitComplete.onChange((v: any) => {
        if (v === false) return;

        cursor.current?.removeText();
        cursor.current?.removeState('-opaque');
        cursor.current?.removeState('-pointer');
        cursor.current?.removeImg();

        setTimeout(() => cursor.current?.attach(), 2000);

        onExitComplete.set(false);

      });

    });
  }, []);

  useLayoutEffect(() => {
    LocomotiveScrollRef.current?.update();

  }, [pathname]);

  // initialization
  useLayoutEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    // if (!window.matchMedia('min-width(600px)').matches)
    // return;

    import('locomotive-scroll').then((LocomotiveScroll) => {
      const dataScrollContainer = document.querySelector(
        '[data-scroll-container]',
      );

      if (LocomotiveScrollRef.current?.el) {
        return;
        // console.log("IT IS NOT NULL", LocomotiveScrollRef.current.name);
      }

      if (!isMobile) {
        cursor.current = new MouseFollower();
      }


      LocomotiveScrollRef.current = new LocomotiveScroll.default({
        el: dataScrollContainer ?? undefined,
        // @ts-ignore

        ...options,
      });

      setTimeout(() => {
        setIsReady(true);
        LocomotiveScrollRef.current?.update();
      }, 1000);

      // console.log("locomotive starting here -----", LocomotiveScrollRef.current);
    });

    return () => {
      LocomotiveScrollRef.current?.destroy();
      // console.log("locomotive DYING here -----", LocomotiveScrollRef.current?.name);
      LocomotiveScrollRef.current = null;

      setIsReady(false);
    };
  }, []);

  useLayoutEffect(() => {
    if (isReady) {
      const scrollEl = document.querySelector('[data-scroll-container]');

      // console.log("isReady :", isReady);

      ScrollTrigger.scrollerProxy(scrollEl, {
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },

        // pinType: "transform",
        scrollTop(value) {
          if (!LocomotiveScrollRef.current) return;

          const top = arguments.length
            ? LocomotiveScrollRef.current.scrollTo(value as number, {})
            : LocomotiveScrollRef.current.scroll.instance.scroll.y;
          // console.log("scrollTop", top, value);

          return top;
        },
        // fixedMarkers: true
      });

      /*  onScrollCallbacks.current.set("about", () => {
          console.log("scroll update -");
          ScrollTrigger.update();
        });*/

      const lsUpdate = () => {
        if (LocomotiveScrollRef.current) {
          LocomotiveScrollRef.current.update();
        }
      };

      lsUpdate();
      window.addEventListener('resize', lsUpdate);
      ScrollTrigger.addEventListener('refresh', lsUpdate);
      ScrollTrigger.refresh();
      ScrollTrigger.update();
    }
  }, [isReady]);


  useEffect(() => {
    if (!LocomotiveScrollRef.current) {
      return;
    }

    yLimit.set(LocomotiveScrollRef.current?.scroll?.instance.limit.y);
    xLimit.set(LocomotiveScrollRef.current?.scroll?.instance.limit.x);
    LocomotiveScrollRef.current.update();

    if (onUpdate) {
      onUpdate(LocomotiveScrollRef.current);
      // setIsReady;
    }
  }, [watch, height, isReady]);

  // dependency change
  useEffect(() => {
    onScrollCallbacks.current.clear();
    if (LocomotiveScrollRef.current === null || !location) {
      return;
    }

    // console.log("location change ---- -- - - - -");

    LocomotiveScrollRef.current.update();
    yLimit.set(LocomotiveScrollRef.current?.scroll?.instance.limit.y);
    xLimit.set(LocomotiveScrollRef.current?.scroll?.instance.limit.x);

    if (onLocationChange) {
      onLocationChange(LocomotiveScrollRef.current);
    }
  }, [location, onLocationChange]);

  // scroll events
  useEffect(() => {
    if (isReady && LocomotiveScrollRef.current) {
      LocomotiveScrollRef.current.on('scroll', (arg: any) => {
        // console.log("scrolled: ", yLimit.get());

        // console.log("subscribers: ", onScrollCallbacks.current);
        onScrollCallbacks.current.forEach((fun) => {
          fun();
        });

        ScrollTrigger.update();

        x.set(arg?.delta?.x || arg.scroll.x);
        y.set(arg?.delta?.y || arg.scroll.y);

        scrollDirection.set(arg.direction);
      });
    }
  }, [isReady]);


  return (
    <LocomotiveScrollContext.Provider
      value={{
        locoInstance: LocomotiveScrollRef.current,
        isReady,
        scale,
        scrollDirection,
        yProgress: isMobile ? scrollYProgress : yProgress,
        yProgressSmooth: ySmooth,
        onScrollCallbacks,
        cursor,
      }}
    >
      {children}
    </LocomotiveScrollContext.Provider>
  );
}

LocomotiveScrollContext.displayName = 'LocomotiveScrollContext';
LocomotiveScrollProvider.displayName = 'LocomotiveScrollProvider';

export function useLocomotiveScroll(): LocomotiveScrollContextValue {
  const context = useContext(LocomotiveScrollContext);

  useEffect(() => {
    if (!context.locoInstance) {
      console.warn(
        'react-locomotive-scroll: the context is missing. You may be using the hook without registering LocomotiveScrollProvider, or you may be using the hook in a component which is not wrapped by LocomotiveScrollProvider.',
      );
    }
  }, [context.locoInstance]);

  return context as LocomotiveScrollContextValue;
}

useLocomotiveScroll.displayName = 'useLocomotiveScroll';
