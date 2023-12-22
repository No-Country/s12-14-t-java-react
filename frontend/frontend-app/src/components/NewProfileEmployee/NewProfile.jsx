import { useState } from 'react'
import '../../styles/NewProfile.css'
import { useSelector } from "react-redux";

import { useAuthStore } from '../../hooks/useAuthStore'
import { useEmployee } from "./../../hooks/useEmployee";

const NewProfile = () => {
  const {getEmployees} =useEmployee();
  const { RegisterNewEmployed, fileUpload } = useAuthStore()
  const [sending, setSending] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    roleName: '',
    photo: null
  })

  //Validacion de Formulario
  const [nameError, setNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')

  const validateName = value => {
    if (!value.trim()) {
      return 'El nombre es obligatorio'
    } else if (!/^[a-zA-Z-à]+$/.test(value)) {
      return 'El nombre no es válido'
    }
    return ''
  }

  const validateLastName = value => {
    if (!value.trim()) {
      return 'El apellido es obligatorio'
    } else if (!/^[a-zA-Z-à]+$/.test(value)) {
      return 'El apellido no es válido'
    }
    return ''
  }

  const validateEmail = value => {
    if (!value.trim()) {
      return 'El correo electrónico es obligatorio'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        return 'El correo electrónico no es válido'
      }
    }
    return ''
  }

  const isFormValid = () => {
    const isNameValid = validateName(formData.name)
    const isLastNameValid = validateLastName(formData.lastName)
    const isEmailValid = validateEmail(formData.email)

    const isFormValid =
      formData.name.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.roleName.trim() !== '' &&
      formData.photo !== null &&
      isNameValid === '' &&
      isLastNameValid === '' &&
      isEmailValid === ''

    setNameError(isNameValid)
    setLastNameError(isLastNameValid)
    setEmailError(isEmailValid)

    return isFormValid
  }

  const handleRadioChange = e => {
    const { value } = e.target
    setFormData(prevFormData => ({
      ...prevFormData,
      roleName: value
    }))
  }

  const handleChange = e => {
    const { id, value, type, files } = e.target
    let error = ''

    if (id === 'name') {
      error = validateName(value)
      setNameError(error)
    } else if (id === 'lastName') {
      error = validateLastName(value)
      setLastNameError(error)
    } else if (id === 'email') {
      error = validateEmail(value)
      setEmailError(error)
    }

    console.log(id, value, type, files)
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: type === 'file' ? files[0] : value
    }))
  }

  const uploadImageToCloudinary = async () => {
    try {
      const resp = await fileUpload(formData.photo)

      const photo = resp
      console.log(photo)

      setFormData(prevFormData => ({
        ...prevFormData,
        photo: photo
      }))
      console.log(setFormData(formData))

      return resp
    } catch (error) {
      console.error('Error al subir la imagen a Cloudinary:', error)
      throw error
    }
  }

  const handleSubmit = async e => {
    if (!sending && isFormValid()) {
      setSending(true)
      e.preventDefault()

      if (formData && isFormValid()) {
        try {
          const photo = await uploadImageToCloudinary()
          console.log(photo)

          setFormData(prevFormData => ({
            ...prevFormData,
            photo: photo
          }))
          console.log('Datos del formulario:', formData)

          await RegisterNewEmployed({
            name: formData.name,
            lastName: formData.lastName,
            email: formData.email,
            roleName: formData.roleName,
            photo: photo
          })
          await getEmployees();
        } catch (error) {
          console.error('Error al subir la imagen a Cloudinary:', error)
        } finally {
          setSending(false)
        }
      } else {
        console.error('Error de validación: Todos los campos requeridos deben estar llenos')
      }
    }
  }

  return (
    <div className='w-full container-profile'>
      <section className='new-profile-continer shadow-custom'>
        <div className='continer-empleado-vehiculooff  text-[#0D1544]'>
          <form className='form' onSubmit={handleSubmit}>
            <div className='container-form'>
              <div className='section-1-form'>
                <h2 className='font-bold text-[#0D1544] lg:text-2xl md:text-2xl text-lg'>
                  Nuevo empleado
                </h2>
                <div className='relative mt-3'>
                  <input
                    value={formData?.name}
                    onChange={handleChange}
                    className='block w-[90%]   h-[56px]  cursor-pointer px-2.5 pb-2.5 pt-4 w text-lg text-gray-900 bg-transparent rounded-lg border-1 border-[#0D1544] appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0D1544] peer'
                    placeholder=''
                    autoComplete='text'
                    type='text'
                    id='name'
                  />

                  <label
                    htmlFor='name'
                    className={
                      'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
                    }
                  >
                    Nombre del empleado*
                  </label>
                  {nameError && <p className='mt-1 text-sm title-error'>{nameError}</p>}
                </div>
                <div className='relative mt-3'>
                  <input
                    value={formData?.lastName}
                    onChange={handleChange}
                    className='block w-[90%] h-[56px] cursor-pointer px-2.5 pb-2.5 pt-4 w text-lg text-gray-900 bg-transparent rounded-lg border-1 border-[#0D1544] appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0D1544] peer'
                    placeholder=''
                    autoComplete='text'
                    type='text'
                    id='lastName'
                  />

                  <label
                    htmlFor='lastName'
                    className={
                      'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
                    }
                  >
                    Apellido del empleado*
                  </label>
                  {lastNameError && <p className='mt-1 text-sm title-error'>{lastNameError}</p>}
                </div>
                <div className='relative mt-3'>
                  <input
                    value={formData?.email}
                    onChange={handleChange}
                    className='block w-[90%] h-[56px] cursor-pointer px-2.5 pb-2.5 pt-4 w text-lg text-gray-900 bg-transparent rounded-lg border-1 border-[#0D1544] appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0D1544] peer'
                    placeholder=''
                    autoComplete='text'
                    type='email'
                    id='email'
                  />

                  <label
                    htmlFor='email'
                    className={
                      'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
                    }
                  >
                    Correo electrónico del empleado*
                  </label>
                  {emailError && <p className='mt-1 text-sm title-error'>{emailError}</p>}
                </div>
              </div>
              <div className='mt-3 section-2-form'>
                <div className='max-w-xs mx-auto mt-3'>
                  <label htmlFor='photo' className='block mb-1 text-xl font-medium text-gray-700'>
                    Foto del empleado*
                  </label>
                  <input
                    onChange={handleChange}
                    id='photo'
                    type='file'
                    className='block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-dark-blue-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-dark-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60'
                  />
                </div>

                <h2 className='mt-8 text-2xl'>Rol del empleado*</h2>
                <div className='mx-auto space-y-3'>
                  <div className='flex items-center mt-4 space-x-2 '>
                    <input
                      checked={formData?.roleName === 'DRIVER'}
                      value='DRIVER'
                      onChange={handleRadioChange}
                      type='radio'
                      id='rol1'
                      name='roleName'
                      className='w-4 h-4 border-gray-300 rounded-full shadow-sm text-primary-600 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400'
                    />
                    <label htmlFor='rol1' className='text-sm font-medium text-gray-700'>
                      Chofer
                    </label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <input
                      value='OWNER'
                      checked={formData?.roleName === 'OWNER'}
                      onChange={handleRadioChange}
                      type='radio'
                      id='rol2'
                      name='roleName'
                      className='w-4 h-4 border-gray-300 rounded-full shadow-sm text-primary-600 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400'
                    />
                    <label htmlFor='rol2' className='text-sm font-medium text-gray-700'>
                      Gerente
                    </label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <input
                      value='MAINTENANCE'
                      checked={formData?.roleName === 'MAINTENANCE'}
                      onChange={handleRadioChange}
                      type='radio'
                      id='rol3'
                      name='roleName'
                      className='w-4 h-4 border-gray-300 rounded-full shadow-sm text-primary-600 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400'
                    />
                    <label htmlFor='rol3' className='text-sm font-medium text-gray-700'>
                      Jefe de mantenimiento
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button
              type='submit'
              className='rounded-lg border bg-dark-blue border-bg-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300'
            >
              {sending ? <span className='loaderSpinBtn'></span> : <span>Confirmar</span>}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default NewProfile
