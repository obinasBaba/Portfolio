import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useContext, useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { AppStateContext } from '../contexts/AppStateContext'
import Cursor from '../components/Cursor/Cursor'
import { debounce } from "lodash";

let timeout = 0

gsap.registerPlugin(ScrollTrigger)

export default function useLocoScroll (
  start, elementId = '[data-scroll-container="true"]') {

  const { moScroll } = useContext(AppStateContext)

  console.log('outLocoInvoked...')
  const locoScroll = useRef(null)

  useEffect(() => {
      console.log('LocoInvoked ---- --- --',
        start)

      if ( !start ) return;

      const scrollEl = document.querySelector(elementId);

      locoScroll.current = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        getDirection: true,
      });

      // whenever when we scroll loco update scrollTrigger
      locoScroll.current.on("scroll",
        arg => {
          ScrollTrigger.update();
          moScroll.x.set(arg.scroll.x)
          moScroll.y.set(arg.scroll.y)
          moScroll.limit.set(arg.limit.y)
          moScroll.scrollDirection.set(arg.direction)

          setTimeout(() => {
            // clearTimeout(timeout)
            Cursor.hideOnScroll()

            }, 500)

        });

      ScrollTrigger.scrollerProxy(scrollEl,
        {
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
              let value = arguments.length ? locoScroll.current.scrollTo(value,
                  0,
                  0)
                : locoScroll.current.scroll.instance.scroll.y;

              // console.log( 'scrollTOp',  value)
              return value;

            }
            return null;
          },
          fixedMarkers: true,

          scrollLeft (value) {
            // console.log('scrollLeft', arguments.length)
            if ( locoScroll.current ) {

              let value = arguments.length
                ? locoScroll.current.scrollTo(value,
                  0,
                  0)
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

      window.addEventListener('resize',
        lsUpdate)
      ScrollTrigger.addEventListener("refresh",
        lsUpdate);
      ScrollTrigger.refresh();

      setTimeout(() => {
          locoScroll.current.update()
        },
        2000)

      return () => {
        if ( locoScroll.current ) {
          window.removeEventListener('resize',
            lsUpdate)
          ScrollTrigger.removeEventListener("refresh",
            lsUpdate);
          locoScroll.current.destroy();
          locoScroll.current = null;
          console.log("Kill",
            locoScroll.current);
        }
      };
    },
    [start]);

  return locoScroll;
}
