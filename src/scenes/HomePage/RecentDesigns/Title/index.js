import React, {useContext, useEffect, useState} from 'react'
import styled, { css } from 'styled-components'
import { Container } from '@material-ui/core'
import { heightWidth, largeUp, spacing } from '../../../../styles/mixins'
import Headline from '../../../../components/Headline'
import {AppStateContext} from '../../../../contexts/AppStateContext'
import {useTransform} from 'framer-motion'
import {motion} from 'framer-motion'

const TitleContainer = styled(Container)`
  display: flex;
  flex-flow: column;
  align-items: center;
/*@include hl-margin(bottom, 100px);
@include hl-padding(top, 75px);*/
  
  ${ spacing( 'mb', 11 )};
  ${ spacing( 'pt', 7.5 ) };
`

const LogoLink = styled.a`
  position: relative;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  ${ heightWidth('width', 12) };
  
  ${ largeUp( css`
    margin-right: -20px;

  ` ) };
  
  img{
    width: 100%;
  }
  
  .circledText{
    width: 100%;
  }
  
  .dribbleRed{
    width: 100%;

    position: absolute;
    transition: transform 1s ease;
    will-change: transform;
    max-width: 3.18rem;
  }
  
  &:hover{
    & .dribbleRed{
      transform: rotate(360deg);
      filter: invert(52%) sepia(26%) saturate(5887%) hue-rotate(303deg) brightness(81%);
    }
  }
  
  
  
`

const Title = ({ dribbleRed, circledText }) => {

  const [dribbleTextTransform, setDribbleTextTransform] = useState(null);

  const handleScroll = () => {
    setDribbleTextTransform( {
      transform: `rotate(${window.pageYOffset / 3}deg)`,
    } );
  }
  const { moScroll } = useContext(AppStateContext)

  const rotate = useTransform(moScroll.y, [200, 2000], [0, 360])

  useEffect(() => {


  }, [])
  


  return (
    <TitleContainer maxWidth={'lg'} fixed={true} >
      <LogoLink
        href='href="https://dribbble.com/henok500'
        rel="noopener noreferrer"
        target="_blank"
      >
        <motion.img
          alt="Web App, Mobile"
          loading="lazy"
          src={circledText}
          className="circledText"
          style={{rotate}}
        />

        <img
          loading="lazy"
          alt="Web App, Mobile"
          src={dribbleRed}
          className="dribbleRed"
        />
      </LogoLink>

    {/*  <Typography variant={'h1'} style={{
        letterSpacing: '-2px',


      }}>Recent Works</Typography>*/}

      <Headline title='Designs' subtitle='Recent Designs' />

    </TitleContainer>
  )
}

export default Title
