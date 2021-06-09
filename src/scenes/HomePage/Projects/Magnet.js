
import { EventEmitter } from 'events'
// body color
import {distance, getMousePos, lerp} from '../../../helpers/utils'

const { calcWinsize } = require('../../../helpers/utils')
const bodyColor = getComputedStyle(document.body).getPropertyValue('--color-bg');

// Calculate the viewport size
let winsize = calcWinsize();
window.addEventListener('resize', () => winsize = calcWinsize());

// Track the mouse position
let mousepos = {x: 0, y: 0};
window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

export default class Magnet extends EventEmitter{

  constructor (el ) {
    super();

    // DOM elements
    // el: main button
    // text: inner text element
    this.DOM = {el: el};
    this.DOM.text = this.DOM.el.querySelector('.btn_text');
    this.DOM.textinner = this.DOM.el.querySelector('.btn_text-inner');
    this.DOM.decoTop = this.DOM.el.querySelector('.border-outer');
    this.DOM.decoBottom = this.DOM.el.querySelector('.border-inner');

    // amounts the button will translate/scale
    this.renderedStyles = {
      tx: {previous: 0, current: 0, amt: 0.1},
      ty: {previous: 0, current: 0, amt: 0.1},
      tx2: {previous: 0, current: 0, amt: 0.05},
      ty2: {previous: 0, current: 0, amt: 0.05}
    };

    // button state (hover)
    this.state = {
      hover: false
    };

    // calculate size/position
    this.calculateSizePosition();

    this.initEvents();
    // loop fn
    requestAnimationFrame(() => this.render());
  }

  calculateSizePosition(){
    this.rect = this.DOM.el.getBoundingClientRect();
    // the movement will take place when the distance from the mouse to the center of the button is lower than this value
    this.distanceToTrigger = this.rect.width*1.5;
  }

  initEvents() {
    this.onResize = () => this.calculateSizePosition();
    window.addEventListener('resize', this.onResize);
  }

  render() {
    // calculate the distance from the mouse to the center of the button
    const distanceMouseButton = distance(
      mousepos.x+window.scrollX,
      mousepos.y+window.scrollY,
      this.rect.left + this.rect.width/2,
      this.rect.top + this.rect.height/3
    );

    // console.log(distanceMouseButton)

    // new values for the translations and scale
    let x = 0;
    let y = 0;

    if ( distanceMouseButton < this.distanceToTrigger ) {
      if ( !this.state.hover ) {
        this.enter();
        console.log(distanceMouseButton)
      }
      x = (mousepos.x + window.scrollX - (this.rect.left + this.rect.width/2))*.2;
      y = (mousepos.y + window.scrollY - (this.rect.top + this.rect.height/2))*.2;
    }
    else if ( this.state.hover ) {
      this.leave();
    }

    this.renderedStyles['tx'].current = this.renderedStyles['tx2'].current = x;
    this.renderedStyles['ty'].current = this.renderedStyles['ty2'].current = y;

    for (const key in this.renderedStyles ) {
      this.renderedStyles[key].previous =
        lerp(this.renderedStyles[key].previous,
          this.renderedStyles[key].current,
          1
        );
    }

    this.DOM.decoTop.style.transform =
      `translate3d(${this.renderedStyles['tx'].previous}px, 
            ${this.renderedStyles['ty'].previous}px, 0)`;

    this.DOM.decoBottom.style.transform = `translate3d(${this.renderedStyles['tx2'].previous}px,
         ${this.renderedStyles['ty2'].previous}px, 0)`;

    this.DOM.text.style.transform = `translate3d(${this.renderedStyles['tx'].previous*0.5}px,
         ${this.renderedStyles['ty'].previous*0.5}px, 0)`;

    requestAnimationFrame(() => this.render());
  }

  enter() {
    console.log('emit enter')
    this.emit('enter');
    this.state.hover = true;

    this.DOM.el.classList.add('button--hover'); //button clr and border
    document.body.classList.add('active'); //cursor pointer

  }

  leave() {
    this.emit('leave');
    this.state.hover = false;

    this.DOM.el.classList.remove('button--hover');
    document.body.classList.remove('active');

  }
}