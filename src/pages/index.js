import React, {useContext, useEffect} from 'react'
import HomePage from '../scenes/HomePage'
import {AppStateContext} from '../contexts/AppStateContext'
import useLocoScroll from '../hooks/useLocoScroll'
import useToolTip from '../hooks/useToolTip'
import useRefreshMouseListeners from '../hooks/useRefreshMouseListeners'
import Seo from '../components/seo'
import {MotionValueContext} from '../contexts/MotionStateWrapper'

const IndexPage = ({path}) => {
    const {setCurrentPath, currentPath} = useContext(AppStateContext)

    const {mainAnimationController} = useContext(MotionValueContext)

    const loco = useLocoScroll()

    useEffect(() => {
        if (path !== currentPath) mainAnimationController.start('animate');

        setCurrentPath(path)
    }, [])

    useToolTip('[data-tooltip-text]')
    useRefreshMouseListeners('[data-pointer]')

    return (
        <>
            <Seo
                title="homepage"
                description="this is homepage of my portfolio site"
            />
            <HomePage/>
        </>
    )
}

export default IndexPage
