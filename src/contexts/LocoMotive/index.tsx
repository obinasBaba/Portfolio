import React, { createContext, DependencyList, MutableRefObject, useContext, useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LocomotiveScrollOptions, Scroll } from "locomotive-scroll";
import useResizeObserver from "use-resize-observer";
import { useDebounce } from "use-debounce";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { MotionValue, useMotionValue, useSpring, useTransform, useVelocity } from "framer-motion";

type WithChildren<T = Record<string, unknown>> = T & { children?: React.ReactNode }


export interface LocomotiveScrollContextValue {
  locoInstance: Scroll | null;
  isReady: boolean;
  scale: MotionValue<number>;
  scrollDirection: MotionValue<string>;
  yProgress: MotionValue<number>;
  yProgressSmooth: MotionValue<number>;
}

const LocomotiveScrollContext = createContext<LocomotiveScrollContextValue>({
  scroll: null,
  isReady: false,
  scale: new MotionValue<number>()
} as any);

export interface LocomotiveScrollProviderProps {
  options: LocomotiveScrollOptions;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  watch: DependencyList | undefined;
  onUpdate?: (scroll: Scroll) => void;
  location?: string;
  onLocationChange?: (scroll: Scroll) => void;
}

export function LocomotiveScrollProvider({
                                           children,
                                           options,
                                           containerRef,
                                           watch,
                                           onUpdate,
                                           location,
                                           onLocationChange
                                         }: WithChildren<LocomotiveScrollProviderProps>) {
  const { height: containerHeight } = useResizeObserver<HTMLDivElement>({ ref: containerRef });
  const [isReady, setIsReady] = useState(false);
  const [r, setR] = useState(false);
  const LocomotiveScrollRef = useRef<Scroll | null>(null);
  const [height] = useDebounce(containerHeight, 100);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const yLimit = useMotionValue(0);
  const xLimit = useMotionValue(0);
  const scrollDirection = useMotionValue("");

  const yProgress = useTransform(y, [0, isReady ? yLimit.get() : 0], [0, 1], { clamp: true });

  const ySmooth = useSpring(y, { damping: 50, stiffness: 400 });
  const velocity = useVelocity(ySmooth);

  const scale = useTransform(velocity, [-3000, 0, 3000], [1.01, 1, 1.01]);


  useEffect(() => {
    return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import("locomotive-scroll").then((LocomotiveScroll) => {
      const dataScrollContainer = document.querySelector("[data-scroll-container]");

      if (LocomotiveScrollRef.current?.el) {
        return console.log("IT IS NOT NULL", LocomotiveScrollRef.current.name);
      }

      LocomotiveScrollRef.current = new LocomotiveScroll.default({
        el: dataScrollContainer ?? undefined,
        // @ts-ignore
        smartphone: {
          breakpoint: 0,
          smooth: true,
          getDirection: true
        },
        tablet: {
          breakpoint: 0,
          smooth: false,
          getDirection: true
        },

        ...options
      });


      setTimeout(() => {
        setIsReady(true);
        LocomotiveScrollRef.current?.update();
      }, 1000);

      // console.log("locomotive starting here -----", LocomotiveScrollRef.current);
    });

    return () => {
      LocomotiveScrollRef.current?.destroy();
      console.log("locomotive DYING here -----", LocomotiveScrollRef.current?.name);
      LocomotiveScrollRef.current = null;

      setIsReady(false);
    };
  }, []);

  useEffect(() => {
    if (!LocomotiveScrollRef.current) {
      return;
    }

    /* console.log(
       "dependency change ---- -- - - - -",
       height,
       " instance: ",
       LocomotiveScrollRef.current
     );
 */
    LocomotiveScrollRef.current.update();
    yLimit.set(LocomotiveScrollRef.current?.scroll?.instance.limit.y);
    xLimit.set(LocomotiveScrollRef.current?.scroll?.instance.limit.x);

    if (onUpdate) {
      onUpdate(LocomotiveScrollRef.current);
      setIsReady;
    }
  }, [watch, height, isReady]);

  // dependency change
  useEffect(() => {
    if (LocomotiveScrollRef.current === null || !location) {
      return;
    }

    // console.log("location change ---- -- - - - -");

    LocomotiveScrollRef.current.update();

    if (onLocationChange) {
      onLocationChange(LocomotiveScrollRef.current);
    }
  }, [location, onLocationChange]);

  // scroll events
  useEffect(() => {
    if (isReady && LocomotiveScrollRef.current) {
      LocomotiveScrollRef.current.on("scroll", (arg: any) => {
        // console.log("scrolled: ", yLimit.get());
        x.set(arg.scroll.x);
        y.set(arg.scroll.y);
        scrollDirection.set(arg.direction);
      });
    }
  }, [isReady]);

  return (
    <LocomotiveScrollContext.Provider
<<<<<<< Updated upstream
      value={{
        scroll: LocomotiveScrollRef.current,
        isReady,
        scale,
        scrollDirection,
        yProgress,
        yProgressSmooth: ySmooth
      }}>
=======
      value={{ locoInstance: LocomotiveScrollRef.current, isReady, scale, scrollDirection, yProgress }}>
>>>>>>> Stashed changes
      {children}
    </LocomotiveScrollContext.Provider>
  );
}

LocomotiveScrollContext.displayName = "LocomotiveScrollContext";
LocomotiveScrollProvider.displayName = "LocomotiveScrollProvider";

export function useLocomotiveScroll(): LocomotiveScrollContextValue {
  const context = useContext(LocomotiveScrollContext);

  useEffect(() => {
    if (!context.locoInstance) {
      console.warn(
        "react-locomotive-scroll: the context is missing. You may be using the hook without registering LocomotiveScrollProvider, or you may be using the hook in a component which is not wrapped by LocomotiveScrollProvider."
      );
    }
  }, [context.locoInstance]);

  return context;
}

useLocomotiveScroll.displayName = "useLocomotiveScroll";
