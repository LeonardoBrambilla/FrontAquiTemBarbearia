  // import React, { createContext, useContext, useEffect, useState } from 'react'

  // import Router from 'next/router'

  // import { getCookie } from 'cookies-next'
  // import { destroyCookie } from 'nookies'
  // import { signInRequest } from '../services/auth'



  // export const AuthContext = createContext({})

  // export const AuthProvider = ({ children }) => {
  //   const [user, setUser] = useState({})
  //   const [isAuthenticated, setIsAuthenticated] = useState(false)

  //   async function updateUserData(user) {
  //     setUser(user)
  //   }
  //   async function signIn({ email, password }) {
  //     const { data } = await signInRequest({
  //       email,
  //       password
  //     })
  //     const { token, user } = data
  //     setUser({
  //       ...user,
  //       phone: user.phone?.replace(/[^0-9]/g, '')
  //     })
  //     return { data: { user, token } }
  //   }

  //   async function singOut() {
  //     destroyCookie(undefined, 'token', { path: '/' })
  //     setIsAuthenticated(false)
  //     setUser({})
  //     Router.push('/')
  //   }

  //   useEffect(() => {
  //     setIsAuthenticated(Boolean(getCookie('token')))
  //   }, [user])

  //   return (
  //     <AuthContext.Provider
  //       value={{ user, isAuthenticated, signIn, singOut, updateUserData }}
  //     >
  //       {children}
  //     </AuthContext.Provider>
  //   )
  // }

  // export function useAuth(){
  //   return useContext(AuthContext);
  // }
