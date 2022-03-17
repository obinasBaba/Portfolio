import React from 'react'
import styled, {css} from 'styled-components'
import useAboutHeroAssets from './useAboutHeroAssets'
import {mediumUp} from "../../../../styles/mixins/breakpoints";
import {gridColWidth} from "../../../../styles/mixins";
import {motion} from 'framer-motion';

const HeroPictureContainer = styled.div`
  //position: absolute;
  right: 0;
  z-index: -1;
  display: grid;
  place-items: center;
  align-items: start;
  grid-row: 1 / 3;
  
  //width: 100%;
  //border: thin solid red;
  
  ${ gridColWidth() };



  svg {
    //position: absolute;
    width: 70%;
    height: auto;
    padding-top: 5vmax;
    //max-width: 100%;
    

    image#image0_159_105 {
      filter: grayscale(150%);
    }
  }

  ${mediumUp( css`
    position: absolute;
    width: 60%;
    grid-row: initial;
    
    svg{
      width: 47%;
    }

  ` )  };
`

const aboutSvgVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
  },
}

const pathVariants = {
  initial: {
    scale:.6
  },
  animate: {
    scale: 1
  },
}

const AboutHeroPicture = () => {
  const { photo } = useAboutHeroAssets()
  // xlinkHref={photo.publicURL}

  return (
    <HeroPictureContainer className="photo-container">
      <motion.svg

        width="100%"
        height="100%"
        viewBox="0 0 393 521"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_159_105"
          style={{ ['mask-type']: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="100%"
          height="100%"
        >
          <motion.path
            d="M0 120C0 114.477 4.47715 110 10 110H120C125.523 110 130 114.477 130 120V244C130 249.523 125.523 254 120 254H10C4.47715 254 0 249.523 0 244V120Z"
            fill="#EC3232"
            fillOpacity="0.4"
          />
          <path
            d="M30 269C30 263.477 34.4772 259 40 259H120C125.523 259 130 263.477 130 269V358C130 363.523 125.523 368 120 368H40C34.4772 368 30 363.523 30 358V269Z"
            fill="#EC3232"
            fill-opacity="0.4"
          />
          <path
            d="M51 27C51 21.4772 55.4772 17 61 17H120C125.523 17 130 21.4772 130 27V95C130 100.523 125.523 105 120 105H61C55.4772 105 51 100.523 51 95V27Z"
            fill="#EC3232"
            fill-opacity="0.4"
          />
          <path
            d="M20 383C20 377.477 24.004 373 28.9431 373H121.057C125.996 373 130 377.477 130 383V467C130 472.523 125.996 477 121.057 477H28.9431C24.004 477 20 472.523 20 467V383Z"
            fill="#EC3232"
            fill-opacity="0.4"
          />
          <path
            d="M135.264 10C135.264 4.47716 139.741 0 145.264 0H241.092C246.615 0 251.092 4.47715 251.092 10V210.78C251.092 216.303 246.615 220.78 241.092 220.78H145.264C139.741 220.78 135.264 216.303 135.264 210.78V10Z"
            fill="#EC3232"
            fill-opacity="0.4"
          />
          <path
            d="M135.264 235.78C135.264 230.257 139.741 225.78 145.264 225.78H193.178H241.092C246.615 225.78 251.092 230.257 251.092 235.78V324.84C251.092 330.363 246.615 334.84 241.092 334.84H193.178H145.264C139.741 334.84 135.264 330.363 135.264 324.84V235.78Z"
            fill="#EC3232"
            fill-opacity="0.4"
          />
          <path
            d="M135.421 349.84C135.421 344.317 139.898 339.84 145.421 339.84H241.249C246.772 339.84 251.249 344.317 251.249 349.84V510.72C251.249 516.243 246.772 520.72 241.249 520.72H145.421C139.898 520.72 135.421 516.243 135.421 510.72V349.84Z"
            fill="#EC3232"
            fill-opacity="0.4"
          />
          <path
            d="M256.249 69C256.249 63.4772 260.726 59 266.249 59H327.329C332.852 59 337.329 63.4772 337.329 69V160.72C337.329 166.243 332.852 170.72 327.329 170.72H266.249C260.726 170.72 256.249 166.243 256.249 160.72V69Z"
            fill="#EC3232"
            fill-opacity="0.4"
          />
          <path
            d="M256.249 185.72C256.249 180.197 260.726 175.72 266.249 175.72H370.764C376.287 175.72 380.764 180.197 380.764 185.72V304.04C380.764 309.563 376.287 314.04 370.764 314.04H266.249C260.726 314.04 256.249 309.563 256.249 304.04V185.72Z"
            fill="#EC3232"
            fill-opacity="0.4"
          />
          <path
            d="M256.249 329.04C256.249 323.517 260.726 319.04 266.249 319.04H382.347C387.87 319.04 392.347 323.517 392.347 329.04V423.42C392.347 428.943 387.87 433.42 382.347 433.42H266.249C260.726 433.42 256.249 428.943 256.249 423.42V329.04Z"
            fill="#EC3232"
            fill-opacity="0.4"
          />
          <path
            d="M256.249 448.42C256.249 442.897 260.726 438.42 266.249 438.42H304.163C309.686 438.42 314.163 442.897 314.163 448.42V478.96C314.163 484.483 309.686 488.96 304.163 488.96H266.249C260.726 488.96 256.249 484.483 256.249 478.96V448.42Z"
            fill="#EC3232"
            fill-opacity="0.4"
          />
        </mask>
        <g mask="url(#mask0_159_105)">
          <g style={{ ['mix-blend-mode']: 'luminosity' }}>
            <rect
              width="533.684"
              height="650.932"
              transform="matrix(-1 0 0 1 503.684 -112)"
              fill="url(#pattern0)"
            />
          </g>
        </g>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_159_105"
              transform="translate(0 -0.115147) scale(0.00117233 0.000961167)"
            />
          </pattern>
          <image
            id="image0_159_105"
            width="853"
            height="1280"
            xlinkHref={photo.publicURL}
          />
        </defs>
      </motion.svg>

    </HeroPictureContainer>
  )
}

export default AboutHeroPicture
