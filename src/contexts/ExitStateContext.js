import React, {useEffect} from 'react'
import {useState} from 'react'


export const ExitStateContext = React.createContext(false);


const ExitStateProvider = ( {children} ) => {

  const [show, setShow] = useState(false);


  return (
    <ExitStateContext.Provider value={{
      show,
      setShow
    }} >

      {children}

    </ExitStateContext.Provider>
  )
}

export default ExitStateProvider
