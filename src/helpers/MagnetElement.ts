// noinspection DuplicatedCode

import { EventEmitter } from 'events'
import { distance, lerp } from './utils'
import EventUtil from './EventUtil'
import { object } from 'prop-types'
import gsap from 'gsap'

// Calculate the viewport size

type MagnetType = {
  element: HTMLElement
  stop?: number
  distance?: number
}

export default class MagnetElement {
  events = EventUtil.getInstance()
  element: HTMLElement
  rect: DOMRect

  distanceToTrigger: number
  distanceToStop: number
  stop: number = 1
  distance: number = 0.32
  renderedStyles = {
    x: { previous: 0, current: 0, amt: 0.1 },
    y: { previous: 0, current: 0, amt: 0.1 },
  }
  reqAnimationId: number = undefined
  inView: boolean = true

  onResize: () => void
  scroll: { x: number; y: number }

  constructor(el: MagnetType) {
    console.log('constructor invoked')

    this.element = el.element
    this.stop = el.stop
    this.distance = el.distance

    this.initEvents()
  }

  startObserving(rootMargin, threshold) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        /*if (entry.isIntersecting)
          this.start()
        else
          this.stop()*/
      },
      {
        rootMargin: rootMargin,
        threshold: threshold,
      }
    )
    observer.observe(this.element)
    // this.disconnect = () => observer.disconnect();
  }

  calculateSizePosition() {
    // size/position
    this.rect = this.element.getBoundingClientRect()
    this.scroll = { x: window.scrollX, y: window.scrollY }
    this.distanceToStop = this.rect.width * this.stop
  }

  initEvents() {
    this.onResize = () => this.calculateSizePosition()
    window.addEventListener('resize', this.onResize)

    this.element.addEventListener('mouseenter', ev => {
      console.log('Enter')
      this.calculateSizePosition()
      this.loopRender()
    })
  }

  loopRender() {
    if (!this.reqAnimationId) {
      this.reqAnimationId = requestAnimationFrame(() => this.render())
    }
  }

  stopRendering(forceStop?: boolean) {
    if (this.reqAnimationId) {
      window.cancelAnimationFrame(this.reqAnimationId)
      this.reqAnimationId = undefined

      gsap.fromTo(
        this.element,
        {
          x: this.renderedStyles.x.previous,
          y: this.renderedStyles.y.previous,
        },
        {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'power3',
        }
      )

      this.renderedStyles.y.previous = this.renderedStyles.x.previous = 0
    }
  }

  start() {}

  destroy() {
    window.removeEventListener('resize', this.onResize)
  }

  render() {
    // console.log(distanceMouseButton)
    const distanceMouseButton = distance(
      this.events.mousePos.x,
      this.events.mousePos.y,
      this.rect.left + this.rect.width / 2, //center
      this.rect.top + this.rect.height / 2 //center
    )

    if (distanceMouseButton > this.distanceToStop) {
      return this.stopRendering()
    }

    const scrollDif = {
      x: this.scroll.x - window.scrollX,
      y: this.scroll.y - window.scrollY,
    }

    this.renderedStyles.x.current =
      (this.events.mousePos.x -
        (scrollDif.x + this.rect.left + this.rect.width / 2)) *
      this.distance

    this.renderedStyles.y.current =
      (this.events.mousePos.y -
        (scrollDif.y + this.rect.top + this.rect.height / 2)) *
      this.distance

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        0.1
      )
    }

    this.element.style.transform = `translate(${this.renderedStyles.x.previous}px, ${this.renderedStyles.y.previous}px)`

    this.reqAnimationId = requestAnimationFrame(() => this.render())
  }
}
