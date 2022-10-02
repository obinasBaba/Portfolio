// noinspection JSIgnoredPromiseFromCall

import { gsap } from "gsap";
import { navigate } from "gatsby";

export class CircleTextController {
  static instance = null;

  started = false;

  static getInstance(el) {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new CircleTextController(el);
    return this.instance;
  }

  constructor(el) {
    // the SVG element
    this.DOM = { el: document.querySelector(".circles") };
    // SVG texts
    this.DOM.circleText = [
      ...this.DOM.el.querySelectorAll("text.circles__text"),
    ];
    this.DOM.button = document.querySelectorAll(".rotation-circle .enter");
    this.DOM.buttonTxt = document.querySelectorAll(".circles__text");
    this.DOM.enterCtrl = document.querySelector(".enter");
    // total
    this.circleTextTotal = this.DOM.circleText.length;
    this.track = document.querySelector("#projects");

    this.setup();
  }

  setup() {
    // need to set the transform origin
    // need to set the transform origin in the center
    gsap.set(this.DOM.circleText, { transformOrigin: "50% 50%" });
    // hide on start
    gsap.set([this.DOM.circleText], { opacity: 0 });
    // don't allow to hover
    gsap.set(this.DOM.enterCtrl, { pointerEvents: "none" });

    this.initEvents();
  }

  initEvents() {
    this.enterMouseEnterEv = () => {
      // gsap.killTweensOf([this.DOM.enterBackground,this.DOM.circleText]);

      gsap.to(this.DOM.circleText, {
        duration: 1,
        ease: "expo",
        scale: 1.15,
        rotation: (i) => (i % 2 ? "-=90" : "+=90"),
        opacity: 0.4,
      });

      gsap.to(this.DOM.button, {
        duration: 0.9,
        ease: "back.out",
        scale: 1.35,
      });
    };

    this.enterMouseLeaveEv = () => {
      // gsap.killTweensOf([DOM.enterBackground,this.DOM.circleText]);

      gsap.to(this.DOM.circleText, {
        duration: 1,
        ease: "expo",
        scale: 1,
        rotation: (i) => (i % 2 ? "+=120" : "-=120"),
        opacity: 1,
        stagger: {
          amount: -0.2,
        },
      });

      gsap.to(this.DOM.button, {
        duration: 0.9,
        ease: "back.out",
        scale: 1,
      });
    };

    this.DOM.enterCtrl.addEventListener("mouseenter", this.enterMouseEnterEv);
    this.DOM.enterCtrl.addEventListener("mouseleave", this.enterMouseLeaveEv);

    this.enterClickEv = () => this.enter();
    this.DOM.enterCtrl.addEventListener("click", this.enterClickEv);
  }

  start() {
    this.startTL = gsap
      .timeline()
      .addLabel("start", 0)
      // rotation for all texts
      .to(
        this.DOM.circleText,
        {
          duration: 3,
          ease: "expo.inOut",
          rotation: (i) => (i % 2 ? 90 : -90),
          stagger: {
            amount: 0.4,
          },
        },
        "start"
      )
      // scale in the texts & enter button and fade them in
      .to(
        [this.DOM.circleText, this.DOM.enterCtrl],
        {
          duration: 3,
          ease: "expo.inOut",
          startAt: { opacity: 0, scale: 0.8 },
          scale: 1,
          opacity: 1,
          stagger: {
            amount: 0.4,
          },
        },
        "start"
      )
      // at start+1 allow the hover over the enter ctrl
      .add(() => {
        gsap.set(this.DOM.enterCtrl, { pointerEvents: "auto" });

        gsap
          .timeline()
          .to(
            [...document.querySelectorAll(".rotation-circle .circles__text")],
            {
              rotation: (i) => (i % 2 ? "+=60" : "-=60"),
              scrollTrigger: {
                trigger: "#projects",
                scroller: "[data-scroll-container]",
                scrub: 1,
                start: () => "top 10",
                end: () => `+=${this.track.offsetHeight}`,
              },
            }
          );

        // STrigger.attach()
      }, "start+=2.5");

    this.started = true;
  }

  enter() {
    this.startTL.kill();

    gsap.set(this.DOM.enterCtrl, { pointerEvents: "none" });
    this.DOM.enterCtrl.removeEventListener(
      "mouseenter",
      this.enterMouseEnterEv
    );
    this.DOM.enterCtrl.removeEventListener(
      "mouseleave",
      this.enterMouseLeaveEv
    );

    // gsap.set([DOM.frame, DOM.content], {opacity: 1});

    gsap
      .timeline()
      .addLabel("start", 0)
      .to(
        this.DOM.enterCtrl,
        {
          duration: 0.6,
          ease: "back.in",
          scale: 0.2,
          opacity: 0,
        },
        "start"
      )
      .to(
        this.DOM.circleText,
        {
          duration: 0.8,
          ease: "back.in",
          scale: 0,
          opacity: 0,
          stagger: {
            amount: -0.4,
          },
        },
        "start"
      )

      .add(() => {
        navigate("/projects");
      }, "start+=1.3");
  }
}

export default CircleTextController;
