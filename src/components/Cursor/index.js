import React, {useContext, useEffect, useRef} from 'react'
import SimplexNoise from 'simplex-noise'
import {motion, useAnimation, useMotionValue, useSpring} from 'framer-motion'
import { lerp, map } from '../../helpers/utils'
import { CursorContainer, Pointer } from './components'
import Paper from 'paper'
import {AppStateContext} from '../../contexts/AppStateContext'
import MagnetElement from '../../helpers/MagnetElement'

const pointerVariants = {
  initial: {
    scale: 1,
  },
  small: {
    scale: 1,
    transition: {
      ease: 'linear',
      duration: .3
    }
  },

  big: {
    scale: 3.5,
    transition: {
      ease: 'linear',
      duration: .3
    }
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

const Cursor = () => {
  const canvasRef = useRef(null)
  // const { cursorScaled, setCursorScaled } = useContext(AppStateContext)


  let lastX = useMotionValue(0)
  let lastY = useMotionValue(0)
  const control =  useAnimation()


  let x = useMotionValue( window ? (window.innerWidth / 2) : 0 )
  let y = useMotionValue(window ? (window.innerHeight / 2) : 0)

  let isStuck = false;
  const strokeWidth = 1.5
  const segments = 10
  const radius = 25
  let stuck = {
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
    const clone = polygon.clone({ insert: false })

    polygon.strokeColor = color
    polygon.strokeWidth = strokeWidth
    let bound = clone.bounds.width;

    const coordinates = polygon.segments.reduce((p, c, i) => {
      p.push([c.point.x, c.point.y])
      return p
    }, [])


    return {
      polygon,
      clone,
      noiseObjects: polygon.segments.map(() => new SimplexNoise()),
      coordinates,
      originalBoundWidth: bound,
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



  useEffect(() => {

    control.start('animate')

    window.addEventListener('mousemove', e => {
      x.set(e.clientX)
      y.set(e.clientY)
    })

    window.addEventListener('resize', e => {
      Paper.view.remove()
      initCanvas()
      Paper.view.update()
      // console.log(Paper.project.view.center)
    })

    initCanvas()

    initHover()
  }, [])

  const initCanvas = () => {
    const maxBounds = {
      width: 75,
      height: 75,
    }

    //noisiness
    const noiseScale = 150 // speed
    const noiseRange = 2.1 // range of distortion

    Paper.setup(canvasRef.current)

    const { polygons, group } = initialize()

    const scalePolygon = amount => {
      //scale the clone for reference
      polygons[0].clone.scale(amount)

      //stop the noise
      polygons.forEach(({ polygon, coordinates }, i) => {
        polygon.segments.forEach((segment, i) => {
          segment.point.set(coordinates[i][0], coordinates[i][1])
        })
      })

      //scale them and recorde the scaled coordinates
      polygons.forEach(({ polygon }, i) => {
        polygon.scale(amount);
        polygons[i].coordinates = polygon.segments.reduce((p, c, i) => {
          p.push([c.point.x, c.point.y])
          return p
        }, [])
      })
    }

    Paper.view.onFrame = event => {
      if (isStuck) {
        // stuck the circle
        lastX.set(lerp(lastX.get(), stuck.x, 0.14))
        lastY.set(lerp(lastY.get(), stuck.y, 0.14))
      } else if (!isStuck) {
        // move the circle normally
        lastX.set(lerp(lastX.get(), x.get(), 0.14))
        lastY.set(lerp(lastY.get(), y.get(), 0.14))
      }

      group.position = new Paper.Point(lastX.get(), lastY.get())


      if (isStuck && polygons[0].clone.bounds.width < maxBounds.width) {
        // console.log(polygons[0].clone.bounds.width, '- UP')

        scalePolygon(1.06)

      } else if (
        !isStuck &&
        (polygons[0].clone.bounds.width) > polygons[0].originalBoundWidth + 4
      ) {
        // console.log(polygons[0].clone.bounds.width, '- DOWN')

        scalePolygon(0.94)
      }


      // noise generation
      polygons.forEach(({ polygon, coordinates, noiseObjects, distortion }) => {
        polygon.segments.forEach((segment, i) => {
          const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0)
          const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1)

          // generate perlin-noise and apply
          const distortionX = map(noiseX, -1, 1,
            isStuck ? -4 : -noiseRange,
            isStuck ? 4 : noiseRange
          )
          const distortionY = map(noiseY, -1, 1,
            isStuck ? -4 : -noiseRange,
            isStuck ? 4 : noiseRange
          )

          const newX = coordinates[i][0] + distortionX // accessing x
          const newY = coordinates[i][1] + distortionY // accessing y

          segment.point.set(newX, newY)

          polygon.smooth()
        })
      })
    }
  }

  const initHover = () => {
    const handleHover = e => {
      console.log('mouse enter')

      // const rect = e.currentTarget.getBoundingClientRect()
      // stuck.x = Math.round(rect.left + rect.width / 2)
      // stuck.y = Math.round(rect.top + rect.height / 2)
      // isStuck = true;

      control.start('big')
    }

    const handleLeave = () => {
      console.log('mouse leave')
      // isStuck = false;
      // control.start('small')

    }

    setTimeout(() => {
      const linkItems = document.querySelectorAll('[data-pointer]')


      linkItems.forEach(element => {
        element.addEventListener('mouseenter', handleHover)
        element.addEventListener('mouseleave', handleLeave)

        if ( element.dataset.magnet ){
          // console.log(element)
          const magnet = new MagnetElement({
            element: element,
            stop: 1,
            distance: .7,
          })

          magnet.on('leave', () => {
            control.start('small')
          })
        }
      })
    }, 500)
  }

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
