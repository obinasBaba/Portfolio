import React, { useContext, useEffect, useRef } from 'react'
import MotionBtn from '../../../../components/MotionBtn'
import { motion } from 'framer-motion'
import {
  btnTxtVariants,
  containerVariant,
  tagsVariants,
  letterVariant,
  titleVariant,
  transition,
} from './Variants'
import {
  OverflowWrapper,
  ProjectDescriptionContainer,
  Tags,
} from './components'
import baffle from 'baffle'
import { AppStateContext } from '../../../../contexts/AppStateContext'
import RightArrowLink from '../../../HomePage/Experiments/components/ExperimentTrack/RightArrowLink'
import Title from './components/Title'
import OverFlowBox from './components/OverFlowBox'

const ProjectDescription = ({
  link,
  reversed,
  tags,
  title,
  url,
  index,
  exit,
}) => {
  const baffleRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    baffleRef.current = baffle(document.querySelectorAll(`.baffled-${index}`), {
      characters: '▒█▓▒░<>/',
    })

    baffle(document.querySelectorAll(`.baffled-${index}`), {
      characters: '▒█▓▒░<>/',
    })
      .start()
      .reveal(1000, 1400)
  }, [])

  return (
    <ProjectDescriptionContainer
      reversed={reversed}
      variants={containerVariant}
    >

      <OverFlowBox variants={{
        inner: tagsVariants,
        custom: { baffle: baffleRef.current, exit: exit },
        transition: transition
      }}>
        <Tags className={`baffled-` + index} variant={'subtitle2'}>
          {tags}
        </Tags>
      </OverFlowBox>

      <Title title={title} variants={{
        title: titleVariant,
        letter: letterVariant,
        transition
      }}/>


      <OverFlowBox variants={{
        inner: btnTxtVariants,
        transition: transition
      }}>
        <MotionBtn
          text="Case-Study"
          to={link}
          state={{ path: url }}
          margin={false}
        />
      </OverFlowBox>

    </ProjectDescriptionContainer>
  )
}

export default ProjectDescription
