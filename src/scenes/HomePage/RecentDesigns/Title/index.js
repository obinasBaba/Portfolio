import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Container, Typography } from '@material-ui/core'
import { heightWidth, largeUp } from '../../../../styles/mixins'

const TitleContainer = styled(Container)`
  display: flex;
  flex-flow: column;
  align-items: center;
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
    max-width: 120px;
  }
  
  .dribbleRed{
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

  useEffect(() => {

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  


  return (
    <TitleContainer maxWidth={'lg'} fixed={true} >
      <LogoLink
        href='href="https://dribbble.com/henok500'
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="Web App, Mobile"
          loading="lazy"
          src={circledText}
          className="circledText"
          style={dribbleTextTransform}
        />

        <img
          loading="lazy"
          alt="Web App, Mobile"
          src={dribbleRed}
          className="dribbleRed"
        />
      </LogoLink>

      <Typography variant={'h1'} style={{
        letterSpacing: '-2px',
        lineHeight: '1.25em',


      }}>Recent Works</Typography>
    </TitleContainer>
  )
}

export default Title
