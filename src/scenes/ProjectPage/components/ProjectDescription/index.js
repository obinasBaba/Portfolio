import React, {useEffect, useRef} from 'react'
import MotionBtn from '../../../../components/MotionBtn'
import {btnTxtVariants, containerVariant, letterVariant, tagsVariants, titleVariant, transition,} from './Variants'
import {ProjectDescriptionContainer, Tags,} from './components'
import baffle from 'baffle'
import Title from './components/Title'
import OverFlowBox from './components/OverFlowBox'

const ProjectDescription = ({
  reversed,
  index,
  exit,
    items,
}) => {
  const baffleRef = useRef(null)
  const titleRef = useRef(null)

  const { partners, tags, preview, alt, link, title, url } = items


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

export default React.memo(ProjectDescription)
