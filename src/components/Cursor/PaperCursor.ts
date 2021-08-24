// @ts-ignore
import Paper from 'paper'
// @ts-ignore
import SimplexNoise from 'simplex-noise'
import { lerp, map } from '../../helpers/utils'
import EventUtil from "../../helpers/EventUtil"




class PaperCursor{
  event = EventUtil.getInstance();

  lastX = 0
  lastY = 0

  // x = 0
  // y = 0

  isStuck = false;
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

  private readonly canvas: HTMLCanvasElement;
  private static Instance: PaperCursor = null;

  static getInstance(canvas){
    if ( this.Instance === null ) {
      this.Instance = new PaperCursor(canvas);
      return this.Instance;
    }else {
      return this.Instance
    }

  }

  private constructor(canvas: HTMLCanvasElement) {
    this.canvas = document.querySelector('canvas.canvas');

    this.initCanvas()

    console.log('intcavase')
  }

  getPolygon = args => {
    const { segments, radius, color, strokeWidth } = args
    const polygon = new Paper.Path.RegularPolygon(
      Paper.view.center,
      segments,
      radius
    )

    polygon.smooth()
    const clone = polygon.clone({ insert: true })

    polygon.strokeColor = color
    polygon.strokeWidth = strokeWidth
    let bound = clone.bounds.width

    const coordinates = polygon.segments.reduce((p, c, i) => {
      p.push([c.point.x, c.point.y])
      return p
    }, [])

    return {
      polygon,
      clone,
      noiseObjects: polygon.segments.map(() => new SimplexNoise()),
      coordinates,
      initialWidth: bound,
    }
  }

  initialize = () => {
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

  initCanvas() {
      console.log('initCanvas')

      //noisiness
      const noiseScale = 150 // speed
      const noiseRange = 2.1 // range of distortion

      Paper.setup(this.canvas)

      const { polygons, group } = this.initialize()
      const ref = polygons[0].clone //for short name ref
      const initialWidth = polygons[0].initialWidth //for short name ref

      const scalePolygon = amount => {
        //scale the clone for reference
        ref.scale(amount)

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
          this.isStuck = group.position.isClose(new Paper.Point(this.event.mousePos.x , this.event.mousePos.y ), 60)

          //stuck the circle
          if ( this.lastX  !== this.stuckPos.x && this.lastX  !== this.stuckPos.y ){
            this.lastX = (lerp(this.lastX , this.stuckPos.x, 0.14))
            this.lastY = (lerp(this.lastY , this.stuckPos.y, 0.14))
            group.position = new Paper.Point(this.lastX , this.lastY )
          }
        } else if (!this.isStuck) {
          // move the circle normally
          this.lastX = (lerp(this.lastX , this.event.mousePos.x , 0.14))
          this.lastY = (lerp(this.lastY , this.event.mousePos.y , 0.14))
          group.position = new Paper.Point(this.lastX , this.lastY )
        }

        if (this.isStuck && ref.bounds.width < this.maxBounds.width)
          return scalePolygon(1.06)
        else if (!this.isStuck && ref.bounds.width > initialWidth + 4)
          return scalePolygon(0.94)
        else if (
          (!this.isStuck && ref.bounds.width <= initialWidth + 4 && !this.isNoise) ||
          (this.isStuck && ref.bounds.width >= this.maxBounds.width && !this.isNoise)
        ) {
          // record the new scaled coordinates for the noise
          polygons.forEach(({ polygon }, i) => {
            polygons[i].coordinates = polygon.segments.reduce((p, c) => {
              p.push([c.point.x, c.point.y])
              return p
            }, [])
          })

          this.isNoise = true
        }


        // noise generation
        polygons.forEach(({ polygon, coordinates, noiseObjects }) => {
          polygon.segments.forEach((segment, i) => {
            const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0)
            const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1)

            // generate perlin-noise and apply
            const distortionX = map(noiseX, -1, 1, this.isStuck ? -4 : -noiseRange, this.isStuck ? 4 : noiseRange)
            const distortionY = map(noiseY, -1, 1, this.isStuck ? -4 : -noiseRange, this.isStuck ? 4 : noiseRange)

            const newX = coordinates[i][0] + distortionX // accessing x
            const newY = coordinates[i][1] + distortionY // accessing y

            segment.point.set(newX, newY)

            polygon.smooth()
          })
        })

        // console.timeEnd('paper')
      }
    }

   reInit  ()  {
    /*Paper.view.remove()
    initCanvas()
    Paper.view.update()*/
  }

}

export default PaperCursor;