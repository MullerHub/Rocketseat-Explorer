import { createContext, useContext, useState } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      console.log(response)

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)

      } else {
        alert("Não foi possivel logar")

      }
    }
  }

  return (
    <AuthContext.Provider value={{ name: 'ana', email: 'ana@ana.com' }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
