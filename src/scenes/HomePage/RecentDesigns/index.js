import React, { useRef } from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import Title from './Title'
import { useRecentDesignAssets } from '../../../hooks/queries/useRecentDesignAssets'
import { spacing } from '../../../styles/mixins'
import { useSpring, animated } from 'react-spring'


const RecentDesignWrapper = styled.div`
  border: thin solid crimson;
  ${spacing( 'pt', 10 )}
  ${spacing( 'pb', 10 )}
`

const WorksPage = () => {

  const n = useRef(0);
  const { circledText, dribbleRed } = useRecentDesignAssets();

  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 180 },
    config: {
      friction: 5,
    }
  })

  console.log(styles)

  return (
    <RecentDesignWrapper>

      <Title circledText={ circledText.publicURL }
             dribbleRed={ dribbleRed.publicURL } />

      <animated.div style={{
        margin: '0 auto',
        width: 89,
        height: 80,
        backgroundColor: '#5e83a8',
        borderRadius: 16,
        ...styles
      }} />

    </RecentDesignWrapper>
  )
}

export default WorksPage;
