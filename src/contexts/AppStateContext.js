import React, {useEffect, useLayoutEffect, useState} from 'react'
import EventSubscribers from '../helpers/EventSubscribers'

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

  const [toolTip, setToolTip] = useState({
    text: '',
    show: false
  })


  const [fromCaseStudy, setFromCaseStudy] = useState(false)

  const [titleRect, setTitleRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })


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
      fromCaseStudy, setFromCaseStudy,
      titleRect, setTitleRect,
      top, setTop,
      loadingPage, setLoadingPage,
      events: loadingEvents,
      toolTip, setToolTip,
      currentPath, setCurrentPath,
      cursorScaled, setCursorScaled
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
