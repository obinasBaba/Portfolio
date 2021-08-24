import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useEffect} from 'react'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import EventSubscribers from '../helpers/EventSubscribers'

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start, moScroll) {
  const events = EventSubscribers.getInstance();


  useEffect(() => {


    if (!start) return;
    let locoScroll = null;

    const scrollEl = document.querySelector('[data-scroll-container]');

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
    });

    // whenever when we scroll loco update scrollTrigger
    locoScroll.on("scroll", arg => {
      ScrollTrigger.update();
      moScroll.x.set(arg.scroll.x)
      moScroll.y.set(arg.scroll.y)
      moScroll.limit.set(arg.limit.y)
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      getBoundingClientRect(){
        return{
          top: 0, left: 0, width: window.innerWidth, height: window.innerHeight
        }
      },

      // pinType: document.querySelector('').style.transform ? 'transform': 'fixed',

      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },

      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x;
        }
        return null;
      },
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    window.addEventListener('resize', lsUpdate)
    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) {
        window.removeEventListener('resize', lsUpdate)
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
  }, [start]);
}
