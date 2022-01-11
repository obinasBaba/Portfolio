import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useContext, useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Cursor from '../components/Cursor'
import { MotionValueContext } from "../contexts/MotionStateWrapper";


gsap.registerPlugin(ScrollTrigger)

export default function useLocoScroll (
    start, elementId = '[data-scroll-container="true"]') {

  const { moScroll } = useContext(MotionValueContext)

  const locoScroll = useRef(null)

  useEffect(() => {
      console.log('LocoInvoked ---- --- --', start)

      const scrollEl = document.querySelector(elementId);

      window.locoInstance = locoScroll.current = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        getDirection: true,
          getSpeed: true
      })
          // console.log('locoInstance : ', window.locoInstance)

      // whenever when we scroll loco update scrollTrigger
      locoScroll.current.on("scroll",
        arg => {
          // console.time('Single onScroll');
          ScrollTrigger.update();
          moScroll.x.set(arg.scroll.x)
          moScroll.y.set(arg.scroll.y)
          moScroll.limit.set(arg.limit.y)
          moScroll.scrollDirection.set(arg.direction);

          (Math.abs(window.locoInstance.scroll.instance.speed) > 2) && Cursor.stopMouseAnimation()
            // console.log('ticking', window.locoInstance.scroll.instance.speed)


        });

      ScrollTrigger.scrollerProxy(scrollEl, {
          getBoundingClientRect () {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
            }
          },

          // pinType: document.querySelector('').style.transform ? 'transform': 'fixed',
          scrollTop (value) {
            // console.log('scrollTop', arguments.length)

            if ( locoScroll.current ) {
              let value = arguments.length ? locoScroll.current.scrollTo(value, 0, 0) : locoScroll.current.scroll.instance.scroll.y;

              // console.log( 'scrollTOp',  value)
              return value;

            }
            return null;
          },
          fixedMarkers: true,

          scrollLeft (value) {
            // console.log('scrollLeft', arguments.length)
            if ( locoScroll.current ) {

              let value = arguments.length ? locoScroll.current.scrollTo(value, 0, 0)
                : document.querySelector('.track') ?
                  -document.querySelector('.track').getBoundingClientRect().x : 0;

              // console.log( 'scrollLeft',  value)
              return value;

            }
            return null;
          },
        });

      const lsUpdate = () => {
        if ( locoScroll.current ) {
          locoScroll.current.update();
        }
      };

      window.addEventListener('resize',lsUpdate)
      ScrollTrigger.addEventListener("refresh",lsUpdate);
      ScrollTrigger.refresh();

      setTimeout(() => {
          locoScroll.current && locoScroll.current.update()
              window.locoInstance.update();

          },
        1500)

      return () => {
        if ( locoScroll.current ) {
          window.removeEventListener('resize', lsUpdate)
          ScrollTrigger.removeEventListener("refresh", lsUpdate);
          locoScroll.current.destroy();
            window.locoInstance.destroy()
            window.locoInstance = null
          locoScroll.current = null;
          console.log("Kill", locoScroll.current);
        }
      };
    },
    [start]);

  return locoScroll;
}
