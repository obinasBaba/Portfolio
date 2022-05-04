import React from 'react'
import styled from 'styled-components'
import {spacing} from '../../../styles/mixins'
import {motion} from 'framer-motion'

const IconContainer = styled( motion.div )`
  
  display: grid;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  
  & > :last-child{
    // ${ spacing('mt', 1) };
  }
  
  svg{
    max-width: 60px;
    max-height: 60px;
    
    path{
      transition: all .2s ease-in-out;
    }
  }
  
  &:first-child{
    
  }
  
  
  
  .slid-txt{
    margin: 0;
    ${ spacing('mt', .7) };
  }
  
  
  
`

const containerVariants = {
  initial: {},
  animate: {},
  exit: {},
  hover: {}
}

const sliderVariant = {
  initial: {
    y: 0,
  },

  animate: {
    y: '100%',
    opacity: 0,
  },
  exit: {},

  hover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .3
    }
  }
}

export const ReactSvg = () => {
  return (
    <IconContainer variants={containerVariants}
                   initial='initial'
                   animate='animate'
                   exit='exit'
                   whileHover='hover'
    >
      <svg width="128" height="128" viewBox='0 0 42 40'
           fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 23.39a3.732 3.732 0 100-7.463 3.732 3.732 0 000 7.463z"
              fill="#444"/>

        <path d="M21 12.071c5.01 0 9.664.72 13.173 1.927C38.4 15.453 41 17.659 41 19.657c0 2.082-2.755 4.426-7.295 5.93-3.432 1.136-7.949 1.73-12.704 1.73-4.877 0-9.493-.557-12.964-1.743C3.645 24.074 1 21.699 1 19.657c0-1.982 2.482-4.17 6.65-5.624 3.523-1.227 8.292-1.962 13.35-1.962v0z"
              stroke="#444" strokeMiterlimit="10"/>
        <path d="M14.397 15.887c2.502-4.34 5.45-8.012 8.25-10.448 3.373-2.935 6.583-4.084 8.314-3.087 1.803 1.04 2.457 4.598 1.492 9.283-.73 3.542-2.472 7.75-4.848 11.871-2.436 4.224-5.225 7.945-7.987 10.36-3.493 3.054-6.872 4.159-8.64 3.14-1.717-.991-2.374-4.235-1.551-8.572.696-3.668 2.442-8.165 4.97-12.547v0z"
              stroke="#444" strokeMiterlimit="10"/>
        <path d="M14.403 23.515c-2.51-4.336-4.219-8.724-4.932-12.366-.858-4.388-.251-7.743 1.478-8.743 1.801-1.044 5.21.166 8.786 3.342 2.705 2.4 5.48 6.012 7.864 10.128 2.443 4.22 4.274 8.495 4.985 12.092.902 4.553.172 8.032-1.595 9.055-1.716.992-4.853-.059-8.2-2.938-2.827-2.433-5.852-6.192-8.386-10.57v0z"
              stroke="#444" strokeMiterlimit="10"/>
      </svg>

      <motion.p class='slid-txt' variants={sliderVariant}> React.js </motion.p>

    </IconContainer>
  )
}


