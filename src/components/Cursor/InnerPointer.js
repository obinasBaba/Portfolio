import React, { useEffect } from "react";
import gsap from "gsap";
import { PointerContainer } from "./index";

const InnerPointer = ({isPointed, isFocused, pointedColor}) => {

  useEffect(() => {

    gsap.to('.pointer.inner > *', {
      rotation:  (e) => e % 2 ? 360 : -360,
      duration: (e) => e % 2 ? 6.6 * 1.2 : 5 * 1.2,
      ease: 'none',
      repeat: -1
    })
  }, [])

  useEffect(() => {

    // console.log('isPointed: ' , isPointed);


    // setTimeout(() => {
    gsap.to('.pointer.inner', {
      scale: isPointed ? 3.3 :  1,
    })

    gsap.to('.pointer.inner > *', {
      color: isPointed ? ( pointedColor || '#a4b5c0' ) : 'var(--theme)',
    })


  }, [isPointed])

  useEffect(() => {

    // console.log('focused :', isFocused, );

    gsap.to('.pointer.inner > *', {
      color: isFocused ? ( pointedColor || '#a4b5c0' ) : 'var(--theme)',
      duration: gsap.defaults().duration
    })

    gsap.to('.pointer.inner', {
      scale: isFocused ? 1.2 : 1,
    })

  }, [isFocused])

  return (
    <PointerContainer className='pointer inner'>
      <p className='inner-one'>h</p>
      <p className='inner-two'>i</p>
    </PointerContainer>
  );
}


export default InnerPointer;
