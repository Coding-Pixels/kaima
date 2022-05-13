import React, { ReactNode, FC, useState, useEffect } from 'react'
import firebase from 'firebase/auth'
import { auth } from '../../config/firebase'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppContext = React.createContext<any | null>(null)

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
