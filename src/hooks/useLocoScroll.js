/** @format */

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Cursor from "../components/Cursor";
import { MotionValueContext } from "../contexts/MotionStateWrapper";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(
  start = true,
  elementId = '[data-scroll-container="true"]'
) {
  const { moScroll, locoInstance } = useContext(MotionValueContext);

  const locoScroll = useRef(null);

  useLayoutEffect(() => {
    const scrollEl = document.body.querySelector(elementId);
    window.locoInstance = locoScroll.current = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      getDirection: true,
      getSpeed: true,
    });
    locoInstance.set(window.locoInstance);

    // whenever when we scroll loco update scrollTrigger
    locoScroll.current.on("scroll", (arg) => {
      // console.time('Single onScroll');
      ScrollTrigger.update();
      moScroll.x.set(arg.scroll.x);
      moScroll.y.set(arg.scroll.y);
      moScroll.limit.set(arg.limit.y);
      moScroll.scrollDirection.set(arg.direction);

      Math.abs(window.locoInstance.scroll.instance.speed) > 2 &&
        Cursor.stopMouseAnimation();
      // console.log('ticking', window.locoInstance.scroll.instance.speed)
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },

      // pinType: document.querySelector('').style.transform ? 'transform': 'fixed',
      scrollTop(value) {
        // console.log('scrollTop', arguments.length)

        if (locoScroll.current) {
          const value = arguments.length
            ? locoScroll.current.scrollTo(value, 0, 0)
            : locoScroll.current.scroll.instance.scroll.y;

          // console.log( 'scrollTOp',  value)
          return value;
        }
        return null;
      },
      fixedMarkers: true,

      scrollLeft() {
        // console.log('scrollLeft', arguments.length)
        if (locoScroll.current) {
          const value = arguments.length
            ? locoScroll.current.scrollTo(value, 0, 0)
            : document.querySelector(".track")
            ? -document.querySelector(".track").getBoundingClientRect().x
            : 0;

          // console.log( 'scrollLeft',  value)
          return value;
        }
        return null;
      },
    });

    const lsUpdate = () => {
      if (locoScroll.current) {
        locoScroll.current.update();
      }
    };

    window.addEventListener("resize", lsUpdate);
    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll.current) {
        window.removeEventListener("resize", lsUpdate);
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.current.destroy();
        window.locoInstance.destroy();
        window.locoInstance = false;
        locoInstance.set(null);
        locoScroll.current = null;
        scrollEl.style.transform = "initial";
        // docu
      }
    };
  }, [start]);

  useEffect(() => {
    // return;
    let idelId;

    const intervalId = setInterval(() => {
      const cb = () => {
        window.locoInstance && window.locoInstance.update();
        // ScrollTrigger.attach();
        // previousHeight = container.offsetHeight;
      };

      if ("requestIdleCallback" in window) {
        cancelIdleCallback(idelId);
        idelId = requestIdleCallback(cb);
      } else {
        cb();
      }
      // console.timeEnd('attach loco')
    }, 2400);

    return () => clearInterval(intervalId);
  }, []);

  return locoScroll;
}
