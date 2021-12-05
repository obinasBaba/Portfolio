import React, { useEffect } from "react";
import gsap from "gsap";
import { PointerContainer } from "./index";

const OuterPointer = () => {


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
