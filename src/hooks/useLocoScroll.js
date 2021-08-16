import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useEffect, useLayoutEffect} from 'react'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Subscribers from '../helpers/Subscribers'

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  let subs = Subscribers.getInstance();

  useEffect(() => {

    console.log('loco invoked', start)

    if (!start) return;
    let locoScroll = null;

    const scrollEl = document.querySelector("#main-container");

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });

    // whenever when we scroll loco update scrollTrigger
    locoScroll.on("scroll", arg => {
      ScrollTrigger.update();
      subs.scroll = arg.scroll
      // console.log(subs.scroll)
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      /*getBoundingClientRect(){
        return{
          top: 0, left: 0, width: window.innerWidth, height: window.innerHeight
        }
      },*/

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
