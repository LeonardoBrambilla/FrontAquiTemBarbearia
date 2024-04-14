import { setCookie } from 'nookies'

import { AUTH_TOKEN_NAME, AUTH_TOKEN_TIME } from '~/constants'
import { SignInData } from '~/contexts/AuthContext'
import { User } from '~/types'

import api from './api'


const delay = (amount = 750) =>
  new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(
  signInData
){
  const { data } = await api.post('auth/login', signInData)
  return data
}

export async function signUpRequest(signUpData) {
  const { data } = await api.post<string>('auth/register', signUpData)
  return data
}

export function SetAuthenticationToken(token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`
  setCookie(undefined, AUTH_TOKEN_NAME, token, {
    path: '/',
    maxAge: AUTH_TOKEN_TIME
  })
}
