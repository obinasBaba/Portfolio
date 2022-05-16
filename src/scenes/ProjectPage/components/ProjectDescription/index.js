import React, { useContext, useEffect, useRef } from 'react'
import baffle from 'baffle'
import { css } from 'styled-components'
import MotionBtn from '../../../../components/MotionBtn'
import { btnTxtVariants, containerVariant, letterVariant, tagsVariants, titleVariant, transition, } from './Variants'
import { ProjectDescriptionContainer, Tags } from './components'
import Title from './components/Title'
import OverFlowBox from './components/OverFlowBox'
import { MotionValueContext } from '../../../../contexts/MotionStateWrapper'

function ProjectDescription( { reversed, index, exit, items } ){
    const baffleRef = useRef( null )

    const {
        variantsUtil: { fromProjectList },
    } = useContext( MotionValueContext )

    const { tags, link, title, url } = items

    useEffect( () => {
        baffleRef.current = baffle( document.querySelectorAll( `.baffled-${index}` ), {
            characters: '▒█▓▒░<>/',
        } )

        baffle( document.querySelectorAll( `.baffled-${index}` ), {
            characters: '▒█▓▒░<>/',
        } )
            .start()
            .reveal( 1000, 1400 )
    }, [] )

    return (
        <ProjectDescriptionContainer
            reversed={reversed}
            variants={containerVariant}
        >
            <OverFlowBox
                variants={{
                    inner: tagsVariants,
                    custom: { baffle: baffleRef.current, exit },
                    transition,
                }}
            >
                <Tags className={`baffled-${index}`} variant="subtitle2">
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
                    transition,
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
                    toolTipText='explore my journey'
                    to={link}
                    state={{ path: url }}
                    margin={false}
                    onClick={() => {
                        fromProjectList.set( true )
                    }}
                />
            </OverFlowBox>
        </ProjectDescriptionContainer>
    )
}

export default React.memo( ProjectDescription )
