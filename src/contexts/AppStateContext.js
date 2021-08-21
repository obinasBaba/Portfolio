import React, {useEffect, useLayoutEffect, useState} from 'react'
import Subscribers from '../helpers/Subscribers'

export const AppStateContext = React.createContext(false)


const AppStateProvider = ( {children} ) => {

  const [moonLight, setMoonLight] = useState({
    showMoon: true,
    show: true,
    position: 'absolute',
  })

  const loadingEvents = Subscribers.getInstance();

  const [isWhite, setIsWhite] = useState(false)
  const [isHeaderGradient, setHeaderGradient] = useState(false)
  const [isContactOpen, setContactModal] = useState(false)
  const [top, setTop] = useState(null)
  const [loadingPage, setLoadingPage] = useState(true)
  const [currentPath, setCurrentPath] = useState('/')

  const [toolTip, setToolTip] = useState({
    text: '...',
    show: true
  })


  const [fromCaseStudy, setFromCaseStudy] = useState(false)

  const [titleRect, setTitleRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })


  useLayoutEffect(() => {

    // new Subscribers().addListener()

   loadingEvents.addListener('finishLoading', () => {
     setLoadingPage(false)
     setToolTip({
       text: '',
       show: false
     })
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
      currentPath, setCurrentPath
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
