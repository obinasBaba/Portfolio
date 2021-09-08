// @ts-ignore
import Paper, { Group, Path} from 'paper'
// @ts-ignore
import SimplexNoise from 'simplex-noise'
import { lerp, map } from '../../helpers/utils'
import EventUtil from '../../helpers/EventUtil'


type Circle = {
  self: typeof Paper.Path.RegularPolygon;
  path:  typeof Paper.Path.RegularPolygon,
  coordinates: [ [x: number, y: number] ]
  noiseObject: SimplexNoise[ ]
}

type Pointer = {
  path: typeof Paper.Path.RegularPolygon,
  self: typeof Paper.Path.RegularPolygon
  coordinates: [ [x: number, y: number] ]
  noiseObject: SimplexNoise[ ]
}

class PaperCursor {
  events;

  lastX = 0
  lastY = 0
  pLastY = 0
  pLastX = 0

  //noisiness
  noiseScale = 150 // speed
  noiseRange = 2.1 // range of distortion

  isStuck = false
  pointed = false
  isNoise = true
  strokeWidth = 1.5
  segments = 10
  radius = 25
  stuckPos = {
    x: 0,
    y: 0,
  }
  maxBounds = {
    width: 65,
    height: 65,
  }

  circles: Circle []
  cClone: typeof Paper.Path.RegularPolygon
  circleGroup: typeof Paper.Group;

  pointer: Pointer
  pClone: typeof Paper.Path.RegularPolygon
  pointerGroup: typeof Paper.Group
  normalColor: paper.Color = new Paper.Color('#78809EFF')
  focusedColor = new Paper.Color('#a4b5c0')


  readonly canvas: HTMLCanvasElement
  private static Instance: PaperCursor = null

  static getInstance(canvas) {
    if (document.querySelector('canvas') === null) return null;

    if (this.Instance === null) {
      this.Instance = new PaperCursor(canvas)
      return this.Instance
    } else {
      return this.Instance
    }
  }

  private constructor(canvas: HTMLCanvasElement) {
    this.canvas = document.querySelector('canvas.canvas')
    this.events =  EventUtil.getInstance()

    this.initCanvas()

    console.log('CANVASE ____ INSTANTIATED _______', this.canvas)
  }

  private getCircles(args) : Circle {
    const { segments, radius, color, strokeWidth, fillColor } = args
    const polygon = new Paper.Path.RegularPolygon(
      Paper.view.center,
      segments,
      radius
    )

    polygon.smooth()
    const clone = polygon.clone({ insert: false })

    if (strokeWidth) {
      polygon.strokeColor = color
      polygon.strokeWidth = strokeWidth
    } else polygon.fillColor = fillColor

    // let initialWidth = clone.bounds.width

    const coordinates = polygon.segments.reduce((p, c, i) => {
      p.push([c.point.x, c.point.y])
      return p
    }, [])

    return {
      self: clone,
      path: polygon,
      noiseObject: polygon.segments.map(() => new SimplexNoise()),
      coordinates,
    }
  }

  private getPointer(): Pointer {
    // const { segments, radius, color, strokeWidth, fillColor } = args
    const pointer = new Paper.Path.RegularPolygon(
      Paper.view.center,
      this.segments,
      6.5
    )

    pointer.smooth()
    const clone = pointer.clone({ insert: false })
    pointer.fillColor = this.normalColor;

    const coordinates = pointer.segments.reduce((p, c, i) => {
      p.push([c.point.x, c.point.y])
      return p
    }, [])

    return {
      path: pointer,
      self: clone,
      noiseObject: pointer.segments.map(() => new SimplexNoise()),
      coordinates,
    }
  }

  initialize() {
     this.circles = [0, 1].map(() =>
      this.getCircles({
        segments: this.segments,
        radius: this.radius,
        strokeWidth: this.strokeWidth,
        color: new Paper.Color('#78809EFF'),
      })
    )
    this.cClone = this.circles[0].self
    this.circleGroup = new Paper.Group(this.circles.map(p => p.path))


    this.pointer = this.getPointer()
    this.pClone = this.pointer.self
    this.pointerGroup = new Paper.Group([this.pointer.path])

    this.pointerGroup.applyMatrix = this.circleGroup.applyMatrix = false;

  }

