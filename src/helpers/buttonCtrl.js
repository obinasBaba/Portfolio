// noinspection DuplicatedCode

import {EventEmitter} from 'events';
import {calcWinsize, distance, getMousePos, lerp} from './utils'

// Calculate the viewport size
let winsize = calcWinsize();
window.addEventListener('resize', () => winsize = calcWinsize());

// Track the mouse position
let mousepos = {x: 0, y: 0};
window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

export default class ButtonCtrl extends EventEmitter {
    constructor(el) {
        super();
        // DOM elements
        // el: main button
        // text: inner text element
        this.DOM = {el: el};
        // amounts the button will translate
        this.renderedStyles = {
            tx: {previous: 0, current: 0, amt: 0.1},
            ty: {previous: 0, current: 0, amt: 0.1}
        };
        // button state (hover)
        this.state = {
            hover: false
        };
        // calculate size/position
        this.calculateSizePosition();
        // init events
        this.initEvents();
        // loop fn
        requestAnimationFrame(() => this.render());
    }

    calculateSizePosition() {
        // size/position
        this.rect = this.DOM.el.getBoundingClientRect();
        // the movement will take place when the distance from the mouse to the center of the button is lower than this value
        this.distanceToTrigger = this.rect.width * 1.5;
    }

    initEvents() {
        this.onResize = () => this.calculateSizePosition();
        window.addEventListener('resize', this.onResize);
        window.addEventListener('scroll', this.onResize)
    }

    render() {
        // calculate the distance from the mouse to the center of the button
        const distanceMouseButton = distance(
          mousepos.x ,
          mousepos.y ,
          this.rect.left + this.rect.width / 2, //center
          this.rect.top + this.rect.height / 2  //center
        );

        // new values for the translations
        let x = 0;
        let y = 0;

        if (distanceMouseButton < this.distanceToTrigger) {
            if (!this.state.hover) {
                this.enter();
            }
            x = (mousepos.x - (this.rect.left + this.rect.width / 2)) * .3;
            y = (mousepos.y - (this.rect.top + this.rect.height / 2)) * .3;

        } else if (this.state.hover) {
            this.leave();
            // return  ;
        }

        this.renderedStyles['tx'].current = x;
        this.renderedStyles['ty'].current = y;

        for (const key in this.renderedStyles) {
            this.renderedStyles[key].previous = lerp(
                this.renderedStyles[key].previous,
                this.renderedStyles[key].current,
                this.renderedStyles[key].amt
            );
        }

        this.DOM.el.style.transform =
            `translate3d(${this.renderedStyles['tx'].previous}px, ${this.renderedStyles['ty'].previous}px, 0)`;

        // this.DOM.text.style.transform =
        //     `translate3d(${this.renderedStyles['tx'].previous * 0.5}px, ${this.renderedStyles['ty'].previous * 0.5}px, 0)`;

        requestAnimationFrame(() => this.render());
    }

    enter() {
        this.emit('enter');
        this.state.hover = true;
        this.DOM.el.classList.add('button--hover');
        document.body.classList.add('active');
    }

    leave() {
        this.emit('leave');
        this.state.hover = false;
        this.DOM.el.classList.remove('button--hover');
        document.body.classList.remove('active');
    }
}
