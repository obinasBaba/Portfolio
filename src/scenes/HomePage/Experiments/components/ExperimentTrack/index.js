import React from 'react'
import styled, {css} from 'styled-components'
import G1 from  './search-context.gif';
import G2 from  './codepen-loader.gif';
import G3 from  './x-times.gif';
import G4 from  './search-context.gif';
import G5 from  './animation.gif';
import {largeUp, mediumUp, spacing} from '../../../../../styles/mixins'
import {GradientText} from '../../../../../components/GrdientText'
import {Typography} from '@material-ui/core'

const Track = styled.section`
  width: 100%;
  position: relative;
  //border: thin solid  red;
  //overflow: hidden;
  display: flex;
  flex-flow: wrap;

  &::after{
    content: '01';
    position: absolute;
    top: -5%;
    right: 20%;
    font-family: Poppins, sans-serif;
    font-weight: bolder;
    font-size: 15rem;
    z-index: -110;
  }
`

const Item = styled.div`
  //background-color: #faebd6;
  ${spacing('p', 1)};
  position: relative;
  
  background: rgba( 2, 2, 30, 0.30 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  -webkit-backdrop-filter: blur( 5.0px );
  //border: 1px solid rgba( 255, 255, 255, 0.18 );
  backdrop-filter: blur( 5.0px );
  
  display: flex;
  flex-flow: column;
  flex: 1 1 50%;
  
  ${ mediumUp( css`
    flex: 1 1 25%;
  ` ) };
  
  
  img {
    width: clamp(  100px, 35vw, 230px );
    height: clamp(  100px, 35vw, 230px );
    object-fit: cover;
    border-radius: 50%;
    margin: 20px auto 50px;
    box-shadow: 0 15px 40px 1px rgb(0  0  0 / 15%);
  }
`

const ExperimentTitle = styled( Typography )`
  ${spacing('pt', 2)};
  ${spacing('pl', 3)};
  ${spacing('pb', 3)};
`

const ExperimentTrack = () => {
  return (
    <Track>


      {
        [G1, G2, G3, G4].map( (gif, index) => {
          return(
            <Item key={index} >
              <img src={gif} alt='experiment gif' loading='lazy' />

              <ExperimentTitle align='left' variant={'body2'} >
                Experiments & Open Source
              </ExperimentTitle>

            </Item>
          );
        } )
      }

    </Track>
  )
}

export default ExperimentTrack