  scalePolygon(amount)  {
    //scale the clone for reference

    //get coordinates with out noise( normalize )
    // if (this.isNoise)
      this.circles.forEach(({ path, coordinates }) => {
        path.segments.forEach((segment, i) => {
          segment.point.set(coordinates[i][0], coordinates[i][1])
        })

        this.isNoise = false
      })

    this.cClone.scale(amount)


    //scale the circles them and recorde the scaled coordinates
    this.circles.forEach(({ path }) => path.scale(amount))

    // console.log('SCALE:- ', amount, this.circles[0].path.bounds.width)
  }

  async startStuck(x: number, y: number) {
    this.stuckPos.x = x
    this.stuckPos.y = y
    this.isStuck = true

    Paper.view.onFrame = event =>{
      // console.time('Stuck');



      if (this.isStuck){

        this.lastX = lerp(this.lastX, this.stuckPos.x, 0.08)
        this.lastY = lerp(this.lastY, this.stuckPos.y, 0.08)
        this.circleGroup.position = new Paper.Point(this.lastX, this.lastY)
        this.pointerGroup.position = new Paper.Point(this.events.mousePos.x, this.events.mousePos.y)

        this.isStuck = this.circleGroup.position.isClose(
          new Paper.Point(this.events.mousePos.x, this.events.mousePos.y), 60)

      }else {
        this.updatePosition()
      }

      this.circles.forEach(({ path, coordinates }) => {
        path.segments.forEach((segment, i) => {
          segment.point.set(coordinates[i][0], coordinates[i][1])
        })

        this.isNoise = false
      })

      if (this.isStuck && Math.floor(this.cClone.bounds.width) < this.maxBounds.width) {
        this.cClone.scale(1.015)
        this.circles.forEach(({ path }) => path.scale(1.015))
        // console.log( 'up', this.cClone.bounds.width)

        //65.367032903977130978930453580233
      } else if (!this.isStuck && Math.floor(this.cClone.bounds.width) > 50 )
      {
        this.cClone.scale(.971)
        this.circles.forEach(({ path }) => path.scale(.971))
        // console.log('down', this.cClone.bounds.width)

      }else if(!this.isStuck && Math.floor(this.cClone.bounds.width) <= 50) {
        this.normalNoise()
      }

      this.circles.forEach(({ path }, i) => {
        this.circles[i].coordinates = path.segments.reduce((p, c) => {
          p.push([c.point.x, c.point.y])
          return p
        }, [])
      })

      // this.updateCoordinates()


      this.noise(event)
      // console.timeEnd('Stuck')
    }
  }

  set focus(focused){
    Paper.view.onFrame = async event => {
      // console.time('Stuck');
      this.updatePosition();

      this.circles.forEach((circle) => {
       this.clearNoise(circle)
        this.isNoise = false
      })

      // 50.0000008508689
      if (focused && Math.floor(this.cClone.bounds.width) > 0) {
        this.circleGroup.opacity = this.circleGroup.opacity * .82
        this.pointer.path.fillColor = this.focusedColor

        this.cClone.scale(.87)

        this.circles.forEach(({ path }) => path.scale(.87))
        // console.log( 'Down', this.cClone.bounds.width)

        //65.367032903977130978930453580233
      }
      else if (!focused && Math.floor(this.cClone.bounds.width) < 50 ) {
        this.circleGroup.opacity = 1
        this.pointer.path.fillColor = this.normalColor

        this.cClone.scale(1.224)
        this.circles.forEach(({ path }) => path.scale(1.224))
        // console.log('UP', this.cClone.bounds.width)

      }
      else if(!focused && Math.floor(this.cClone.bounds.width) === 50) {
        // console.log('normal', this.cClone.bounds.width)
        return this.normalNoise()
      }

      this.circles.forEach((circle, i) => {
        this.updateCoordinates(circle)
      })

      this.noise(event)
      // console.timeEnd('Stuck')
    }
  }

