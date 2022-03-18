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
    
    &.outer-one{
      animation: rotate-one 4s linear infinite  ;

      @keyframes rotate-one {
        from {transform: rotate(0deg)}
        to {transform: rotate(-360deg)}
      }
    }
    
    &.outer-two{
      animation: rotate-two 6s linear infinite  ;

      @keyframes rotate-two {
        from {transform: rotate(0deg)}
        to {transform: rotate(360deg)}
      }
    }
  }
`

const OuterPointer = () => {


  useEffect(() => {

    return;
    
    gsap.to('.pointer.outer > *', {
      rotation:  (e) => e % 2 ? 360 : -360,
      duration: (e) => e % 2 ? 7.5 * 1.2 : 5.8 * 1.2,
      ease: 'none',
      repeat: -1
    })

  }, [])

  return (
    <PointerContainer className='pointer outer'>
      <p className='outer-one'>f</p>
      <p className='outer-two'>g</p>
    </PointerContainer>
  );
}


export default OuterPointer;
