// noinspection DuplicatedCode

import { EventEmitter } from 'events'
import { distance, lerp } from './utils'
import EventUtil from './EventUtil'
import { object } from "prop-types"
import { debounce } from "lodash"

// Calculate the viewport size

// Track the mouse position
// let mousepos = {x: 0, y: 0};

type MagnetType = {
  rect: DOMRect
  dom: HTMLElement
  distanceToTrigger: number
  distanceToStop: number
  amounts: {
    trigger: number
    stop: number
    distance: number
  },
  inView: {
    rootMargin: string,
    threshold: number
  },
  renderedStyles: {
    x: { previous: 0, current: 0, amt: 0.1 },
    y: { previous: 0, current: 0, amt: 0.1 },
  }
  state : {
    hover: boolean,
    reqAnimationId: number,
  },
  onResize: EventListener,
  onDestroy?: () => void
}

export default class MagnetElement {
  eventUtil = EventUtil.getInstance()
  element: HTMLElement
  rect: DOMRect

  distanceToTrigger: number
  distanceToStop: number
  amounts = {
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

  private readonly elements : MagnetType[] = [];

  onResize: () => void
  disconnect: () => void;

  static Instance: MagnetElement = null;

  static getInstance() : MagnetElement{
    if (this.Instance === null) {
      {
        this.Instance = new MagnetElement();
        return this.Instance;
      }
    }
    else{
      return this.Instance;
    }
  }

  private constructor() {
    // console.log('constructor invoked')
    this.element = document.querySelector('.magnet');
    let allElements = document.querySelectorAll('.magnet');
    // this.onResize = () => this.calculateSizePosition()

    allElements.forEach((value, index) => {
      let element = value as HTMLElement;

      let magnetElement : MagnetType = {
        dom: element,
        amounts: {
          trigger: 1,
          stop: 1,
          distance: .5
        },
        inView: {
          rootMargin: '0px',
          threshold: 0
        },
        state: {
          hover: false,
          reqAnimationId: 0,
        },
        renderedStyles: {
          x: { previous: 0, current: 0, amt: 0.1 },
          y: { previous: 0, current: 0, amt: 0.1 },
        },
        distanceToStop: 0,
        distanceToTrigger: 0,
        rect: value.getBoundingClientRect(),
        onResize: debounce(() => this.calculateSizePosition(index), 500)
      }

      this.elements.push(magnetElement)

      this.startObserving('0px', 0, index)
      this.calculateSizePosition(index)
      this.initEvents(index)


    })

    // calculate size/position
    // init events
  }

  getAttr( element: HTMLElement ){

  }

  startObserving(rootMargin, threshold: number, index: number){
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting)
          this.start(index)
        else
          this.stop(index)


      },
      {
        rootMargin: rootMargin,
        threshold: threshold
      }
    );
    observer.observe(this.elements[index].dom)
    this.elements[index].onDestroy = () => observer.disconnect();
  }

  calculateSizePosition(index: number) {
    const element = this.elements[index]

    // size/position
    element.rect = element.dom.getBoundingClientRect()
    // the movement will take place when the distance from the mouse to the center of the button is lower than this value
    element.distanceToTrigger = element.rect.width * element.amounts.trigger
    element.distanceToStop = element.rect.width * element.amounts.stop
  }

  initEvents(index) {
    const onResize = this.elements[index].onResize;

    window.addEventListener('resize',  onResize)
    window.addEventListener('scroll', onResize)
  }

  stop(index) {

    cancelAnimationFrame(this.elements[index].state.reqAnimationId)
    window.removeEventListener('resize', this.elements[index].onResize)
    window.removeEventListener('scroll', this.elements[index].onResize)
  }

  start(index) {
    this.stop(index)
    this.initEvents(index)
    this.elements[0].state.reqAnimationId = requestAnimationFrame(() => this.render(index))
  }

  render(index) {
    // calculate the distance from the mouse to the center of the button
    const distanceMouseButton = distance(
      this.eventUtil.mousePos.x,
      this.eventUtil.mousePos.y,
      this.elements[index].rect.left + this.elements[index].rect.width / 2, //center
      this.elements[index].rect.top + this.elements[index].rect.height / 2 //center
    )

    // console.log(distanceMouseButton)

    // new values for the translations
    let x = 0
    let y = 0

    if (
      distanceMouseButton < this.elements[index].distanceToTrigger ||
      (this.elements[index].state.hover && distanceMouseButton < this.elements[index].distanceToStop)
    ) {


      x = (this.eventUtil.mousePos.x - (this.elements[index].rect.left + this.elements[index].rect.width / 2))
        * this.elements[index].amounts.distance
      y = (this.eventUtil.mousePos.y - (this.elements[index].rect.top + this.elements[index].rect.height / 2))
        * this.elements[index].amounts.distance

    }

    this.renderedStyles.x.current = x
    this.renderedStyles.y.current = y

    for (const key in this.elements[index].renderedStyles) {
      this.elements[index].renderedStyles[key].previous = lerp(
        this.elements[index].renderedStyles[key].previous,
        this.elements[index].renderedStyles[key].current,
        this.elements[index].renderedStyles[key].amt
      )
    }



    this.elements[index].dom.style.transform = `translate3d(${this.elements[index].renderedStyles.x.previous}px,
             ${this.elements[index].renderedStyles.y.previous}px,
              0)`

    this.elements[index].state.reqAnimationId = requestAnimationFrame(() => this.render(index))
  }
}
