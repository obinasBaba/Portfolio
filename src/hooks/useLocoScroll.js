import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import LocoCss from "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  useEffect(() => {
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
    locoScroll.on("scroll", () => {ScrollTrigger.update();});

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

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
  }, [start]);
}
