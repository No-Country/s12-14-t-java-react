import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import { pageApi } from '../api/PageApi'
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth/authSlice'
import axios from 'axios'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

 
  const navigateTo = useNavigate()

  const startRegister = async User => {
    dispatch(onChecking())
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
        ...User
      })
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ name: data.user.name, uid: data.user.id }))
      console.log('Usuario creado correctamente', 'success')
      Swal.fire('Usuario correctamente registrado!')
      navigateTo(`/dashboard`)
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
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password
      })

      console.log(data)

      const d = new Date()

      // d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
      d.setTime(d.getTime() + 1000 * 60 * 60 * 12)

      let expires = 'expires=' + d.toUTCString()

      document.cookie = `token=${data.token}; ${expires};`

      localStorage.setItem('token', data.token)
      console.log(data.token)

      localStorage.setItem('token-init-date', new Date().getTime())

      localStorage.setItem('user', JSON.stringify(data.user))

      console.log(data.user)

      dispatch(onLogin(data.user))

      // console.log(data.user.name)
      Swal.fire(`Bienvenido!  ${data.user.name}`)
      navigateTo(`/dashboard`)
    } catch (error) {
      console.log(error) 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email o contraseña invalidos'
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

   
  }

  const changePassword = async ({ oldPassword, newPassword }) => {
    let miStorage = window.localStorage.token

    const config = {
      headers: {
        AUTHORIZATION: miStorage
      }
    }
    console.log(config)
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/auth/changePassword`,
        {
          oldPassword,  
          newPassword
        },
        config
      )
      console.log(data)
      Swal.fire('Cambio de contraseña exitoso!')
    } catch (error) {
      // Swal.fire({
      //     icon: 'error',
      //     title: 'Oops...',
      //     text: "La nueva contraseña debe tener entre 8 y 12 caracteres y tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.,contraseña actual no puede estar vacía ni ser nula"
      //   })
      console.log(error.message)
    }
  }




  const RegisterNewEmployed = async({  email,
    lastName,
    name,
    photo,
    roleName })=> {
    let miStorage = window.localStorage.token
    console.log(miStorage)

   
    try {
      const { data } = await pageApi.post('/employee/newEmployee', {
        email,
        lastName,
        name,
        photo,
        roleName

      })
      
      console.log('Usuario creado correctamente', 'success')
      Swal.fire('Usuario correctamente registrado!')
      navigateTo(`/crear-perfil`)
    } catch (error) {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al crear usuario'
      })
      console.log('Error al crear usuario', error.response.data?.details, 'error')
    }
  }



  const fileUpload = async( file ) => {
    if ( !file ) throw new Error('No tenemos ningúna archivo a subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/carlosv/upload';

    const formData = new FormData();
    formData.append('upload_preset','Trucking-app');
    formData.append('file', file );

    try {
 
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( !resp.ok ) throw new Error('No se pudo subir imagen')
        const cloudResp = await resp.json();
        console.log(cloudResp.secure_url)
        return cloudResp.secure_url;


    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    }

}

  return {
    status,
    user,
    errorMessage,
    checkAuthToken,
    startRegister,
    startLogin,
    changePassword,
    RegisterNewEmployed,
    fileUpload
  }
}


