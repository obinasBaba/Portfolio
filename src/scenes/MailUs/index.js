import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import MotionBtn from '../../components/MotionBtn'
import { heightWidth, spacing, text } from '../../styles/mixins'
import Logo from './logo.svg'
import { AppStateContext } from '../../contexts/AppStateContext'
import { GradientText } from '../../components/GrdientText'
import FooterMeta from './FooterMeta'
import Footer from '../../components/Footer'

const MailUsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  //height: calc(100vh - 142px);
  //overflow: hidden;
  box-sizing: border-box;
  z-index: 0;

  ${spacing('pt', 15)};
  ${spacing('h', 4)};

  &::after {
    content: '';
    position: absolute;
    top: 60%;
    left: 50%;
    border-radius: 50%;
    //box-shadow: 70px 120px 150px -30px rgba(2, 2, 30, 0.6);
    transform: translate(-50%, -50%);
    transition: all 1s;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    filter: blur(10px);
    ${heightWidth('width', 65)};
    ${heightWidth('height', 65)};
  }

`

const Background = styled.span`
  //display: inline-block;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  //height: calc(100% + (var(--indent) * 1000px));
  background: linear-gradient(to bottom, rgba(30, 33, 61, -10%) 0%, #02021e 20%);
`

const TitleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  
  .title{

    font-weight: 900;
    
    // ${ text(5) };
  }
`

const MailUs = () => {
  const elRef = React.useRef(null)
  const { isContactOpen, setContactModal } = useContext(AppStateContext);
  let elParams = null
  let elPosition = null

  const [backgroundParallax, setBackgroundParallax] = useState(null);
  const { setHeaderGradient } = useContext( AppStateContext );


  const moveBackground = () => {
    elParams = elRef.current.getBoundingClientRect();
    elPosition = elParams.top - window.innerHeight;
    if (elPosition + elParams.height / 2 <= 0) {
      setBackgroundParallax({
        transform: `translate3d(0, ${elParams.height + elPosition}px, 0)`,
      })
    }
  }

  useEffect(() => {
    elParams = elRef.current.getBoundingClientRect()
    setBackgroundParallax({
      transform: `translate3d(0, ${elParams.height / 2}px, 0)`,
    })
    window.addEventListener('scroll', moveBackground)
    return () => window.removeEventListener('scroll', moveBackground)
  }, []);

  useEffect(() => {
    function removeGradient(MailUsRef) {
      const el = MailUsRef.current.getBoundingClientRect().top;
      return el < 120
        ? setHeaderGradient(false)
        : setHeaderGradient(true);
    }

    let removeGradientOnScroll = removeGradient(elRef);

    window.addEventListener('scroll', () => removeGradientOnScroll);
    return () => window.removeEventListener('scroll', removeGradientOnScroll);
  });

  return (
    <MailUsContainer ref={elRef} >
      <Background   />

      <TitleWrapper>
        <GradientText variant='h1' className='title' >
          Ready To Create <br /> Your Star ?</GradientText>
        <MotionBtn text={'Contact Me'} arrow={false} fontLarge
                   onClick={() => setContactModal( !isContactOpen )}
        />
      </TitleWrapper>

      <FooterMeta/>

      <Footer/>

    </MailUsContainer>
  )
}

export default MailUs
