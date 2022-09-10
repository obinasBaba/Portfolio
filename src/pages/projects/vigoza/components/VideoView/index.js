import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import {
  container,
  placeholderImg,
  vid,
  wrapper,
} from './videoplayer.module.scss';
import PlaceholderVid2 from './couples_c.webm';

const VideoView = (props = {
    headerProps: {},
    vidProps: {},
  }) => {

    const vidRef = useRef();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

      const imgLoaded = () => {
        setLoaded(true);
      };

      vidRef.current?.addEventListener('loadeddata', imgLoaded);

      return () => {
        vidRef.current?.removeEventListener('loadeddata', imgLoaded);
      };
    }, []);

    return (
      <motion.div className={container}
                  viewport={{
                    amount: .5,
                    once: false,
                    // margin: '40% 50% 0% 50%'
                  }}

                  onViewportEnter={entry => {

                    // console.log('entry: ', entry);

                    vidRef.current?.play();
                  }}
                  onViewportLeave={entry => {
                    if (!vidRef.current) return;
                    vidRef.current?.pause();
                    setTimeout(() => {
                      vidRef.current.currentTime = 0;
                    }, 300);
                  }}

      >

        <header {...props?.headerProps}>
          <span />
          <span />
          <span />
        </header>

        <div className={wrapper}>


          {

            true &&
            <div className={clsx([placeholderImg])}
                 style={{ opacity: loaded ? 0 : 1 }}>

              <StaticImage
                src='./Screenshot_116.png'
                alt='Image Place holder'
                placeholder='blurred'
              />

            </div>

          }

          <video className={vid} preload='metadata' muted={true} loop={true}
                 playsInline={true}
                 {...props?.vidProps}
                 ref={vidRef}
          >
            {/*<source src={props.src} type="video/webm" />*/}
            <source src={PlaceholderVid2} type='video/mp4' />
          </video>
        </div>
      </motion.div>
    );
  }
;

export default VideoView;
