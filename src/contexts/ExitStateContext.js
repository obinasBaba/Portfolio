import React, {useEffect} from 'react'
import {useState} from 'react'


export const ExitStateContext = React.createContext(false);


const ExitStateProvider = ( {children} ) => {

  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ExitStateContext.Provider value={{
      show,
      setShow,
      activeIndex,
      setActiveIndex
    }} >

      {children}

    </ExitStateContext.Provider>
  )
}

export default ExitStateProvider
