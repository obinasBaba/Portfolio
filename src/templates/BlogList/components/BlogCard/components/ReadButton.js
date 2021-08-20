import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Typography} from '@material-ui/core'
import {spacing} from '../../../../../styles/mixins'
import MagnetElement from '../../../../../helpers/MagnetElement'

const ReadButtonContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-top: auto;
  //border: thin solid rebeccapurple;

  ${ spacing( "pr", .5 ) };
  ${ spacing( "pb", .5 ) };


  & > * {
    //position: absolute;
    //left: 0
  }

  .read {
    all: unset;
    grid-row: 1 /1;
    grid-column: 1/ 1;

    p {
      letter-spacing: 1px;
      text-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.76);
      margin: 0;
      padding: 0;
      //line-height: 0;
    }
  }

  .bg {
    grid-row: 1 /1;
    grid-column: 1/ 1;
    background-color: #e7a28f;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: -1;
    transform: translateX(-50%);
  }
`

const ReadButton = () => {

  useEffect(() => {

    const magnet = new MagnetElement({
      element: document.querySelector('.read'),
      amounts: {
        trigger: 1.2,
        stop: 1.5,
        distance: .75
      }
    })

    return () => {
      magnet.stop()
      magnet.disconnect()
    }

  }, [])

  return (
    <ReadButtonContainer>
      <button className='read' >
        <Typography
          variant="body1">
          Read
        </Typography>
      </button>
      <span className='bg' />
    </ReadButtonContainer>
  )
}

export default ReadButton
