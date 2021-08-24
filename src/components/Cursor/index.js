// noinspection JSIgnoredPromiseFromCall

import React, {useCallback, useContext, useEffect, useRef} from 'react'
import SimplexNoise from 'simplex-noise'
import { motion, useAnimation, useMotionValue, useSpring } from 'framer-motion'
import { lerp, map } from '../../helpers/utils'
import { CursorContainer, Pointer } from './components'
import Paper, { Point } from 'paper'
import { AppStateContext } from '../../contexts/AppStateContext'
import MagnetElement from '../../helpers/MagnetElement'

const pointerVariants = {
  initial: {
    scale: 1,
  },
  small: {
    scale: 1,
    transition: {
      ease: 'linear',
      duration: 0.3,
    },
  },

  big: {
    scale: 3.5,
    transition: {
      ease: 'linear',
      duration: 0.3,
    },
  },

  animate(c) {
    return {
      rotate: [null, 360 * c.factor],
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'linear',
        duration: 5 * 1.2,
      },
    }
  },
}

let isStuck = false;
let isNoise = true
const strokeWidth = 1.5
const segments = 10
const radius = 25
let stuckPos = {
  x: 0,
  y: 0,
}

const getPolygon = args => {
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

const initialize = () => {
  const polygons = [0, 1].map(() =>
    getPolygon({
      segments,
      radius,
      strokeWidth,
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


const Cursor = ({path}) => {
  const canvasRef = useRef(null)

  let lastX = useMotionValue(0)
  let lastY = useMotionValue(0)

  let x = useMotionValue(window ? window.innerWidth / 2 : 0)
  let y = useMotionValue(window ? window.innerHeight / 2 : 0)

  const control = useAnimation()

  const initCanvas = useCallback(
    () => {
      console.log('initCanvas')
      const maxBounds = {
        width: 65,
        height: 65,
      }
      //noisiness
      const noiseScale = 150 // speed
      const noiseRange = 2.1 // range of distortion

      Paper.setup(canvasRef.current)

      const { polygons, group } = initialize()
      const ref = polygons[0].clone //for short name ref
      const initialWidth = polygons[0].initialWidth //for short name ref

      const scalePolygon = amount => {
        //scale the clone for reference
        ref.scale(amount)

        //get coordinates with out noise
        if (isNoise)
          polygons.forEach(({ polygon, coordinates }) => {
            polygon.segments.forEach((segment, i) => {
              segment.point.set(coordinates[i][0], coordinates[i][1])
            })

            isNoise = false
          })

        //scale the circles them and recorde the scaled coordinates
        polygons.forEach(({ polygon }) => polygon.scale(amount))
      }

      Paper.view.onFrame = event => {
        if (isStuck) {
          // disable the stuck if the mouse is away some distance
          isStuck = group.position.isClose(new Paper.Point(x.get(), y.get()), 60)

          //stuck the circle
          if ( lastX.get() !== stuckPos.x && lastX.get() !== stuckPos.y ){
            lastX.set(lerp(lastX.get(), stuckPos.x, 0.14))
            lastY.set(lerp(lastY.get(), stuckPos.y, 0.14))
            group.position = new Paper.Point(lastX.get(), lastY.get())
          }
        } else if (!isStuck) {
          // move the circle normally
          lastX.set(lerp(lastX.get(), x.get(), 0.14))
          lastY.set(lerp(lastY.get(), y.get(), 0.14))
          group.position = new Paper.Point(lastX.get(), lastY.get())
        }

        if (isStuck && ref.bounds.width < maxBounds.width)
        {
          console.log('isStuck')
          return scalePolygon(1.06)
        }
        else if (!isStuck && ref.bounds.width > initialWidth + 4)
        {
          console.log('!isStuck')
          return scalePolygon(0.94)
        }
        else if (

          (!isStuck && ref.bounds.width <= initialWidth + 4 && !isNoise) ||
          (isStuck && ref.bounds.width >= maxBounds.width && !isNoise)
        ) {
          console.log('elseIf')


          // record the new scaled coordinates for the noise
          polygons.forEach(({ polygon }, i) => {
            polygons[i].coordinates = polygon.segments.reduce((p, c) => {
              p.push([c.point.x, c.point.y])
              return p
            }, [])
          })

          isNoise = true
        }


        // noise generation
        polygons.forEach(({ polygon, coordinates, noiseObjects }) => {
          polygon.segments.forEach((segment, i) => {
            const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0)
            const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1)

            // generate perlin-noise and apply
            const distortionX = map(noiseX, -1, 1, isStuck ? -4 : -noiseRange, isStuck ? 4 : noiseRange)
            const distortionY = map(noiseY, -1, 1, isStuck ? -4 : -noiseRange, isStuck ? 4 : noiseRange)

            const newX = coordinates[i][0] + distortionX // accessing x
            const newY = coordinates[i][1] + distortionY // accessing y

            segment.point.set(newX, newY)

            polygon.smooth()
          })
        })
      }
    },
    [],
  )

  const initHover = useCallback (
    () => {
    const handleHover = (e) => {
      // console.log('enter hover')
      if (e.currentTarget.dataset.stuck) {
        const rect = e.currentTarget.getBoundingClientRect()
        stuckPos.x = Math.round(rect.left + rect.width / 2)
        stuckPos.y = Math.round(rect.top + rect.height / 2)
        isStuck = true
      } else {
        control.start('big')
      }
    }

    const handleLeave = () => {
      // console.log('leave hover')
      control.start('small')
    }

    const pointerElements = document.querySelectorAll('[data-pointer]')
    console.log(pointerElements)

    pointerElements.forEach(element => {
      element.removeEventListener('mouseenter',  handleHover)
      element.removeEventListener('mouseleave',  handleLeave)



      if (element.dataset.magnet) {
        // console.log(element)
        const magnet = new MagnetElement({
          element: element,
          stop: 1,
          distance: 0.7,
        })

        magnet.on('leave', () => {
          // console.log('LEAVE invoked')
          control.start('small')
        })

        element.addEventListener('mouseenter',  handleHover)

      } else {

        element.addEventListener('mouseenter', handleHover )
      }
    })
  },
    [path]
  )

  useEffect(() => {
    const handleMouse = e => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const reInitializePaper = () => {
      Paper.view.remove()
      initCanvas()
      Paper.view.update()
    }

    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('resize', reInitializePaper)

    initCanvas()

    return () => {
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('resize', reInitializePaper)
    }

  }, [])

  useEffect(() => {
    control.start('initial')
    control.start('animate')

    initHover()
  }, [path])


  // console.time('UniquetLabelName') ....code here.... console.timeEnd('UniqueLabelName')

  return (
    <CursorContainer>
      <Pointer style={{ x, y }}>
        <motion.p
          variants={pointerVariants}
          initial='initial'
          animate={control}
          custom={{ factor: 1 }}
        >
          h
        </motion.p>

        <motion.p
          variants={pointerVariants}
          initial='initial'
          animate={control}
          custom={{ factor: -1 }}
        >
          i
        </motion.p>
      </Pointer>

      <canvas ref={canvasRef} className="canvas" />
    </CursorContainer>
  )
}

export default Cursor
