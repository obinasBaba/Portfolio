import {ease} from '../../helpers/glsEasings'

class OverlayController {

  static instance = new Map();
  static isAnimating = false;
  static  duration = 900;
  static  delayPointsMax = 280;
  static  delayPerPath = 250;


  static getInstance(name){
    if ( !name ) return null;

    this.duration = 900; //Animation duration of one path element.

    this.delayPointsMax = 280; // Max of delay value in all control points.

    this.delayPerPath = 250; // Delay value per path.


    if( this.instance.get(name)){
      return this.instance.get(name)
    }else{
      this.instance.set(name, new OverlayController(name))
      return this.instance.get(name);
    }
  }

  constructor(name) {
    this.elm = document.body.querySelector(`.${name}`); // the parent SVG
    this.path = this.elm.querySelectorAll('path'); //// Path elements in parent SVG. These are the layers of the overlay.
    this.numPoints = 10; //Number of control points for Bezier Curve.
    this.delayPointsArray = []; // Array of control points for Bezier Curve
    this.timeStart = Date.now();
    this.isOpened = false;
    // this.isAnimating = false;
  }

  toggle(open, options = {
    duration: OverlayController.duration,
    delayPointsMax: OverlayController.delayPointsMax,
    delayPerPath: OverlayController.delayPerPath
  }) {

    if ( OverlayController.isAnimating )
      return

    if ( options ) {
      OverlayController.duration = options.duration;
      OverlayController.delayPointsMax= options.delayPointsMax
      OverlayController.delayPerPath= options.delayPerPath
    }

    // OverlayController.duration  = .1
    // OverlayController.delayPerPath = 0

    OverlayController.isAnimating = true;
    for (let i = 0; i < this.numPoints; i++) {
      // const range = 4 * Math.random() + 6;
      // const radian = i / (this.numPoints - 1) * Math.PI;
      // this.delayPointsArray[i] = (Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4 * OverlayController.delayPointsMax;
      this.delayPointsArray[i] = Math.max(Math.random(), 0.2) * OverlayController.delayPointsMax;
    }

    if ( open  ){

      this.open();

    }else {

      this.close()

      // setTimeout(() => this.close(), 250)
    }

    return this
  }

  open() {

    this.isOpened = true;
    this.elm.classList.add('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();

    document.body.classList.add('loading-done')

  }

  close() {

    this.isOpened = false;
    this.elm.classList.remove('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }

  updatePath(time) {
    const points = [];
    for (let i = 0; i < this.numPoints; i++) {
      points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / OverlayController.duration, 1))) * 100
    }

    let str = '';
    str += (this.isOpened) ? `M 0 0 V ${points[0]}` : `M 0 ${points[0]}`;
    for (let i = 0; i < this.numPoints - 1; i++) {
      const p = (i + 1) / (this.numPoints - 1) * 100;
      const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
      str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
    }
    str += (this.isOpened) ? `V 100 H 0` : `V 0 H 0`;
    return str;
  }

  render() {
    if (this.isOpened) {
      for (let i = 0; i < this.path.length; i++) {
        let generatedPath = this.updatePath(Date.now() - (this.timeStart + OverlayController.delayPerPath * i));
        this.path[i].setAttribute('d', generatedPath);
      }
    } else {
      for (let i = 0; i < this.path.length; i++) {
        let generatedPath = this.updatePath(Date.now() - (this.timeStart + OverlayController.delayPerPath * (this.path.length - i - 1)))
        this.path[i].setAttribute('d', generatedPath);
      }
    }
  }

  renderLoop(fast) {

    this.render();

    if (Date.now() - this.timeStart <
      OverlayController.duration + OverlayController.delayPerPath
      * (this.path.length - 1) + OverlayController.delayPointsMax) {

      requestAnimationFrame(() => this.renderLoop());
    }
    else {
      OverlayController.isAnimating = false;
    }
  }

  click(open){
    if (OverlayController.isAnimating) {
      return false;
    }


    this.toggle();
  }
}

/*
* import * as Path from "path"


class OverlayController {

  private readonly elm : SVGElement // the parent SVG

  private path : SVGPathElement[]; //// Path elements in parent SVG. These are the layers of the overlay.
  private numPoints = 10; //Number of control points for Bezier Curve.
  private duration = 900; //Animation duration of one path element.
  private delayPointsArray = []; // Array of control points for Bezier Curve
  private delayPointsMax = 300; // Max of delay value in all control points.
  private delayPerPath = 250; // Delay value per path.
  private timeStart = Date.now();
  private isOpened = false;
  private isAnimating = false;

  constructor(elm) {

  }
}*/

export default OverlayController;