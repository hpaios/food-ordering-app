'use client'
import { SessionProvider } from 'next-auth/react'

export interface AppProviderProps  { 
  children: React.ReactNode
}

const AppProvider = ({children}: AppProviderProps) => {
  return(
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default AppProvider;
