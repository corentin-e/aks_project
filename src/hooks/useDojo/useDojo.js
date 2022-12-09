import { useContext } from 'react'
import { useLocation } from 'react-router-dom';

import dojoContext from './createContext'

const useDojo = () => {
  const location = useLocation()
  const dojoData = useContext(dojoContext)



  return dojoData[location.pathname.replace('/', "")]
}

export default useDojo
