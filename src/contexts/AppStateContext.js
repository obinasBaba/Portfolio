import React, { useState } from 'react'

export const AppStateContext = React.createContext(false)


const AppStateProvider = ( {children} ) => {

  const [moonLight, setMoonLight] = useState({
    showMoon: true,
    show: true,
    position: 'absolute',
  })

  const [isWhite, setIsWhite] = useState(false)
  const [isHeaderGradient, setHeaderGradient] = useState(true)
  const [isContactOpen, setContactModal] = useState(false)

  const [fromCaseStudy, setFromCaseStudy] = useState(false)

  const [titleRect, setTitleRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  return (
    <AppStateContext.Provider value={{

      moonLight,
      setMoonLight,
      setIsWhite,
      isWhite,
      isHeaderGradient,
      setHeaderGradient,
      isContactOpen,
      setContactModal,
      fromCaseStudy, setFromCaseStudy,
      titleRect, setTitleRect

    }} >

      {children}

    </AppStateContext.Provider>
  )
}

export default AppStateProvider
