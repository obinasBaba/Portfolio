// @ts-ignore
import Paper, { Group, Path } from 'paper'
// @ts-ignore
import SimplexNoise from 'simplex-noise'
import { lerp, map } from '../../helpers/utils'
import EventUtil from '../../helpers/EventUtil'

const events = EventUtil.getInstance()

class PaperCursor {
  lastX = 0
  lastY = 0
  pLastY = 0
  pLastX = 0

  // x = 0
  // y = 0

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

  readonly canvas: HTMLCanvasElement
  private static Instance: PaperCursor = null

  static getInstance(canvas) {
    if (this.Instance === null) {
      this.Instance = new PaperCursor(canvas)
      return this.Instance
    } else {
      return this.Instance
    }
  }

  private constructor(canvas: HTMLCanvasElement) {
    this.canvas = document.querySelector('canvas.canvas')

    this.initCanvas()

    console.log('CANVASE ____ INSTANTIATED _______')
  }

  getPolygon(args) {
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

    let initialWidth = clone.bounds.width

    const coordinates = polygon.segments.reduce((p, c, i) => {
      p.push([c.point.x, c.point.y])
      return p
    }, [])

    return {
      polygon,
      clone,
      noiseObjects: polygon.segments.map(() => new SimplexNoise()),
      coordinates,
      initialWidth,
    }
  }

  getPointer() {
    // const { segments, radius, color, strokeWidth, fillColor } = args
    const pointer = new Paper.Path.RegularPolygon(
      Paper.view.center,
      this.segments,
      6.5
    )

    pointer.smooth()
    const clone = pointer.clone({ insert: false })
    pointer.fillColor = '#78809EFF'
    const initialWidth = clone.bounds.width

    const coordinates = pointer.segments.reduce((p, c, i) => {
      p.push([c.point.x, c.point.y])
      return p
    }, [])

    return {
      pointer,
      pointerGroup: new Paper.Group([pointer]),
      clone,
      noiseObjects: pointer.segments.map(() => new SimplexNoise()),
      coordinates,
      initialWidth,
    }
  }

  initialize() {
    const polygons = [0, 1].map(() =>
      this.getPolygon({
        segments: this.segments,
        radius: this.radius,
        strokeWidth: this.strokeWidth,
        color: new Paper.Color('#78809EFF'),
      })
    )

    const group = new Paper.Group(polygons.map(p => p.polygon))
    group.applyMatrix = false

    return {
      polygons,
      group,
    }
  }

  startStuck(x: number, y: number) {
    this.stuckPos.x = x
    this.stuckPos.y = y
    this.isStuck = true
  }

