import React, { useEffect } from "react";
import gsap from "gsap";
import { PointerContainer } from "./index";

const OuterPointer = ({isFocused, isPointed}) => {

  useEffect(() => {
    gsap.to('.pointer.outer', {
      scale: isFocused ? 0 : 1,
      opacity: isFocused ? 0 : 1
    })
  }, [isFocused])

  useEffect(() => {

    gsap.to('.cursor-container', {
      zIndex: isPointed ? 8 : 30
    })

    gsap.to('.pointer.outer', {
      scale: isPointed ? .78 :  1,
      duration: .5
    })
  }, [isPointed])

  useEffect(() => {

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
