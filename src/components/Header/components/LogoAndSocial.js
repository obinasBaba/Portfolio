import React from 'react'
import { Divider } from '@material-ui/core'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/all'
import styled, {css} from 'styled-components'
import useHeaderAssets from '../../../hooks/queries/useHeaderAssets'
import { Link } from 'gatsby'
import {heightWidth, mediumUp, spacing} from '../../../styles/mixins'
import { ReactSVG } from 'react-svg'

const Logo = styled.div`
  margin-right: auto;
  fill: white; //todo gradient
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > :not(:first-child){
    ${ spacing('ml', 1) };
  }
  
  ${ ({isWhite}) => isWhite ? css`
    & {
      color: ${ ({theme}) => theme.palette.primary.main };
      .logoSvg{
        fill: ${ ({theme}) => theme.palette.primary.main };
      }
    }
  ` : null };

  & > :first-child {
    ${heightWidth('max-width', 6)};
    
    ${ mediumUp( css`
      ${heightWidth('max-width', 4.2)};

    `) };

    & svg {
    }
  }

  & > :nth-child(n + 2) {
    ${heightWidth('font-size', 2)};

    ${ mediumUp( css`
      ${heightWidth('font-size', 1.5)};

    `) };
  }
`

const DividerLine = styled( Divider )`
  height: 25px;
  align-self: center;
`

const LogoAndSocial = ( {isWhite} ) => {
  const { logo } = useHeaderAssets()

  return (
    <Logo isWhite={isWhite} >

      <Link to={'/'}>
        <ReactSVG className='logoSvg' src={logo.publicURL} />
      </Link>

      <DividerLine  style={{
        background: `${(isWhite ? '#02021e' : 'rgba( 255, 255, 255, .2 )')}`,

      }} orientation="vertical" light={true} flexItem />


      <FaTwitter  />
      <FaGithub />
      <FaLinkedin />
    </Logo>
  )
}

export default LogoAndSocial