  set isPointed(pointed){

    Paper.view.onFrame = async event => {
      // console.time('Pointed');

      this.updatePosition()

      if (this.isNoise) { //normalize the everything

        this.circles.forEach((circle) => {
          this.clearNoise(circle)
        })

        this.clearNoise(this.pointer)

        this.isNoise = false
      }

      if (pointed){

        if (Math.floor(this.cClone.bounds.width) > 43) {

          this.cClone.scale(0.9941)
          this.circles.forEach(({ path }) => path.scale(0.9941))

          // console.log('DOWN: ', 'circle: ', this.cClone.bounds.width)
        } // Circle DOWN

        if (Math.floor(this.pClone.bounds.width) < 40) {
          this.pClone.scale(1.055)
          this.pointer.path.scale(1.055)
          // console.log('UP: ', 'pointer : ', this.pClone.bounds.width)
        } // Pointer UP
      }
      else if (!this.pointed &&
        (Math.floor(this.pClone.bounds.width) > 13
          || Math.floor(this.cClone.bounds.width) < 50 ) ) {

        if (Math.floor(this.pClone.bounds.width) > 13) {
          this.pointer.path.scale(0.945)
          this.pClone.scale(0.945)
          // console.log('DOWN: ', 'pointer : ', this.pointer.path.bounds.width)
        } //pointer down

        if (Math.floor(this.cClone.bounds.width) < 50) {
          // this.scalePolygon(1.008)
          this.circles.forEach(({ path }) => path.scale(1.007))
          this.cClone.scale(1.007)
          // console.log('UP: ', 'circle: ', this.cClone.bounds.width)
        } //circle up
      }
      else {
        // console.log('NORMAL NOISE')
        this.isNoise = true
        this.normalNoise()
      }

      this.circles.forEach((circle, i) => {
        this.updateCoordinates(circle)
      })

      this.updateCoordinates(this.pointer)

      this.isNoise = true

      this.noise(event)

      // console.timeEnd('Pointed')
    }
  }

  updatePosition(){
    this.lastX = lerp(this.lastX, this.events.mousePos.x, 0.14)
    this.lastY = lerp(this.lastY, this.events.mousePos.y, 0.14)

    this.circleGroup.position = new Paper.Point(this.lastX, this.lastY)
    this.pointerGroup.position = new Paper.Point(this.events.mousePos.x, this.events.mousePos.y)
  }

  clearNoise(polygon : Circle | Pointer){
    polygon.path.segments.forEach((s,i) => {
      s.point.set(
        polygon.coordinates[i][0],
        polygon.coordinates[i][1]
      )
    })
  }

  noise(event){
    for (let i = 0; i < this.segments; i++) {

      this.circles.forEach((
        {noiseObject, path, coordinates}, index) => {
        const noiseX = noiseObject[i].noise2D(event.count / this.noiseScale, 0)
        const noiseY = noiseObject[i].noise2D(event.count / this.noiseScale, 1)

        const distortionX = map(noiseX, -1, 1, this.isStuck
          ? -3.5 : -this.noiseRange, this.isStuck ? 3.5 : this.noiseRange)
        const distortionY = map(noiseY, -1, 1, this.isStuck
          ? -3.5 : -this.noiseRange, this.isStuck ? 3.5 : this.noiseRange)

        const newX = coordinates[i][0] + distortionX // accessing x
        const newY = coordinates[i][1] + distortionY // accessing y

        path.segments[i].point.set(newX, newY)
        path.smooth()

        if (index === 0){
          const pDisX = map(noiseX, -1, 1, this.pointed ? -1.5 : -.52, this.pointed ? 1.5 : .52)
          const pDisY = map(noiseY, -1, 1, this.pointed ? -1.5 : -.52, this.pointed ? 1.5 : .52)

          const newPX = this.pointer.coordinates[i][0] + pDisX // accessing x
          const newPY = this.pointer.coordinates[i][1] + pDisY // accessing y

          // console.log(distortionX, distortionY)

          this.pointer.path.segments[i].point.set(newPX, newPY)
          this.pointer.path.smooth()
        }

      })
    }
  }

  coordinatesWithoutNoise  ()  {
    if (this.isNoise) {
      for (let i = 0; i < this.segments; i++) {
        this.pointer.path.segments[i].point.set(
          this.pointer.coordinates[i][0],
          this.pointer.coordinates[i][1]
        )

        this.circles.forEach(({path, coordinates} ) => {
          path.segments[i].point.set(
            coordinates[i][0],
            coordinates[i][1]
          )
        })
      }

      this.isNoise = false
    }
  }

  updateCoordinates(polygon : Circle | Pointer){
    polygon.coordinates = polygon.path.segments.reduce((p, c) => {
      p.push([c.point.x, c.point.y])
      return p
    }, [])

  }

  normalNoise(){
    Paper.view.onFrame = event => {
      // console.time('Normal');

      this.updatePosition()
      this.noise(event)

      // console.timeEnd('Normal')

    }
  }

  initCanvas() {
    console.log('initCanvas')
    Paper.setup(this.canvas)

    this.initialize()
    console.log(this.cClone.bounds.width, this.pointer.path.bounds.width)
    this.normalNoise()

  }

  reInit() {
    Paper.view.remove()
    this.initCanvas()
    Paper.view.update()
  }

  destroy() {
    Paper.project.remove();
    Paper.view.remove()
  }
}

export default PaperCursor
