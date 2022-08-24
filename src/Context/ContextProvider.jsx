import React, { useState } from 'react'
import { createContext } from 'react'
export const AuthContext = createContext();
const { Provider } = AuthContext;
export default function ContextProvider({children}) {
    const [isAuth, setIsAuth] = useState(false);
    const toggleAuth = () => {
        setIsAuth(!isAuth);
    }
  return (
    <Provider value={{isAuth,toggleAuth}}>
      {children}
    </Provider>
  )
}
