// noinspection DuplicatedCode

import { EventEmitter } from 'events'
import { distance, lerp } from './utils'
import EventUtil from './EventUtil'
import { object } from "prop-types"

// Calculate the viewport size

// Track the mouse position
// let mousepos = {x: 0, y: 0};

type MagnetType = {
  element: HTMLElement
  amounts: {
    trigger?: number
    stop?: number
    distance?: number
  },
  inView?: {
    rootMargin: string,
    threshold: number
  }
}

export default class MagnetElement {
  eventUtil = EventUtil.getInstance()
  element: HTMLElement;
  rect: DOMRect;

  distanceToTrigger: number
  distanceToStop: number
  amount = {
    // rect:Rect,
    trigger: 1,
    stop: 1,
    lerp: 0.1,
    distance: 0.5,
  }
  renderedStyles = {
    x: { previous: 0, current: 0, amt: 0.1 },
    y: { previous: 0, current: 0, amt: 0.1 },
  }
  state = {
    hover: false,
    reqAnimationId: 0,
  }
  inView: boolean;

  onResize: () => void
  disconnect: () => void;


   constructor(el: MagnetType) {
    console.log('constructor invoked')

     this.element = el.element
     this.amount = { ...this.amount, ...el?.amounts }

    // calculate size/position
    this.calculateSizePosition()
    // init events
    this.initEvents()

    this.state.reqAnimationId = requestAnimationFrame(() => this.render())

    this.startObserving(
       '0px',
       0
    )
  }

  startObserving(rootMargin, threshold){
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting)
          this.start()
        else
          this.stop()

      },
      {
        rootMargin: rootMargin,
        threshold: threshold
      }
    );
    observer.observe(this.element)
    this.disconnect = () => observer.disconnect();
  }

  calculateSizePosition() {
    // size/position
    this.rect = this.element.getBoundingClientRect()
    // the movement will take place when the distance from the mouse to the center of the button is lower than this value
    this.distanceToTrigger = this.rect.width * this.amount.trigger
    this.distanceToStop = this.rect.width * this.amount.stop
  }

  initEvents() {
    this.onResize = () => this.calculateSizePosition()
    window.addEventListener('resize', this.onResize)
    window.addEventListener('scroll', this.onResize)
  }

  stop() {
    cancelAnimationFrame(this.state.reqAnimationId)
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', this.onResize)
  }

  start() {
    this.stop()
    this.initEvents()
    this.state.reqAnimationId = requestAnimationFrame(() => this.render())
  }

  render() {
    // calculate the distance from the mouse to the center of the button
    const distanceMouseButton = distance(
      this.eventUtil.mousePos.x,
      this.eventUtil.mousePos.y,
      this.rect.left + this.rect.width / 2, //center
      this.rect.top + this.rect.height / 2 //center
    )

    // console.log(distanceMouseButton)

    // new values for the translations
    let x = 0
    let y = 0

    if (
      distanceMouseButton < this.distanceToTrigger ||
      (this.state.hover && distanceMouseButton < this.distanceToStop)
    ) {
      if (!this.state.hover)
        this.state.hover = true;

      x = (this.eventUtil.mousePos.x - (this.rect.left + this.rect.width / 2)) *
        this.amount.distance;

      y = (this.eventUtil.mousePos.y - (this.rect.top + this.rect.height / 2)) *
        this.amount.distance;

    }else if (this.state.hover)
      this.state.hover = false;

    this.renderedStyles.x.current = x;
    this.renderedStyles.y.current = y;

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        0.1
      )
    }

    this.element.style.transform = `translate3d(${this.renderedStyles.x.previous}px,
             ${this.renderedStyles.y.previous}px,
              0)`

    this.state.reqAnimationId = requestAnimationFrame(() => this.render())
  }
}
