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
      fromCaseStudy, setFromCaseStudy
    }} >

      {children}

    </AppStateContext.Provider>
  )
}

export default AppStateProvider
