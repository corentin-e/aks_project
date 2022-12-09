import React, { createContext, useState } from 'react'
import dojo from './data'

export const Context = createContext()

export const Provider = ({ children }) => {
  const [data] = useState(dojo);



  return <Context.Provider value={data}>{children}</Context.Provider>
}


export default Context
// Create Context and export a Provider