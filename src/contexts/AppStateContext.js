import React, {useEffect, useState} from 'react'
import EventSubscribers from '../helpers/EventSubscribers'
import { MotionStateWrapper } from './MotionStateWrapper'
import { LoadStateWrapper } from './LoadStateContext'

export const AppStateContext = React.createContext({})
export const BackgroundOverlayStateContext = React.createContext(true)

const BackgroundOverlayStateWrapper = ({ children }) => {
  const [backgroundOverlay, setBackgroundOverlay] = useState(true)

  return (
    <BackgroundOverlayStateContext.Provider
      value={{
        backgroundOverlay,
        setBackgroundOverlay,
      }}
    >
      {children}
    </BackgroundOverlayStateContext.Provider>
  )
}

const AppStateWrapper = ({ children }) => {
  const [moonLight, setMoonLight] = useState({
    showMoon: true,
    show: true,
    position: 'absolute',
  })

  const loadingEvents = EventSubscribers.getInstance()

  const [isWhite, setIsWhite] = useState(false)
  const [isHeaderGradient, setHeaderGradient] = useState(false)
  const [isContactOpen, setContactModal] = useState(false)
  const [top, setTop] = useState(null)
  const [loadingPage, setLoadingPage] = useState(null)
  const [currentPath, setCurrentPath] = useState('/')
  const [cursorScaled, setCursorScaled] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [listenerTargetSelector, setListenerTargetSelector] = useState(
    '[data-pointer]'
  )

  const [registeredScrollPos, setRegisteredScrollPos] = useState(null)
  const [toolTip, setToolTip] = useState({
    text: '',
    show: false,
  })
  const [titleRect, setTitleRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

    useEffect(() => {
        console.log('currentPath :' ,currentPath)
    }, [currentPath])

  return (
    <AppStateContext.Provider
      value={{
        moonLight,
        setMoonLight,
        setIsWhite,
        isWhite,
        isHeaderGradient,
        setHeaderGradient,
        isContactOpen,
        setContactModal,
        menuIsOpen,
        setMenuIsOpen,
        titleRect,
        setTitleRect,
        top,
        setTop,
        loadingPage,
        setLoadingPage,
        events: loadingEvents,
        toolTip,
        setToolTip,
        currentPath,
        setCurrentPath,
        cursorScaled,
        setCursorScaled,
        registeredScrollPos,
        setRegisteredScrollPos,
        listenerTargetSelector,
        setListenerTargetSelector,
        // magnet: MagnetElements
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

const AppStateProvider = ({ children }) => {
  return (
    <AppStateWrapper>
      <MotionStateWrapper>
        <LoadStateWrapper>
          <BackgroundOverlayStateWrapper>
            {children}
          </BackgroundOverlayStateWrapper>
        </LoadStateWrapper>
      </MotionStateWrapper>
    </AppStateWrapper>
  )
}

export default AppStateProvider
