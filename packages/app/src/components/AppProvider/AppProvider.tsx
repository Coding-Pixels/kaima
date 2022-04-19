import React, { ReactNode, FC, useState, useEffect } from 'react'
import firebase from 'firebase/auth'
import { auth } from '../../config/firebase'

export const AppContext = React.createContext<unknown | null>(null)

type Props = {
  children: ReactNode
}

export const AppProvider: FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)

  useEffect(() => auth.onAuthStateChanged(setCurrentUser), [])

  return (
    <AppContext.Provider value={{ currentUser }}>
      {children}
    </AppContext.Provider>
  )
}
