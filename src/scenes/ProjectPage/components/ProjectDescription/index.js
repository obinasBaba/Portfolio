import React, { useContext, useEffect, useRef } from 'react'
import MotionBtn from '../../../../components/MotionBtn'
import {
  btnTxtVariants,
  containerVariant,
  letterVariant,
  tagsVariants,
  titleVariant,
  transition,
} from './Variants'
import { ProjectDescriptionContainer, Tags } from './components'
import baffle from 'baffle'
import Title from './components/Title'
import OverFlowBox from './components/OverFlowBox'
import { MotionValueContext } from '../../../../contexts/MotionStateWrapper'
import { css } from 'styled-components'

const ProjectDescription = ({ reversed, index, exit, items }) => {
  const baffleRef = useRef(null)

  const {
    variantsUtil: { fromProjectList },
  } = useContext(MotionValueContext)

  const { tags,  link, title, url } = items

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
      <OverFlowBox
        variants={{
          inner: tagsVariants,
          custom: { baffle: baffleRef.current, exit: exit },
          transition: transition,
        }}
      >
        <Tags className={`baffled-` + index} variant={'subtitle2'}>
          {tags}
        </Tags>
      </OverFlowBox>

      <Title
        title={title}
        variants={{
          title: titleVariant,
          letter: letterVariant,
          transition,
        }}
      />

      <OverFlowBox
        variants={{
          inner: btnTxtVariants,
          transition: transition,
        }}
        customStyle={css`
          //overflow: initial;
          padding-right: 15px;
          color: white;
          margin-top: 3px;
        `}
      >
        <MotionBtn
          text="Case-Study"
          tooltiptext='explore my journey'
          to={link}
          state={{ path: url }}
          margin={false}
          onClick={ _ => {
            fromProjectList.set(true)
          }}
        />
      </OverFlowBox>
    </ProjectDescriptionContainer>
  )
}

export default React.memo(ProjectDescription)
