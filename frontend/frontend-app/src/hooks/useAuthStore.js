import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import { pageApi } from '../api/PageApi'
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth/authSlice'
import axios from 'axios'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth)
console.log(status)
console.log(user)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const navigateTo = useNavigate();

  const startRegister = async User => {
    dispatch(onChecking())
    try {
      const { data } = await axios.post('https://trucking-jebius.koyeb.app/api/v1/auth/register', {
        ...User
      })
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ name: data.user.name, uid: data.user.id }))
      console.log('Usuario creado correctamente', 'success')
      Swal.fire('Usuario correctamente registrado!')
      navigateTo( `/dashboard-fleet-vehicles` );
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
      const { data } = await axios.post('https://trucking-jebius.koyeb.app/api/v1/auth/login', {
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
      dispatch(onLogin({ name: data.user.name, uid: data.user.id }))

      console.log(data.user.name)
      Swal.fire(`Bienvenido!  ${data.user.name}`)
      navigate(`/dashboard-v2`)
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Email o contraseña invalidos"
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

  const changePassword = async ({ oldPassword, newPassword}) => {
    
    let miStorage = window.localStorage.token;
    
   
    const config = {
        headers: { 
          'AUTHORIZATION': miStorage 
        }
      };
      console.log(config)
    try {
        const { data } = await axios.put('https://trucking-jebius.koyeb.app/api/v1/auth/changePassword', {
            oldPassword,
            newPassword
        }, config )
        console.log(data)
        Swal.fire('Cambio de contraseña exitoso!')
    } catch (error) {
        // Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: "La nueva contraseña debe tener entre 8 y 12 caracteres y tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.,contraseña actual no puede estar vacía ni ser nula"
        //   })
        console.log(error)
   
  }

}

  return {
    status,
    user,
    errorMessage,
    checkAuthToken,
    startRegister,
    startLogin,
    changePassword
  }
}
