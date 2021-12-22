import React from 'react'
import styled from 'styled-components'
import { Container, Typography } from '@material-ui/core'
import { spacing, text } from '../../styles/mixins'
import ContactInfo from './ContactInfo'
import ThankYou from './Thankyou'

const SiteInfoContainer = styled(Container)`
  min-height: 100vh;
  border: thin solid red;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  
  
  ${spacing('mt', 20)};
  ${spacing('gap', 10)};

  .site-info {
    font-family: 'Elianto-Regular', serif;
    font-weight: 900;
    ${spacing('mb', 5)};


    ${text(7)};
  }
  
  .intro{
    max-width: 40ch;
    align-self: flex-end;
    
    ${text(1.2)};
  }
`

const SiteInfo = () => {
  return (
    <SiteInfoContainer maxWidth="lg" fixed={false}>
      <Typography variant="h1" className="site-info">
        Site Info
      </Typography>
      <p className='intro'>
        henok getachew, residing in AddisAbeba, Ethiopia, is
        responsible for the content of this website;
      </p>

      <ContactInfo />
      <ThankYou/>
    </SiteInfoContainer>
  )
}

export default SiteInfo
