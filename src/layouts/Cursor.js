import React, {useEffect, useRef} from 'react'
import Paper from 'paper'
import SimplexNoise from 'simplex-noise'
import {useMotionValue} from 'framer-motion'
import {motion} from 'framer-motion'
import {lerp, map} from '../helpers/utils'
import styled from 'styled-components'

const H = styled.div`
  position: fixed;
  top: 20%;
  left: 20%;
  font-size: 2rem;
  font-weight: 900;
`

const Cursor = () => {

  const canvasRef = useRef(null);
  const hRef = useRef(null);
  let lastX = useMotionValue(0)
  let lastY = useMotionValue(0)

  let x = useMotionValue(-100);
  let y = useMotionValue(-100);
  let isStuck = false;
  let showCursor = false;
  let group, stuckX, stuckY, fillOuterCursor;
  let s = new SimplexNoise();


  useEffect(() => {

    window.addEventListener('mousemove', e => {
      x.set( e.clientX )
      y.set( e.clientY )
    })



    // initCanvas();

    initHover();

    }, [])

  const initCanvas = () => {
    const shapeBounds = {
      width: 75,
      height: 75,
    }

    Paper.setup(canvasRef.current)

    const strokeColor = "rgba(255, 0, 0, 0.5)";
    const strokeWidth = 1;
    const segments = 8;
    const radius = 15;

    //noisiness
    const noiseScale = 150; // speed
    const noiseRange = 4; // range of distortion
    let isNoisy = false;

    const polygon = new Paper.Path.RegularPolygon(
      new Paper.Point(0, 1),
      segments,
      radius,
    );

    polygon.strokeColor = strokeColor;
    polygon.strokeWidth = strokeWidth;
    polygon.smooth();

    group = new Paper.Group([polygon]);
    group.applyMatrix = false;

    //create noise equal to segments
    const noiseObjects = polygon.segments.map(() => new SimplexNoise());
    let bigCoordinates = [];

    Paper.view.onFrame = event => {

      if ( !isStuck ){
        lastX.set( lerp( lastX.get(), x.get(), .2 ) )
        lastY.set( lerp( lastY.get(), y.get(), .2 ) )
      }else if ( isStuck ){
        lastX.set( lerp(lastX.get(), stuckX, .2) )
        lastY.set( lerp(lastY.get(), stuckY, .2) )
      }

      group.position = new Paper.Point(lastX.get(), lastY.get());


      if ( isStuck && polygon.bounds.width < shapeBounds.width )
        polygon.scale(1.08) // scale up the shape

      else if ( !isStuck && polygon.bounds.width > 30 ){

        if ( isNoisy ){ // remove noise
          polygon.segments.forEach((s, i) => {
            s.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
          });
          isNoisy = false;
          bigCoordinates = [];
        }

        const scaleDown = 1;
        polygon.scale(scaleDown);
      }

      //if stuck and big, apply simplex noise
      if ( isStuck && polygon.bounds.width >= shapeBounds.width ){
        isNoisy = true;

        //get the coordinates of the large circle
        if (bigCoordinates.length === 0) {
          polygon.segments.forEach((segment, i) => {
            bigCoordinates[i] = [segment.point.x, segment.point.y];
          });
        }

        // calculate noise value for each point at that frame
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
        });
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
      <H ref={hRef} onClick={() => {}}  >H</H>

      <motion.div style={{x, y}} className="circle-cursor circle-cursor--inner"/>
      <canvas ref={canvasRef} className="circle-cursor circle-cursor--outer" resize={true}/>
    </>
  )
}

export default Cursor
