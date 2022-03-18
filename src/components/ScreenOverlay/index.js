import React, {useContext, useLayoutEffect} from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion';
import { MotionValueContext } from '../../contexts/MotionStateWrapper';
import OverlayController from './OverlayController';

let first = true;

const OverlayContainer = styled( motion.div )`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  
  //opacity: .3;

  pointer-events: none;

  z-index: 8;

  svg {
    pointer-events: none;
    height: 100%;
    width: 100%;

    .shape-overlays__path:nth-of-type(1) {
      fill: url(#gradient1);
    }

    .shape-overlays__path:nth-of-type(2) {
      fill: url(#gradient2);
    }

    .shape-overlays__path:nth-of-type(3) {
      fill: url(#gradient3);
    }
    
    
  }

 /* .loading-bg {
    //fill: url(#gradient3);
    background-image: linear-gradient(137.81deg,
    #5d6c7b 3.52%,
    #a4b5c0 48.89%,
    #bfd0d9 100.77%);;
    width: 100%;
    height: 100%;
  }*/

  & .shape-overlays {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    //pointer-events: none;
    //z-index: 1;

    path {
      position: relative;
    }

    //border: thick solid red;
  }
`;

const LoadingBgBackup = styled( motion.div )`
  position: fixed;
  z-index: 1000;
  background-image: linear-gradient(
    137.81deg,
    #5d6c7b 0%,
    #a4b5c0 50%,
    #bfd0d9 120%
  );
  width: 100%;
  height: 100%;

  &.loaded {
    display: none;
  }
`;

const ScreenOverlay = ({ loading = true, clsName }) => {

  const controller = useAnimation();
  const { screenOverlayProxy } = useContext(MotionValueContext);


  useLayoutEffect(() => {

    const overlayController = OverlayController.getInstance('loading-overlay');
    
    screenOverlayProxy.onChange(v => {
      
      overlayController.toggle( v.state, v.config );
      controller.start({ display: 'none' });

    })


    return () => {};
  }, []);
  

  

  return (
    <OverlayContainer className='background-overlay-container'
                      variants={{}}
    >

        <LoadingBgBackup className="loading-backup" 
                          variants={{}}
                          animate={controller}

        />
      

      <svg className={'loading-overlay'} viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00c99b" />
            <stop offset="100%" stopColor="#ff0ea1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd392" />
            <stop offset="100%" stopColor="#ff3898" />
          </linearGradient>

          <linearGradient id="gradient3" x1="0.177" y1="0.104" x2="0.949"y2="0.947" gradientUnits="objectBoundingBox">
            <stop offset="-.2" stopColor="#5d6c7b" />
            <stop offset="0.5" stopColor="#a4b5c0" />
            <stop offset="1.2" stopColor="#bfd0d9" />
          </linearGradient>

          <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#110046" />
            <stop offset="100%" stopColor="#32004a" />
          </linearGradient>

        </defs>

        <path className="shape-overlays__path" />
        <path className="shape-overlays__path" />
        <path className="shape-overlays__path" />

        {/*<path className="loading-bg" d="M 0 0C 5.555555555555555 0 5.555555555555555 0 11.11111111111111 0 C 16.666666666666664 0 16.666666666666664 0 22.22222222222222 0 C 27.77777777777777 0 27.77777777777777 0 33.33333333333333 0 C 38.888888888888886 0 38.888888888888886 0 44.44444444444444 0 C 50 0 50 0 55.55555555555556 0 C 61.1111111111111 0 61.1111111111111 0 66.66666666666666 0 C 72.22222222222223 0 72.22222222222223 0 77.77777777777779 0 C 83.33333333333333 0 83.33333333333333 0 88.88888888888889 0 C 94.44444444444444 0 94.44444444444444 0 100 0 V 100 H 0" />*/}

      </svg>

    </OverlayContainer>
  )
}

export default ScreenOverlay
