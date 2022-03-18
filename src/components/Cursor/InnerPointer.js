import React, { useEffect } from "react";
import gsap from "gsap";
import {motion} from "framer-motion";
import {text} from "../../styles/mixins";
import styled from "styled-components";



const PointerContainer = styled(motion.div)`
  //display: g;
  position: absolute;
  //border: thin solid lightcoral;
  height: 1rem;
  width: 1rem;
  top: calc(-1rem / 2);
  left: calc(-1rem / 2);
  right: auto;
  bottom: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
  //transform: translate(-50%, -50%);

  p {
    position: absolute;
    font-family: 'shapes', serif;
    line-height: 0;
    padding: 0;
    margin: 0;
    top: -50%;
    left: -50%;
    inset: auto;
    //color: #b9c8d3;
    //color: rgba(2, 11, 22, 1);
    color: var(--theme);

    //font-size: 3.6rem;
    ${text(3)};

    //mix-blend-mode: difference;
  }

  &.inner {
    p {
      transition: color 0.1s ease-in;

      //font-size: .78rem;
      ${text(0.7)};

      &.inner-one{
        animation: rotate-one 3s linear infinite ;

        @keyframes rotate-one {
          from {transform: rotate(0deg)}
          to {transform: rotate(-360deg)}
        }
      }

      &.inner-two{
        animation: rotate-two 2s linear infinite ;

        @keyframes rotate-two {
          from {transform: rotate(0deg)}
          to {transform: rotate(360deg)}
        }
      }
      
    }
    
  }
`

const InnerPointer = () => {

  useEffect(() => {
    return;

    gsap.to('.pointer.inner > *', {
      rotation:  (e) => e % 2 ? 360 : -360,
      duration: (e) => e % 2 ? 6.6 * 1.2 : 5 * 1.2,
      ease: 'none',
      repeat: -1
    })
  }, [])

  return (
    <PointerContainer className='pointer inner'>
      <p className='inner-one'>h</p>
      <p className='inner-two'>i</p>
    </PointerContainer>
  );
}


export default InnerPointer;
