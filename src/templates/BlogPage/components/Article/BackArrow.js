import React, { useEffect } from 'react'
import styled from 'styled-components'
import ReturnBtn from '../../../../components/ReturnBtn'
import gsap from 'gsap'
import STrigger from 'gsap/ScrollTrigger'

const ArrowContainer = styled.div`
  position: relative;
  left : calc(3.27rem * var(--indent));
  top: calc(3.47rem * var(--indent));;
`

const BackArrow = () => {
  useEffect(() => {
    setTimeout(() => {
      const arr = document.querySelector('.arr-container')

      gsap.to(arr, {
        // x: -(trackRef.current.offsetWidth - 500 ),
        scrollTrigger: {
          trigger: arr,
          pinSpacing: false,
          pin: true,
          scrub: 2,
          start: 'top 20%',
          end: () => '+=' + 2000,
          onUpdate(self) {
            // progress.set(self.progress)
          },
        },
      })

      STrigger.refresh()
    })
  }, [])

  return (
    <ArrowContainer className='arr-container'>
      <ReturnBtn to="/blog" />
    </ArrowContainer>
  )
}

export default BackArrow
