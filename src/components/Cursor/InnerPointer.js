import React, { useEffect } from "react";
import gsap from "gsap";
import { PointerContainer } from "./index";

const InnerPointer = () => {

  useEffect(() => {

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
