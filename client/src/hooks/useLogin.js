import { useState } from 'react'
import { AUTH } from '../constants/constants';
import { useAuthContext } from './useAuthContext'
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [loginError, setLoginError] = useState(null)
  const [loginIsLoading, setLoginIsLoading] = useState(null)
  const { authDispatch } = useAuthContext()
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoginIsLoading(true)
    setLoginError(null)

    const response = await fetch('/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setLoginIsLoading(false)
      setLoginError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      authDispatch({type: AUTH, payload: json})

      // update loading state
      setLoginIsLoading(false)

      navigate('/college-dashboard', {replace: true})
    }
  }

  return { login, loginIsLoading, loginError, setLoginError }
}