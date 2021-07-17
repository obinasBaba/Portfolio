import React, { useEffect, useState } from 'react'

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
  const [top, setTop] = useState(null)

 /* const setTop = (value) => {
    console.log('setTOp ------------- ', value)
      console.log('initial top : ', top, 'new value: ', value)
      window.localStorage.setItem('top', value.toString())
      setTop1(value)
  }*/

  const [fromCaseStudy, setFromCaseStudy] = useState(false)

  const [titleRect, setTitleRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  useEffect(() => {
    // console.log('top is null', 'localSto : ', window.localStorage.getItem('top'))
    // setTop1( window.localStorage.getItem('top') )

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

    }} >

      {children}

    </AppStateContext.Provider>
  )
}

export default AppStateProvider
