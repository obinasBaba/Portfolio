import React, { useEffect, useRef } from 'react'
import SimplexNoise from 'simplex-noise'
import { motion, useMotionValue } from 'framer-motion'
import { lerp, map } from '../helpers/utils'
import styled from 'styled-components'
import Paper, {Group} from 'paper'
import {useProjectCircles} from '../hooks/queries/useProjectCircles'

const H = styled.div`
  position: fixed;
  top: 20%;
  left: 20%;
  height: min-content;
  width: min-content;
  font-size: 2rem;
  font-weight: 900;
`

const Cursor = () => {

  const { circle1 } = useProjectCircles();


  const canvasRef = useRef(null);
  const hRef = useRef(null);
  let lastX = useMotionValue(0)
  let lastY = useMotionValue(0)

  let x = useMotionValue(100);
  let y = useMotionValue(100);
  let isStuck = false;
  let showCursor = false;
  let group, stuckX, stuckY, fillOuterCursor;
  let s = new SimplexNoise();


  useEffect(() => {


    window.addEventListener('mousemove', e => {
      x.set( e.clientX )
      y.set( e.clientY )
    })

    initCanvas();

    initHover();

    }, [])

  const initCanvas = () => {
    const shapeBounds = {
      width: 75,
      height: 75,
    }

    Paper.setup(canvasRef.current)

    const strokeColor = "#3719ca";
    const strokeWidth = 2;
    const segments = 8;
    const radius = 30;

    //noisiness
    const noiseScale = 150; // speed
    const noiseRange = 4; // range of distortion
    let isNoisy = false;


    new Paper.Path.Rectangle()


    let rect = new Paper.Rectangle(0, 0, 100, 100)
    const polygon = new Paper.Path.Rectangle( rect );


    polygon.insert(1, new Paper.Point(0, 50))
    polygon.insert(3, new Paper.Point(50, 0))
    polygon.insert(5, new Paper.Point(100, 50))
    polygon.insert(8, new Paper.Point(50, 100))
    // polygon.segments[1].selected = true;


    polygon.strokeColor = strokeColor;
    polygon.strokeWidth = strokeWidth;
    polygon.selected = true;
    polygon.smooth();


    group = new Group([ polygon ]);
    group.applyMatrix = false;


    //create noise objects equal to segments
    const noiseObjects = polygon.segments.map(() => new SimplexNoise());
    let bigCoordinates = [];

    Paper.view.onFrame = event => {

      if (isStuck) {
        // move circle around normally
        lastX.set( lerp( lastX.get(), stuckX, .2 ) )
        lastY.set( lerp( lastY.get(), stuckY, .2 ) )

      } else {
        // fixed position on a nav item
        lastX.set( lerp( lastX.get(), x.get(), .2 ) )
        lastY.set( lerp( lastY.get(), y.get(), .2 ) )

      }

      group.position = new Paper.Point(lastX.get(), lastY.get());


      if ( isStuck && polygon.bounds.width < shapeBounds.width )
      {
        // scale up the shape
        // polygon.scale(1.08)
      }

      else if ( !isStuck && polygon.bounds.width > 40 ){

        if ( isNoisy ){ // remove noise
          polygon.segments.forEach((s, i) => {
            s.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
          });
          isNoisy = false;
          bigCoordinates = [];
        }

        const scaleDown = 0.92;
        // polygon.scale(scaleDown);
      }

      //if stuck and big, apply simplex noise
      if ( isStuck  ){
        isNoisy = true;

        //get the coordinates of the large circle before any noise start( normal coordinate )
        if (bigCoordinates.length === 0) {
          polygon.segments.forEach((segment, i) => {
            bigCoordinates[i] = [segment.point.x, segment.point.y];
          });
        }

          polygon.segments.forEach((segment, i) => {

            //get new noise value
            //we divide event.count by noiseScale to get a very smooth value
            const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
            const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);

            // map the noise value to our defined range
            const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
            const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);

            // apply distortion to coordinates
            const newX = bigCoordinates[i][0] + distortionX;  // accessing x
            const newY = bigCoordinates[i][1] + distortionY;  // accessing y

            //set new (noisy) coordinate of point
            segment.point.set(newX, newY);
          })



        // calculate noise value for each point at that frame
      }

      polygon.smooth();

    }
  }

  const initHover = () => {
    const rect = hRef.current.getBoundingClientRect();
    const handleHover = () => {
      stuckX = Math.round( rect.left + rect.width / 2 );
      stuckY = Math.round( rect.top + rect.height / 2 );
      isStuck = true;
    }

    const handleLeave = () => {
      isStuck = false;
    }

    hRef.current.addEventListener('mouseenter', handleHover);
    hRef.current.addEventListener('mouseleave', handleLeave);

  }

  
  return (
    <>
      <H ref={hRef} >
        All Projects
      </H>




      <motion.div
        style={{ x, y }}
        className="circle-cursor circle-cursor--inner"
      />
      <canvas
        ref={canvasRef}
        className="circle-cursor circle-cursor--outer"
        resize={true}
      />
    </>
  )
}

export default Cursor