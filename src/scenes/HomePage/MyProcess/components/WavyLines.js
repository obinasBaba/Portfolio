import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import paper from 'paper';
import SimplexNoise from 'simplex-noise'
import {map} from '../../../../helpers/utils'

const WavyLinesContainer = styled.div`
  //border: thin solid lightcoral; 
  width: 100%;
  height: 100vh;
  position: absolute;
  top: -100px;
  left: 0;
  z-index: -1;
  
  .line-canvas{
    width: 100%;
    height: 100%;

  }
  
  .canvas-wrapper{
    //transform: rotate(105deg);
  }
`

const WavyLines = () => {

  let width, height, center;
  let points = 6;
  let smooth = true;
  let path;
  let p2;
  let mousePos;
  let pathHeight = 0;

  //noisiness
  const noiseScale = 1550; // speed
  const noiseRange = 104; // range of distortion
  let isNoisy = false;

  const canvasRef = useRef(null)



  const initialize = () => {
    path.removeSegments();
    p2.removeSegments();

    path.add(paper.view.bounds.leftCenter.add( -200 ) );
    p2.add(paper.view.bounds.leftCenter);

    for (let i = 1; i < points; i++) {
      let point = new paper.Point(width / points * i , center.y);
      path.add(point);
      p2.add(new paper.Point(width / points * -i , center.y))
    }

    path.add(paper.view.bounds.bottomRight.add(200) );
    p2.add(paper.view.bounds.bottomRight.add(200) );
  }

  useEffect(() => {

    initCanvas();

    window.addEventListener('resize', initialize)
    return () => {
      window.removeEventListener('resize', initialize)
    }


  }, [])

  const initCanvas = () => {
    paper.setup(canvasRef.current)

    mousePos = paper.view.center.divide(2);
    pathHeight  = mousePos.y / 2;
    center = paper.view.center;
    width = paper.view.size.width;
    height = paper.view.size.height / 2;


    path = new paper.Path();
    path.strokeColor = '#02021e';
    path.strokeWidth = 2;

    p2 = path.clone();

    initialize()


    path.smooth({ type: 'continuous' });



    let bigCoordinates = [];
    let bigCoordinates2 = [];


    paper.view.onMouseMove = event => {
      mousePos = event.point;
    }

    const noiseObjects = path.segments.map(() => new SimplexNoise());
    const noiseObjects2 = p2.segments.map(() => new SimplexNoise());

    paper.view.onFrame = event => {

      if (bigCoordinates.length === 0) {
        path.segments.forEach((segment, i) => {
          bigCoordinates[i] = [segment.point.x, segment.point.y];

          bigCoordinates2[i] = [p2.segments[i].point.x, p2.segments[i].point.y];

        });
      }

      // calculate noise value for each point at that frame
      path.segments.forEach((segment, i) => {

        //get new noise value
        //we divide event.count by noiseScale to get a very smooth value
        const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
        const noiseX2 = noiseObjects2[i].noise2D(event.count / noiseScale, 0);

        const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);
        const noiseY2 = noiseObjects2[i].noise2D(event.count / noiseScale, 1);

        // map the noise value to our defined range
        const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
        const distortionX2 = map(noiseX2, -1, 1, -noiseRange, noiseRange);

        const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);
        const distortionY2 = map(noiseY2, -1, 1, -noiseRange, noiseRange);

        // apply distortion to coordinates
        const newX = bigCoordinates[i][0] + distortionX;  // accessing x
        const newX2 = bigCoordinates[i][0] + distortionX2;  // accessing x

        const newY = bigCoordinates[i][1] + distortionY;  // accessing y
        const newY2 = bigCoordinates[i][1] + distortionY2;  // accessing y

        //set new (noisy) coordinate of point
        segment.point.set(newX, newY);
        p2.segments[i].point.set( newX2, newY2 )
      });

      path.smooth({ type: 'continuous' });
      p2.smooth({ type: 'continuous' });


    }


  }


  return (
    <WavyLinesContainer>
     <div className="canvas-wrapper">
       <canvas
         ref={canvasRef}
         className="line-canvas"
         resize
       />
     </div>

    </WavyLinesContainer>
  )
}

export default WavyLines
