import React, {useEffect} from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { Typography } from '@material-ui/core'
// import CloseBtn from './Companies/'
import { mediumUp, smallUp, spacing, text } from '../../styles/mixins'
import Companies from './Companies'

const ContactContainer = styled(motion.section)`
  position: fixed;
  overflow: hidden;
  background-color: rgba(12, 17, 39, 0.1);
  //background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  padding: 3rem;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //transform: translateX(100%);
  z-index: 200;
  margin: auto auto;

  svg {
    width: 100%;
    height: 100%;
  }
`

const BgSvgEffect = styled.div`
  //border: thin solid red;
  position: absolute;
  top: 3rem;
  right: 3rem;
  max-width: 50%;
  opacity: 0.1;
  z-index: 9999;

  //max-height: 558.156px;
  
`

const StarsSvgEffect = styled.div`
  //border: var(--thin);
  max-width: 200px;
  position: absolute;
  top: 10%;
  left: 2%;
  opacity: 0.3;
  //z-index: 9999;
`

const AboutHalf = styled.div`
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(137.81deg,
  #e7a28f 3.52%,
  #f9d6ac 41.89%,
  #fbfefc 96.77%);
  padding: 3rem;
  height: 100%;
  flex: 50%;
  z-index: 200;
  color: #02021e;

  &::after {
    z-index: -100;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //background-color: rgba(249, 214, 172, 0.1);
    backdrop-filter: blur(4px);
  }
`

const FormHalf = styled.div`
  //position: relative;
  background-color: rgb(30, 32, 64);
  padding: 3rem;
  flex: 50%;
  //z-index: 200;
  color: #f1d7ce;
  height: 100%;
`

const DescSubtitle = styled( Typography )`
  ${ spacing('mt', 1) };
  ${ spacing('mb', 1) };
  font-weight: 700;
  opacity: 0.5;

  ${ text(1.5) };

  ${ smallUp( css`
    ${ text(1.2) };
  ` ) };
`

const Title = styled( Typography )`
  position: relative;
  font-weight: bold;
  ${ spacing('mb', 6) };
  
  &::after{
    content: '';
    position: absolute;
    display: block;
    background: ${ ({afterColor}) => afterColor ? afterColor : 'rgb(30, 33, 61)' };
    height: 3px;
    width: 18%;
    ${ spacing('mt', 2) };
  }

  ${ mediumUp( css`
    ${ spacing('mb', 3) };
    &::after{
      ${ spacing('mt', 1) };
    }

  ` ) };
`

const Description = styled( Typography )`
  //max-width: 43ch;
  font-family: var(--sofia-pro);
  font-weight: lighter;
  line-height: 160%;
  letter-spacing: 0.5px;
  opacity: 0.7;
  margin: 0;
  position: relative;
  ${ spacing( 'mb', 4 ) };
  ${ text(1.1) };
  
  &::after{
    //content: '';
    position: absolute;
    display: block;
    height: 1px;
    background: rgb(30, 33, 61);
    opacity: 0.5;
    width: 100%;
    ${ spacing('mt', 4) };
  }
  
`

const AboutEffect = styled( Typography )`
  position: absolute;
  top: 20%;
  line-height: 0;
  right: -55%;
  font-size: 15rem;
  opacity: .05;
  z-index: -150;
  pointer-events: none;
  user-select: none;
`