  initCanvas() {
    console.log('initCanvas')

    //noisiness
    const noiseScale = 150 // speed
    const noiseRange = 2.1 // range of distortion

    Paper.setup(this.canvas)

    const { polygons, group } = this.initialize()
    const cClone = polygons[0].clone //for short name ref
    const initialCircleWidth = polygons[0].initialWidth //for short name ref

    let {
      pointer,
      pointerGroup,
      clone: pClone,
      coordinates: pCoordinates,
    } = this.getPointer()
    pointerGroup.applyMatrix = false
    let pNoiseRange = 0.6 // range of distortion

    const initialPointerWidth = pointer.bounds.width
    console.log(
      'pointer :',
      initialPointerWidth,
      'circle: ',
      initialCircleWidth
    )

    const scalePolygon = amount => {
      //scale the clone for reference
      cClone.scale(amount)

      //get coordinates with out noise
      if (this.isNoise)
        polygons.forEach(({ polygon, coordinates }) => {
          polygon.segments.forEach((segment, i) => {
            segment.point.set(coordinates[i][0], coordinates[i][1])
          })

          this.isNoise = false
        })

      //scale the circles them and recorde the scaled coordinates
      polygons.forEach(({ polygon }) => polygon.scale(amount))
    }

    Paper.view.onFrame = event => {
      // console.time('paper');

      if (this.isStuck) {
        // disable the stuck if the mouse is away some distance
        this.isStuck = group.position.isClose(
          new Paper.Point(events.mousePos.x, events.mousePos.y),
          60
        )

        //stuck the circle
        if (this.lastX !== this.stuckPos.x && this.lastX !== this.stuckPos.y) {
          this.lastX = lerp(this.lastX, this.stuckPos.x, 0.08)
          this.lastY = lerp(this.lastY, this.stuckPos.y, 0.08)
          group.position = new Paper.Point(this.lastX, this.lastY)
        }

        pointerGroup.position = new Paper.Point(
          events.mousePos.x,
          events.mousePos.y
        )
      } else if (!this.isStuck) {
        // move the circle normally
        this.lastX = lerp(this.lastX, events.mousePos.x, 0.14)
        this.lastY = lerp(this.lastY, events.mousePos.y, 0.14)

        group.position = new Paper.Point(this.lastX, this.lastY)
        pointerGroup.position = new Paper.Point(
          events.mousePos.x,
          events.mousePos.y
        )
      }

      if (
        this.pointed &&
        (Math.floor(pClone.bounds.width) < 40 ||
          Math.floor(cClone.bounds.width) > 44)
      ) {
        // console.log('POINTED')

        // stop the noise for both (called once)
        if (this.isNoise) {
          polygons.forEach(({ polygon, coordinates }) => {
            polygon.segments.forEach((segment, i) => {
              segment.point.set(coordinates[i][0], coordinates[i][1])
            })
          })

          pointer.segments.forEach((segment, i) => {
            segment.point.set(pCoordinates[i][0], pCoordinates[i][1])
          })

          this.isNoise = false
          pNoiseRange = 1.8
        }

        if (Math.floor(cClone.bounds.width) > 44) {
          scalePolygon(0.9941)
          // console.log('DOWN: ', 'circle: ', cClone.bounds.width)
        } // DOWN

        if (Math.floor(pClone.bounds.width) < 40) {
          pointer.scale(1.055)
          pClone.scale(1.055)
          // console.log('UP: ', 'pointer : ', pointer.bounds.width)
        } // UP

        // console.log('UP: ', pointer.bounds.width)
        return

      } else if (
        !this.pointed &&
        (Math.floor(pClone.bounds.width) > 13 ||
          Math.floor(cClone.bounds.width)) < 50
      ) {
        // console.log('NOT__POINTED : ', pointer.bounds.width, cClone.bounds.width)

        if (this.isNoise) {
          pointer.segments.forEach((segment, i) => {
            segment.point.set(pCoordinates[i][0], pCoordinates[i][1])
          })

          polygons.forEach(({ polygon, coordinates }) => {
            polygon.segments.forEach((segment, i) => {
              segment.point.set(coordinates[i][0], coordinates[i][1])
            })
          })

          this.isNoise = false
        }

        if (Math.floor(pClone.bounds.width) > 13) {
          pointer.scale(0.945)
          pClone.scale(0.945)
          // console.log('DOWN: ', 'pointer : ', pointer.bounds.width)
        }

        if (Math.floor(cClone.bounds.width) < 50) {
          scalePolygon(1.008)
          // console.log('UP: ', 'circle: ', cClone.bounds.width)
        }
        return

      } else if (!this.isNoise) {
        pCoordinates = pointer.segments.reduce((p, segment) => {
          p.push([segment.point.x, segment.point.y])
          return p
        }, [])

        polygons.forEach(({ polygon }, i) => {
          polygons[i].coordinates = polygon.segments.reduce((p, c) => {
            p.push([c.point.x, c.point.y])
            return p
          }, [])
        })

        this.isNoise = true
      }

       /*if (this.isStuck && Math.floor(cClone.bounds.width) < this.maxBounds.width)
         return scalePolygon(1.06)
       else if (!this.isStuck && Math.floor(cClone.bounds.width) > 50 )
         return scalePolygon(0.94)
       else if (!this.isNoise) {
         // record the new scaled coordinates for the noise
         polygons.forEach(({ polygon }, i) => {
           polygons[i].coordinates = polygon.segments.reduce((p, c) => {
             p.push([c.point.x, c.point.y])
             return p
           }, [])
         })
 
         this.isNoise = true
       }*/

      // noise generation
      polygons.forEach(({ polygon, coordinates, noiseObjects }) => {
        polygon.segments.forEach((segment, i) => {
          const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0)
          const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1)

          // generate perlin-noise and apply
          const distortionX = map(noiseX, -1, 1, this.pointed ? -2.5 : -noiseRange, this.pointed ? 2.5 : noiseRange)
          const distortionY = map(noiseY, -1, 1, this.pointed ? -2.5 : -noiseRange, this.pointed ? 2.5 : noiseRange)

          const newX = coordinates[i][0] + distortionX // accessing x
          const newY = coordinates[i][1] + distortionY // accessing y

          const pDisX = map(noiseX, -1, 1, this.pointed ? -1.6 : -.6, this.pointed ? 1.6 : .6)
          const pDisY = map(noiseY, -1, 1, this.pointed ? -1.6 : -.6, this.pointed ? 1.6 : .6)

          const newPX = pCoordinates[i][0] + pDisX // accessing x
          const newPY = pCoordinates[i][1] + pDisY // accessing y

          // console.log(distortionX, distortionY)

          pointer.segments[i].point.set(newPX, newPY)
          pointer.smooth()

          segment.point.set(newX, newY)
          polygon.smooth()
        })
      })

      // console.timeEnd('paper')
    }
  }

  reInit() {
    /*Paper.view.remove()
    initCanvas()
    Paper.view.update()*/
  }
}

export default PaperCursor
