import {ease} from '../../helpers/glsEasings'

class OverlayController {

  static instance = null;


  static getInstance(element){
    if( this.instance === null){
      this.instance = new OverlayController(element);
      return this.instance
    }else{
      return this.instance;
    }
  }

  constructor(elm) {
    this.elm = elm; // the parent SVG
    this.path = elm.querySelectorAll('path'); //// Path elements in parent SVG. These are the layers of the overlay.
    this.numPoints = 10; //Number of control points for Bezier Curve.
    this.duration = 900; //Animation duration of one path element.
    this.delayPointsArray = []; // Array of control points for Bezier Curve
    this.delayPointsMax = 280; // Max of delay value in all control points.
    this.delayPerPath = 250; // Delay value per path.
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }

  toggle(open) {
    if (this.isAnimating) {
      return false;
    }

    if ( open && !this.isOpened || !open && this.isOpened  ){
      // console.log('inside')

      this.isAnimating = true;
      for (let i = 0; i < this.numPoints; i++) {
        this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
      }
      if (this.isOpened === false) {
        this.open();
      } else {
        setTimeout(() => this.close(), 250)
      }
    }

  }

  open() {

    this.isOpened = true;
    this.elm.classList.add('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
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
      const max = Math.max(time - this.delayPointsArray[i], 0);
      const glsEase = ease.cubicInOut(Math.min( max / this.duration, 1));
      points[i] = (1 - glsEase ) * 100
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
        let generatedPath = this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i));
        this.path[i].setAttribute('d', generatedPath);
      }
    } else {
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
      }
    }
  }

  renderLoop() {
    this.render();
    if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
      requestAnimationFrame(() => this.renderLoop());
    }
    else {
      this.isAnimating = false;
    }
  }
  
  click(open){
    if (this.isAnimating) {
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