export const UiUx = () => {
  return (
    <IconContainer  variants={containerVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    whileHover='hover'
    >
      <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 14 21" role="presentation">
        <path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" fill="#444"/>
      </svg>

      <motion.p class='slid-txt'
                variants={sliderVariant}

      > Motion.</motion.p>

    </IconContainer >
  )
}


export const Css = () => {
  return (
    <IconContainer variants={containerVariants}
                   initial='initial'
                animate='animate'
                exit='exit'
                whileHover='hover'
    >
      <svg width="90" height="126" fill="none"
           viewBox="0 20 110 105"
           xmlns="http://www.w3.org/2000/svg">

        <path id='big-bg' d="M81.418 115.982L45 125.788 8.58 115.982.177 24.936h89.646l-8.405 91.046z"
              fill="#444"/>

        <path id='small-bg' d="M44.999 32.311v85.656l.082.022 29.472-7.936 6.803-77.742H44.999z"
              fill="#444"/>

        <path d="M18.901 65.932l.864 10.748 25.202-10.776V55.076L18.9 65.932z" fill="url(#paint0_linear)"/>
        <path d="M72.886 43.449l-27.92 11.627v10.829l26.808-11.462 1.112-10.994z" fill="url(#paint1_linear)"/>
        <path d="M18.94 65.932l.866 10.748 38.668.123-.865 14.331-12.724 3.582-12.232-3.088-.741-8.895H20.547l1.482 17.171 22.98 6.795 22.853-6.671 2.966-34.096H18.94z"
              fill="url(#paint2_linear)"/>
        <path opacity=".05"
              d="M44.967 65.932H18.901l.865 10.748 25.201.08V65.932zm0 28.75l-.123.034-12.23-3.088-.741-8.895H20.507l1.483 17.172 22.977 6.794V94.682z"
              fill="#000"/>
        <path d="M16.554 43.449h56.332l-1.111 10.994H17.912L16.555 43.45z" fill="url(#paint3_linear)"/>
        <path opacity=".05" d="M44.967 43.449H16.554l1.359 10.994h27.054V43.45z" fill="#000"/>
        <defs>
          <linearGradient id="paint0_linear" x1="31.934" y1="76.68" x2="31.934" y2="55.076"
                          gradientUnits="userSpaceOnUse">
            <stop offset=".387" stopColor="#D1D3D4" stopOpacity="0"/>
            <stop offset="1" stopColor="#D1D3D4"/>
          </linearGradient>
          <linearGradient id="paint1_linear" x1="58.926" y1="65.905" x2="58.926" y2="43.449"
                          gradientUnits="userSpaceOnUse">
            <stop offset=".387" stopColor="#D1D3D4" stopOpacity="0"/>
            <stop offset="1" stopColor="#D1D3D4"/>
          </linearGradient>
          <linearGradient id="paint2_linear" x1="18.941" y1="86.316" x2="70.827" y2="86.316"
                          gradientUnits="userSpaceOnUse">
            <stop stopColor="#E8E7E5"/>
            <stop offset="1" stopColor="#fff"/>
          </linearGradient>
          <linearGradient id="paint3_linear" x1="16.554" y1="48.946" x2="72.886" y2="48.946"
                          gradientUnits="userSpaceOnUse">
            <stop stopColor="#E8E7E5"/>
            <stop offset="1" stopColor="#fff"/>
          </linearGradient>
        </defs>
      </svg>
      <motion.p class='slid-txt'
                variants={sliderVariant}

      > is Fun. </motion.p>

    </IconContainer>
  )
}


export const Js = () => {
  return (
    <IconContainer variants={containerVariants}
                   initial='initial'
                   animate='animate'
                   exit='exit'
                   whileHover='hover' >
      <svg xmlns="http://www.w3.org/2000/svg" width="96%" height="96%"
           viewBox="0 0 32 32">
        <path
          fill="#444"
          d="M.384.67v31.296H31.68V.67H.384zm16.334 26.772c-.461.937-1.342 1.553-2.362 1.85-1.568.36-3.067.155-4.183-.515-.747-.458-1.33-1.163-1.725-1.975.794-.485 1.586-.973 2.38-1.458.021.009.083.122.167.268.303.509.565.869 1.08 1.121.506.172 1.615.283 2.044-.607.262-.452.178-1.936.178-3.545 0-2.529.012-5.016.012-7.576h2.927c0 2.688.015 5.383 0 8.067.006 1.645.149 3.14-.518 4.369zm12.144-.827c-1.017 3.481-6.691 3.594-8.957 1.294-.479-.541-.779-.824-1.065-1.449 1.205-.693 1.205-.693 2.377-1.371.637.979 1.226 1.517 2.285 1.737 1.437.175 2.883-.318 2.559-1.844-.333-1.247-2.942-1.55-4.718-2.883-1.803-1.211-2.225-4.153-.744-5.834.494-.622 1.336-1.086 2.219-1.309l.922-.119c1.77-.036 2.877.431 3.689 1.339.226.229.41.476.756 1.012-.943.601-.94.595-2.291 1.47-.289-.622-.767-1.012-1.273-1.181-.785-.238-1.776.021-1.981.851-.071.256-.056.494.057.916.318.726 1.386 1.041 2.344 1.481 2.758 1.119 3.689 2.317 3.918 3.745.22 1.229-.054 2.026-.095 2.145z"
        />
      </svg>
      <motion.p class='slid-txt'
                variants={sliderVariant}

      > Semicolons. </motion.p>

    </IconContainer>
  )
}

