// noinspection DuplicatedCode

import { EventEmitter } from 'events'
import { distance, lerp } from './utils'
import EventUtil from './EventUtil'

// Calculate the viewport size

// Track the mouse position
// let mousepos = {x: 0, y: 0};

type MagnetTypes = {
  element: HTMLElement
  amounts: {
    trigger?: number
    stop?: number
    distance: number
  }
}

export default class MagnetElement extends EventEmitter {
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

  onResize: () => void

  constructor(el: MagnetTypes) {
    super()
    this.element = el.element
    this.amounts = { ...this.amounts, ...el?.amounts }
    this.onResize = () => this.calculateSizePosition()

    // calculate size/position
    this.calculateSizePosition()
    // init events
    this.initEvents()
    // loop fn
    this.state.reqAnimationId = requestAnimationFrame(() => this.render())
  }

  calculateSizePosition() {
    // size/position
    this.rect = this.element.getBoundingClientRect()
    // the movement will take place when the distance from the mouse to the center of the button is lower than this value
    this.distanceToTrigger = this.rect.width * this.amounts.trigger
    this.distanceToStop = this.rect.width * this.amounts.stop
  }

  initEvents() {
    // window.addEventListener('resize', this.onResize)
    // window.addEventListener('scroll', this.onResize)
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

    console.log(distanceMouseButton)

    // new values for the translations
    let x = 0
    let y = 0

    if (
      distanceMouseButton < this.distanceToTrigger ||
      (this.state.hover && distanceMouseButton < this.distanceToStop)
    ) {
      if (!this.state.hover) this.enter()

      x = (this.eventUtil.mousePos.x - (this.rect.left + this.rect.width / 2)) * this.amounts.distance
      y = (this.eventUtil.mousePos.y - (this.rect.top + this.rect.height / 2)) * this.amounts.distance

    } else if (this.state.hover) {
      this.leave()
    }

    this.renderedStyles.x.current = x
    this.renderedStyles.y.current = y

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt
      )
    }

    this.element.style.transform = `translate3d(${this.renderedStyles.x.previous}px,
             ${this.renderedStyles.y.previous}px,
              0)`

    this.state.reqAnimationId = requestAnimationFrame(() => this.render())
  }

  enter() {
    this.emit('enter')
    this.state.hover = true
    // this.el.classList.add('button--hover');
    // document.body.classList.add('active');
  }

  leave() {
    this.emit('leave')
    this.state.hover = false
    // this.el.classList.remove('button--hover');
    // document.body.classList.remove('active');
  }
}
