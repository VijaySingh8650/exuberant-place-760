import React, { useState } from 'react'
import { createContext } from 'react'
export const AuthContext = createContext();
const { Provider } = AuthContext;
export default function ContextProvider({children}) {
  const [isAuth, setIsAuth] = useState(false);
  const [querry, setQuerry] = useState("");
  const [search, setSearch] = useState("");

  const toggleQuerry = (e) => {
    setQuerry(e.target.value);
  }
    const toggleAuth = () => {
        setIsAuth(!isAuth);
    }

  const clickBtn = () => {
    setSearch(querry);
  }
  return (
    <Provider value={{isAuth,toggleAuth, querry,toggleQuerry,search,clickBtn}}>
      {children}
    </Provider>
  )
}
