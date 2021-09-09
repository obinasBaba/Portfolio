import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Typography} from '@material-ui/core'
import {spacing, text} from '../../../../styles/mixins'
import useOnScreen from '../../../../hooks/useOnScreen'
import lotti from 'lottie-web'

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  
  gap: 1.5rem;
`

const List = styled.div`
  //margin-top: 2rem;
  //letter-spacing: 1.5px;
  
  font-weight: 300;
  
  

  & > :not(:first-child){
    margin-top: .5rem;
  }
  
`

const Text = styled( Typography )`
  max-width: 36ch;
  
  ${text(.95)};
`

const SkillTitle = styled( Typography )`
  font-weight: bolder;
`

const Illustration= styled.div`
  max-width: 100px;
  margin-bottom: -1.5rem;
`

const SkillColumn = ({path, title, text, list}) => {

  const lottiRef = useRef(null)

  // const inView = useOnScreen(lottiRef, 0, )


  useEffect(() => {
    // lotti.destroy(path)

    let r = 1;
    if (path) {
      lottiRef.current = lotti.loadAnimation({
        name: path.publicURL,
        container: lottiRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: path.publicURL,
      })

      // l.addEventListener('data_ready', () => {})
      lottiRef.current.addEventListener('complete', () => {
        1 === r ? r = -1 : -1 === r && (r = 1);
        lottiRef.current.setDirection(r);
        lottiRef.current.play();
      })

    }

    return ( ) => lotti.destroy(path.publicURL)

  }, [])


  return (
    <Container>
      <Illustration ref={lottiRef}/>
      <SkillTitle variant='h4'>{title}</SkillTitle>
      <Text >{text}</Text>

      <List>
        {list.map(txt => <Typography>{txt}</Typography>)}
      </List>


    </Container>
  )
}

export default SkillColumn
