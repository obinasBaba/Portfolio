import React, { useState } from 'react'

export const AppStateContext = React.createContext(false)


const AppStateProvider = ( {children} ) => {

  const [show, setShow] = useState(false);
  const [moon, setMoon] = useState(true);
  const [moonLight, setMoonLight] = useState(true);

  const [isWhite, setIsWhite] = useState(false)
  const [isHeaderGradient, setHeaderGradient] = useState(true)
  const [isContactOpen, setContactModal] = useState(false)



  return (
    <AppStateContext.Provider value={{
      show,
      setShow,
      moon,
      setMoon,
      moonLight,
      setMoonLight,
      setIsWhite,
      isWhite,
      isHeaderGradient,
      setHeaderGradient,
      isContactOpen,
      setContactModal,
    }} >

      {children}

    </AppStateContext.Provider>
  )
}

export default AppStateProvider
