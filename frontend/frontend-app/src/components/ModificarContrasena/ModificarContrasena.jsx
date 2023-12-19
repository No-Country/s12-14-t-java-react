import './ModificarContrasena.css'
import { useState } from 'react'
import { IoMdEye, IoIosEyeOff } from 'react-icons/io'
import { useAuthStore } from '../../hooks/useAuthStore'

function ModificarContrasena() {
  const { changePassword } = useAuthStore()
  const [oldPassword, setContrasenaActual] = useState('')
  const [newPassword, setNuevaContrasena] = useState('')
  const [confirmarContrasena, setConfirmarContrasena] = useState('')
  const [errorContrasenaActual, setErrorContrasenaActual] = useState('')
  const [errorNuevaContrasena, setErrorNuevaContrasena] = useState('')
  const [errorConfirmarContrasena, setErrorConfirmarContrasena] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    if (validarFormulario()) {
      changePassword({
        oldPassword,
        newPassword
      })
    }
  }

  const validarFormulario = () => {
    let isValid = true

    isValid = validarContrasenaActual() && isValid
    isValid = validarNuevaContrasena() && isValid
    isValid = validarConfirmarContrasena() && isValid

    return isValid
  }

  const validarContrasenaActual = () => {
    if (oldPassword.trim() === '') {
      setErrorContrasenaActual('La contraseña actual es obligatoria')
      return false
    }

    setErrorContrasenaActual('')
    return true
  }

  const validarNuevaContrasena = () => {
    if (newPassword.trim() === '') {
      setErrorNuevaContrasena('La nueva contraseña es obligatoria')
      return false
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/

    if (!regex.test(newPassword)) {
      setErrorNuevaContrasena(
        'La contraseña debe tener entre 8 y 12 caracteres, una letra mayúscula, una minúscula, un número y un caracter especial'
      )
      return false
    }

    setErrorNuevaContrasena('')
    return true
  }

  const validarConfirmarContrasena = () => {
    if (confirmarContrasena.trim() === '') {
      setErrorConfirmarContrasena('La confirmación de contraseña es obligatoria')
      return false
    }

    if (confirmarContrasena !== newPassword) {
      setErrorConfirmarContrasena('La contraseña no coincide.')
      return false
    }

    setErrorConfirmarContrasena('')
    return true
  }

  const mostrarAsterisco = !oldPassword.trim()
  const [icoPassword, setsicoPassword] = useState({
    contrasenaActual: false,
    nuevaContrasena: false,
    confirmarContrasena: false
  })

  return (
    <section className='flex flex-col w-[100%] lg:ml-5 items-center px-4'>
      <div className='addVehicle py-3 px-4  rounded-[15px] h-full w-full shadow-custom'>
        <h1 className='Mostrar-title font-bold text-[#0D1544] lg:text-2xl md:text-2xl text-lg ml-0'>
          Modificar la Contraseña
        </h1>
        <div className='flex items-center mt-10 Mostrar-container lg:justify-center'>
          <img
            className=' w-[60%] contents md:flex'
            src='././img/encrypted.svg'
            alt='logo de modificar contraseña'
          />
          <div className='flex flex-col mt-5 gap-7 w-full'>
            <form className='flex flex-col gap-8 lg:w-[70%] w-full ' onSubmit={handleSubmit}>
              <div className='relative '>
                <input
                  className='block w-full xl:h-[56px]  h-[56px] sm:h-[56px] cursor-pointer px-2.5 pb-2.5 pt-4  text-lg text-gray-900 bg-transparent rounded-lg border-1  border-[#0D1544] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0D1544] peer'
                  placeholder=''
                  autoComplete='text'
                  type={icoPassword.contrasenaActual ? 'text' : 'password'}
                  id='InputContainer'
                  value={oldPassword}
                  onChange={e => setContrasenaActual(e.target.value)}
                />
                <div
                  className='absolute flex items-center transform -translate-y-1/2  cursor-pointer right-[10px] top-1/3'
                  onClick={() =>
                    setsicoPassword(prev => ({ ...prev, contrasenaActual: !prev.contrasenaActual }))
                  }
                >
                  {icoPassword.contrasenaActual ? <IoMdEye size={20} /> : <IoIosEyeOff size={20} />}
                </div>

                <label
                  htmlFor='InputContainer'
                  className={
                    'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
                  }
                >
                  Contraseña actual {mostrarAsterisco && <span className='title-error'>*</span>}
                </label>

                {errorContrasenaActual && (
                  <p className='title-error w-[350px] mt-2'>{errorContrasenaActual}</p>
                )}
              </div>

              <div className='relative'>
                <input
                  type={icoPassword.nuevaContrasena ? 'text' : 'password'}
                  id='miInput'
                  value={newPassword}
                  onChange={e => setNuevaContrasena(e.target.value)}
                  className='block w-full xl:h-[56px]  h-[56px] sm:h-[56px] cursor-pointer px-2.5 pb-2.5 pt-4  text-lg text-gray-900 bg-transparent rounded-lg border-1  border-[#0D1544] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0D1544] peer'
                  placeholder=' '
                />
                <div
                  className='absolute flex items-center transform -translate-y-1/2 cursor-pointer right-[10px] top-1/3'
                  onClick={() =>
                    setsicoPassword(prev => ({ ...prev, nuevaContrasena: !prev.nuevaContrasena }))
                  }
                >
                  {icoPassword.nuevaContrasena ? <IoMdEye size={20} /> : <IoIosEyeOff size={20} />}
                </div>

                <label
                  htmlFor='miInput'
                  className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
                >
                  Nueva Contraseña {mostrarAsterisco && <span className='title-error'>*</span>}
                </label>
                {errorNuevaContrasena && (
                  <p className='title-error w-[350px] mt-2'>{errorNuevaContrasena}</p>
                )}
              </div>

              <div className='relative '>
                <input
                  type={icoPassword.confirmarContrasena ? 'text' : 'password'}
                  id='input'
                  className='block w-full xl:h-[56px]  h-[56px] sm:h-[56px] cursor-pointer px-2.5 pb-2.5 pt-4  text-lg text-gray-900 bg-transparent rounded-lg border-1  border-[#0D1544] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0D1544] peer'
                  placeholder=' '
                  value={confirmarContrasena}
                  onChange={e => setConfirmarContrasena(e.target.value)}
                />
                <div
                  className='absolute flex items-center transform -translate-y-1/2 cursor-pointer right-2 top-1/3'
                  onClick={() =>
                    setsicoPassword(prev => ({
                      ...prev,
                      confirmarContrasena: !prev.confirmarContrasena
                    }))
                  }
                >
                  {icoPassword.confirmarContrasena ? (
                    <IoMdEye size={20} />
                  ) : (
                    <IoIosEyeOff size={20} />
                  )}
                </div>
                <label
                  htmlFor='input'
                  className='absolute text-sm text-[#0D1544] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
                >
                  Confirmar Contraseña {mostrarAsterisco && <span className='title-error'>*</span>}
                </label>
                {errorConfirmarContrasena && (
                  <p className='title-error w-[350px] mt-2'>{errorConfirmarContrasena}</p>
                )}
              </div>

              <button
                type='submit'
                className='w-full bg-[#31429B] text-white rounded-sm  py-3 hover:bg-[#2E4BDF]'
              >
                Confirmar cambio
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModificarContrasena
