import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { spacing } from '../../../../../styles/mixins'
import MagnetElement from '../../../../../helpers/MagnetElement'
import useMagnet from '../../../../../hooks/useMagnet'
import {Link} from 'gatsby'

const ReadButtonContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-top: auto;
  //border: thin solid red;

  ${spacing('pr', 0.5)};
  ${spacing('pb', 0.5)};

  .read {
    ${spacing('p', 1.2)};

    position: relative;
    grid-row: 1 /1;
    grid-column: 1/ 1;
    z-index: 0;

    p {
      letter-spacing: .8px;
      text-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.76);
      margin: 0;
      padding: 0;
      text-transform: capitalize;
      line-height: 0;
    }
    
    a.link{
      position: absolute;
      inset: 0;
      z-index: 0;
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

const ReadButton = ( {txt, to, index} ) => {
  useMagnet(`.read-btn-${index}`, 1.2, .4)

  return (
    <ReadButtonContainer  data-tooltip
                          data-tooltip-text='Lets read that one!'
    >
      <span className={`read read-btn-${index}`}>
        <Link to={to}  className='link' />
        <Typography variant="body1">{txt}</Typography>
      </span>
      <span className="bg" />
    </ReadButtonContainer>
  )
}

export default ReadButton
