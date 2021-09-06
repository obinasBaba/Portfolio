import React, {useEffect, useLayoutEffect, useRef} from 'react'
import lotti from 'lottie-web'
import styled from 'styled-components'
import {spacing} from '../../../../styles/mixins'

const IllustrationContainer = styled.div`
  max-width: 75px;
  //border: thin solid red;

  path {
    stroke: #1e213d;
    fill: #02021e;
  }
  
  ${spacing('mt', -2.7)};
  ${spacing('ml', -2.7)};

`

const TopicIllustration = ({path}) => {
  const iconRef = useRef(null)


  useLayoutEffect(() => {
    lotti.destroy(path.publicURL)

    let r = 1;
    if (path) {
      const lottiRef = lotti.loadAnimation({
        name: path.publicURL,
        container: iconRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: path.publicURL,
        // animationData: build
      })

      // l.addEventListener('data_ready', () => {})
      lottiRef.addEventListener('complete', () => {
        1 === r ? r = -1 : -1 === r && (r = 1);
        lottiRef.setDirection(r);
        lottiRef.play();
      })

    }
  }, [])

  return (
    <IllustrationContainer ref={iconRef}>

    </IllustrationContainer>
  )
}

export default TopicIllustration
