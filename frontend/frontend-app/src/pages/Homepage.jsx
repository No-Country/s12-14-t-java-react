import { Logo } from '../components/Logo'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../hooks/useAuthStore'
import { useForm } from 'react-hook-form'
import { HomeSlider } from '../components/HomeSlider/HomeSlider'

const loginFormFields = {
  defaultValues: {
    email: '',
    password: ''
  }
}

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/

export const Homepage = () => {

  const [loggin, setLoggin] = useState(false);

  const { errorMessage, startLogin } = useAuthStore()

  const {
    register,
    handleSubmit,
    email,
    password,
    onInputChange: onLoginInputChange,
    formState: { errors }
  } = useForm(loginFormFields)

  const loginSubmit = handleSubmit(data => {
    if (!loggin){
    setLoggin(true)
    console.log(data)
    startLogin({
      email: data.email,
      password: data.password
    }).then(()=>{
      setLoggin(false)
    })
  }})

  useEffect(() => {
    if (errorMessage !== undefined) {
      console.log('Mensaje de error (LoginPage, linea 60) ' + errorMessage)
    }
  }, [errorMessage])

  return (
    <section className='h-auto bg-purple'>
      <div className='mx-auto xl:container'>
        <div className='grid gap-4 md:grid-cols-2 lg:min-h-screen'>
          <div className='hidden col-auto px-4 py-5 md:block'>
            <section className='relative flex flex-col'>
              <img
                src='./img/auto.svg'
                className='w-4/5 pt-6 mx-auto 2xl:w-3/5 d-none md:inline-block '
                alt='Ilustración de coche'
              />
            </section>
          </div>
          <div className='order-2 col-span-2 px-4 py-5 md:col-auto'>
            <div className='text-center'>
              <Link to='/' className='inline-block'>
                <Logo />
              </Link>
            </div>

            <form onSubmit={loginSubmit} className='block py-5 text-center'>
              <div className='flex flex-col'>
                <input
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Correo electrónico es requerido'
                    },

                    pattern: {
                      value: emailRegex,
                      message: 'El correo electrónico no es válido'
                    }
                  })}
                  type='text'
                  placeholder='Correo electrónico...'
                  className='mb-4 border-none rounded-lg'
                  name='email'
                  value={email}
                  onChange={onLoginInputChange}
                />
                {errors.email && (
                  <span className='pl-2 mb-4 -mt-2 text-left text-white'>
                    {errors?.email.message}
                  </span>
                )}
                <input
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Contraseña es requerido'
                    },

                    pattern: {
                      value: true,
                      message: 'La contraseña no es válido'
                    }
                  })}
                  type='password'
                  placeholder='Contraseña...'
                  className='mb-4 border-none rounded-lg'
                  name='password'
                  value={password}
                  onChange={onLoginInputChange}
                />
                {errors.email && (
                  <span className='pl-2 mb-4 -mt-2 text-left text-white'>
                    {errors?.password?.message}
                  </span>
                )}
              </div>

              <button className='block h-[52px] w-full mt-0 mb-4 btn btn-template-1' type='submit'>
                {loggin?<span class="loaderSpinBtn"></span>:<span>Ingresar</span>}
              </button>

              <Link to='/registro' className='btn btn-template-1'>
                Registrarse
              </Link>
              <div className='pt-2 md:flex'>
                <div className='flex-1 text-left'>
                  <a href='#' className='flex-1 text-blue-600'>
                    Olvidé mi contraseña
                  </a>
                </div>
                <div className='flex flex-col justify-center flex-auto gap-5 grow-0'>
                  <p className='order-2 text-blue-600 md:order-1'>Ingresar con email</p>
                  <div className='flex justify-center order-1 mt-5 md:mt-0 md:justify-between md:order-2'>
                    <a className='inline-block p-3 mx-4 md:p-2 md:mx-0' href='#'>
                      <img
                        src='/img/gmail.svg'
                        alt='gmail'
                        className='w-[36px] h-[23px] inline-block'
                      />
                    </a>
                    <a className='inline-block p-3 mx-4 md:p-2 md:mx-0' href='#'>
                      <img
                        src='/img/outlook.svg'
                        alt='outlook'
                        className='w-[43px] h-[29px] inline-block'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className='relative order-1 col-span-2 px-6 pt-5 md:mb-10 md:pt-0 md:px-4 md:order-3 swiper-container lg:container'>
            <div className='text-center'>
              <img
                src='./img/auto.svg'
                className='inline-block w-1/2 pt-5 md:hidden'
                alt='Ilustración de coche'
              />
            </div>

            <HomeSlider />
          </div>
        </div>
      </div>
    </section>
  )
}
