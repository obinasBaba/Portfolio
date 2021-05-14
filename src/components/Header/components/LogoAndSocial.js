import React from 'react'
import { Divider, SvgIcon } from '@material-ui/core'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/all'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import useHeaderAssets from '../../../hooks/queries/useHeaderAssets'
import { Link } from 'gatsby'
import { heightWidth, spacing } from '../../../styles/mixins'

const Logo = styled.div`
  margin-right: auto;
  fill: white; //todo gradient
  z-index: 50;
  display: flex;
  ${ spacing('gap',  1) };
  align-items: center;
  justify-content: center;

  & > :first-child{
    ${heightWidth('max-width', 6)};
    
    & svg{
      fill: 
    }
  }
  
  & > :nth-child( n+2 ){
    ${ heightWidth('font-size', 2) };
  }
  
`

const DividerLine = styled( Divider )`
  ${heightWidth('margin-left', .6)};
  ${heightWidth('margin-right', .6)};
  background: rgba( 255, 255, 255, .2 );
  height: 25px;
  align-self: center;
`

const LogoAndSocial = () => {
  const { logo } = useHeaderAssets()

  return (
    <Logo>
      <Link to={'/'}>
        <ReactSVG src={logo.publicURL} />
      </Link>

      <DividerLine orientation="vertical" light={true} flexItem />
      {/**/}
      <FaTwitter />
      <FaGithub />
      <FaLinkedin />
    </Logo>
  )
}

export default LogoAndSocial
