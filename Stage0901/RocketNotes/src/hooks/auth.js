import { createContext } from 'react'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ name: 'ana', email: 'ana@ana.com' }}>
      {children}
    </AuthContext.Provider>
  )
}
