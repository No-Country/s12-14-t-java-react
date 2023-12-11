import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import { pageApi } from '../api/PageApi'
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth/authSlice'
import axios from 'axios'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const startRegister = async User => {
    dispatch(onChecking())
    try {
      const { data } = await axios.post('https://trucking-jebius.koyeb.app/api/v1/register', {
        ...User
      })
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
      console.log('Usuario creado correctamente', 'success')
      Swal.fire('Usuario correctamente registrado!')
      // navigateTo( `/profile/${ data.uid }` );
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data?.details
      })
      console.log('Error al crear usuario', error.response.data?.details, 'error')
      dispatch(onLogout(error.response.data?.msg || 'add valid email or password'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking())
    try {
      const { data } = await axios.post('https://trucking-jebius.koyeb.app/api/v1/login', {
        email,
        password
      })

      console.log(data)

      const d = new Date()

      // d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
      d.setTime(d.getTime() + 60 * 1000)

      let expires = 'expires=' + d.toUTCString()

      document.cookie = `token=${data.token}; ${expires};`

      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      // localStorage.setItem('user', data)
      dispatch(onLogin({ name: data.name, uid: data.uid }))

      console.log(data.user.name)
      Swal.fire(`Bienvenido! ${data.user.name} me debes Dinero`)
      navigate(`/dashboard`)
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data?.details
      })
      console.log('Error en la autenticación', error.response.data?.details, 'error')
      dispatch(onLogout('Credenciales incorrectas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
      console.log(error)
    }
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token')

    if (!token) return dispatch(onLogout())

    try {
      const { data } = await pageApi.get('auth/renew')
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      console.log(error)
      localStorage.clear()
      dispatch(onLogout())
    }
  }

  return {
    status,
    user,
    errorMessage,
    checkAuthToken,
    startRegister,
    startLogin
  }
}