const ContactMe = ({ toggleModal: { setContactModal, isContactOpen } }) => {

  const technologies = ['Interactive Web developer'];

  useEffect(() => {
    const closeModal = ( key ) => {
      if ( key.key === 'Escape' )
        setContactModal(!isContactOpen)
    };

    window.addEventListener('keyup', closeModal)

      return () => {
        window.removeEventListener('keyup', closeModal)
      }
    },
    [])
  
  
  return (
    <ContactContainer>
      <BgSvgEffect>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="943.525"
          height="758.156"
          viewBox="0 0 943.525 758.156"
        >
          <path
            id="Intersection_2"
            data-name="Intersection 2"
            d="M172.386-227.8a59,59,0,0,1,10.167-82.817L411.729-489.669a51.647,51.647,0,0,0,8.531-72.02,51.649,51.649,0,0,0-71.927-9.156l0,0L226.31-475.512a59,59,0,0,1-82.817-10.169A59,59,0,0,1,153.661-568.5l505.3-394.781h415.551V-564.6L783.3-337.082a59,59,0,0,1-82.567-10.363,59,59,0,0,1,10.17-82.817l80.7-63.052a56.66,56.66,0,0,0,9.37-79.021,56.66,56.66,0,0,0-78.93-10.031h0L255.2-217.633a58.757,58.757,0,0,1-36.283,12.51A58.889,58.889,0,0,1,172.386-227.8Z"
            transform="translate(-130.983 963.279)"
            // fill="#1b2036"
            fill="#80808e"
          />
        </svg>
      </BgSvgEffect>

     {/* <StarsSvgEffect>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="138.869"
          height="162.192"
          viewBox="0 0 138.869 162.192"
        >
          <g
            id="Group_6"
            data-name="Group 6"
            transform="translate(-434.748 -212.272)"
          >
            <path
              id="Union_2"
              data-name="Union 2"
              d="M9.262-1553.123l-1.274-3.32-3.317,1.273a2.83,2.83,0,0,1-3.657-1.628,2.829,2.829,0,0,1,1.628-3.656l3.317-1.273-1.275-3.32a3,3,0,0,1,1.725-3.875l.007,0a3,3,0,0,1,3.875,1.725l1.275,3.32,3.316-1.273a2.83,2.83,0,0,1,3.657,1.627,2.831,2.831,0,0,1-1.628,3.657L13.6-1558.6l1.274,3.32a3,3,0,0,1-1.726,3.876l-.006,0a3,3,0,0,1-1.074.2A3,3,0,0,1,9.262-1553.123Z"
              transform="translate(524.223 1925.661)"
              fill="#fff"
            />
            <path
              id="Union_1"
              data-name="Union 1"
              d="M12.691-1546.594l-2.054-5.35L5.5-1549.974a3,3,0,0,1-3.876-1.725l-.551-1.436a3,3,0,0,1,1.725-3.875l5.135-1.971-2.054-5.35a3,3,0,0,1,1.726-3.875l1.867-.717a3,3,0,0,1,3.876,1.726l2.053,5.35,5.135-1.971a3,3,0,0,1,3.875,1.726l.552,1.435a3,3,0,0,1-1.726,3.876l-5.134,1.971,2.054,5.351a3,3,0,0,1-1.725,3.875l-1.867.716a2.991,2.991,0,0,1-1.075.2A3,3,0,0,1,12.691-1546.594Z"
              transform="translate(548.451 1781.397)"
              fill="#fff"
            />
            <path
              id="Union_3"
              data-name="Union 3"
              d="M3.886-1562.853l-.606-1.58-1.513.581a1,1,0,0,1-1.292-.575l-.116-.3a1,1,0,0,1,.575-1.292l1.514-.581-.606-1.58a1,1,0,0,1,.575-1.292l.436-.167a1,1,0,0,1,1.292.575l.606,1.58,1.513-.581a1,1,0,0,1,1.292.575l.116.3A1,1,0,0,1,7.1-1565.9l-1.513.581.606,1.579a1,1,0,0,1-.575,1.292l-.437.167a1,1,0,0,1-.357.067A1,1,0,0,1,3.886-1562.853Z"
              transform="translate(434.456 1874.46)"
              fill="#fff"
            />
          </g>
        </svg>
      </StarsSvgEffect>*/}

      <AboutHalf>

        <AboutEffect variant='h1' > About </AboutEffect>

        <Title  variant="h4"> About Me. </Title>
        <DescSubtitle variant='subtitle2'> { technologies.join(', ') } </DescSubtitle>
        <Description>
          I'm Henok, a 22-years-old Ethiopian Freelance Front-end developer.<br/>
          I like to resolve design problems, create smart user interface and imagine
          useful interaction, developing rich web experiences & web applications.<br/>
          when not working or futzing around with code, I study how to
          scape from University. Actually for hire.
        </Description>

        <Companies />

      </AboutHalf>

      <FormHalf>

        {/*<CloseBtn toggler={setContactIsOpen} state={setContactIsOpen} />*/}

        <Title afterColor='#f1d7ce'  variant="h4"> Let's talk. </Title>
        <Typography variant='body2' > New projects, freelance inquiry or even a coffee. </Typography>




      </FormHalf>
    </ContactContainer>
  )
}

export default ContactMe
