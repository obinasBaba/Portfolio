import React, {useEffect, useLayoutEffect, useState} from 'react'
import EventSubscribers from '../helpers/EventSubscribers'
import {useMotionValue, useTransform} from 'framer-motion'

export const AppStateContext = React.createContext(false)


const AppStateProvider = ( {children} ) => {

  const [moonLight, setMoonLight] = useState({
    showMoon: true,
    show: true,
    position: 'absolute',
  })

  const loadingEvents = EventSubscribers.getInstance();

  const [isWhite, setIsWhite] = useState(false)
  const [isHeaderGradient, setHeaderGradient] = useState(false)
  const [isContactOpen, setContactModal] = useState(false)
  const [top, setTop] = useState(null)
  const [loadingPage, setLoadingPage] = useState(true)
  const [currentPath, setCurrentPath] = useState('/')
  const [cursorScaled, setCursorScaled] = useState(false)

  const [registeredScrollPos, setRegisteredScrollPos] = useState(null)
  const [toolTip, setToolTip] = useState({
    text: '',
    show: false
  })
  const [titleRect, setTitleRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  //using motionValue to avoid rerender
  const fromProjectList = useMotionValue(false);
  const fromCaseStudy = useMotionValue(false);
  const isTop = useMotionValue(true);

  const x= useMotionValue(0)
  const y= useMotionValue(0)
  const yProgress= useMotionValue(0);
  const xProgress= useMotionValue(0);
  const limit= useMotionValue(0)


  useLayoutEffect(() => {

    // new EventSubscribers().addListener()

   loadingEvents.addListener('finishLoading', () => {
     setLoadingPage(false)
   })


    }, [])


  return (
    <AppStateContext.Provider value={{

      moonLight,
      setMoonLight,
      setIsWhite,
      isWhite,
      isHeaderGradient,
      setHeaderGradient,
      isContactOpen, setContactModal,

      titleRect, setTitleRect,
      top, setTop,
      loadingPage, setLoadingPage,
      events: loadingEvents,
      toolTip, setToolTip,
      currentPath, setCurrentPath,
      cursorScaled, setCursorScaled,
      registeredScrollPos, setRegisteredScrollPos,
      moScroll: {
        x, y, yProgress, xProgress, limit,
      },

      variantsUtil: {
        fromCaseStudy,
        fromProjectList,
        isTop
      },
      // magnet: MagnetElements

    }} >

      {children}

    </AppStateContext.Provider>
  )
}


const StateWrapper = ({children}) => {
  return (
    <AppStateProvider>
      {children}
    </AppStateProvider>
  )
}

export default StateWrapper
