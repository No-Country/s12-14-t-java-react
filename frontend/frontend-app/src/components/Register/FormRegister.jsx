import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import iconError from '/img/iconErrorTextField.svg'
import iconCheck from '/img/iconCheckTextField.svg'
import { useAuthStore } from '../../hooks/useAuthStore'

const FormRegister = () => {
  const [selected, setSelected] = useState('')
  const { errorMessage, startRegister } = useAuthStore()
  const history = useNavigate()
  const goToLogin = () => {
    history('/')
  }

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&()*+\/?@[\\\]^_{|}]).{8,}$/

  /* Obteniendo datos del formulario */
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm({
    defaultValues: {
      companyName: '',
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'onChange'
  })
  const onSubmit = handleSubmit(data => {
    startRegister({
      companyName: data.companyName,
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    })
    reset()
  })
  return (
    <form onSubmit={onSubmit} className='flex flex-col items-center justify-center mb-16 text-blue'>
      <label
        className={`labelInput ` + (selected == 'companyName' ? `appear` : `none-appear`)}
        htmlFor='companyName'
      >
        Nombre de la empresa
      </label>
      <div className='input-container'>
        {selected == 'companyName' ? (
          errors.companyName ? (
            <img className='w-8 h-8 icon-input' src={iconError} />
          ) : (
            <img className='w-6 h-6 icon-input ' src={iconCheck} />
          )
        ) : (
          <></>
        )}

        <input
          {...register('companyName', {
            required: {
              value: true,
              message: 'El nombre de la empresa es obligatorio'
            },
            minLength: {
              value: 2,
              message: 'El minimo de caracteres es 2'
            },
            maxLength: {
              value: 50,
              message: 'El máximo de caracteres es 50'
            }
          })}
          onFocus={() => setSelected('companyName')}
          onBlur={() => setSelected('')}
          className={'textField '}
          name='companyName'
          style={{ outline: errors.companyName ? '2px solid #6a3838' : `none`, border: `none` }}
          type='text'
          id='companyName'
          placeholder={selected == 'companyName' ? '' : 'Nombre de la empresa...'}
          aria-autocomplete='both'
          autoComplete='companyName'
        />
      </div>
      {errors.companyName && (
        <span className='text-[18px] text-[#6a3838] font-bold'>{errors.companyName.message}</span>
      )}
      <label
        className={`labelInput ` + (selected == 'name' ? `appear` : `none-appear`)}
        htmlFor='name'
      >
        Nombres
      </label>
      <div className='input-container'>
        {selected == 'name' ? (
          errors.name ? (
            <img className='w-8 h-8 icon-input' src={iconError} />
          ) : (
            <img className='w-6 h-6 icon-input ' src={iconCheck} />
          )
        ) : (
          <></>
        )}
        <input
          onClick={() => setSelected('name')}
          onBlur={() => setSelected('')}
          className='textField'
          type='text'
          id='name'
          name='name'
          aria-autocomplete='list'
          style={{ outline: errors.name ? '2px solid #6a3838' : `none`, border: `none` }}
          placeholder={selected == 'name' ? '' : 'Nombres...'}
          {...register('name', {
            required: {
              value: true,
              message: 'El nombre es obligatorio'
            },
            minLength: {
              value: 2,
              message: 'El minimo de caracteres es 2'
            },
            maxLength: {
              value: 50,
              message: 'El máximo de caracteres es 50'
            },
            pattern: {
              value: /^[a-zA-Z0-9\s]+$/,
              message: 'El nombre no es válido'
            }
          })}
        />
      </div>
      {errors.name && (
        <span className='text-[18px] text-[#6a3838] font-bold'>{errors.name.message}</span>
      )}
      <label
        className={`labelInput ` + (selected == 'lastName' ? `appear` : `none-appear`)}
        htmlFor='lastName'
      >
        Apellidos
      </label>
      <div className='input-container'>
        {selected == 'lastName' ? (
          errors.lastName ? (
            <img className='w-8 h-8 icon-input' src={iconError} />
          ) : (
            <img className='w-6 h-6 icon-input ' src={iconCheck} />
          )
        ) : (
          <></>
        )}

        <input
          onFocus={() => setSelected('lastName')}
          onBlur={() => setSelected('')}
          className='textField'
          type='text'
          id='lastName'
          name='lastName'
          aria-autocomplete='both'
          autoComplete='lastName'
          style={{ outline: errors.lastName ? '2px solid #6a3838' : `none`, border: `none` }}
          placeholder={selected == 'lastName' ? '' : 'Apellidos...'}
          {...register('lastName', {
            required: {
              value: true,
              message: 'Los apellidos es un campo obligatorio'
            },
            minLength: {
              value: 2,
              message: 'El minimo de caracteres es 2'
            },
            maxLength: {
              value: 50,
              message: 'El máximo de caracteres es 50'
            },
            pattern: {
              value: /^[a-zA-Z0-9\s]+$/,
              message: 'Los apellidos no son válidos'
            }
          })}
        />
      </div>
      {errors.lastName && (
        <span className='text-[18px] text-[#6a3838] font-bold'>{errors.lastName.message}</span>
      )}
      <label
        className={`labelInput ` + (selected == 'email' ? `appear` : `none-appear`)}
        htmlFor='email'
      >
        Correo electronico
      </label>
      <div className='input-container'>
        {selected == 'email' ? (
          errors.email ? (
            <img className='w-8 h-8 icon-input' src={iconError} />
          ) : (
            <img className='w-6 h-6 icon-input ' src={iconCheck} />
          )
        ) : (
          <></>
        )}
        <input
          onFocus={() => setSelected('correo')}
          onBlur={() => setSelected('')}
          className='textField'
          style={{ outline: errors.correo ? '2px solid #6a3838' : `none`, border: `none` }}
          type='email'
          id='email'
          name='email'
          autoComplete='email'
          aria-autocomplete='both'
          placeholder={selected == 'email' ? '' : 'Correo electronico...'}
          {...register('email', {
            required: {
              value: true,
              message: 'El correo electrónico es obligatorio'
            },

            pattern: {
              value: emailRegex,
              message: 'El correo electrónico no es válido'
            }
          })}
        />
      </div>
      {errors.email && (
        <span className='text-[18px] text-[#6a3838] font-bold'>{errors.email.message}</span>
      )}
      <label
        className={`labelInput ` + (selected == 'password' ? `appear` : `none-appear`)}
        htmlFor='password'
      >
        Contraseña
      </label>
      <div className='input-container'>
        {selected == 'password' ? (
          errors.password ? (
            <img className='w-8 h-8 icon-input' src={iconError} />
          ) : (
            <img className='w-6 h-6 icon-input ' src={iconCheck} />
          )
        ) : (
          <></>
        )}
        <input
          onFocus={() => setSelected('password')}
          onBlur={() => setSelected('')}
          className='textField'
          type='password'
          id='password'
          style={{ outline: errors.password ? '2px solid #6a3838' : `none`, border: `none` }}
          placeholder={selected == 'password' ? '' : 'Contraseña...'}
          {...register('password', {
            required: {
              value: true,
              message: 'La contraseña es obligatoria'
            },
            minLength: {
              value: 8,
              message: 'La contraseña debe ser entre 8 y 12 caracteres'
            },
            maxLength: {
              value: 12,
              message: 'La contraseña debe ser entre 8 y 12 caracteres'
            },
            pattern: {
              value: passwordRegex,
              message:
                'La contraseña tiene entre  8 y 12 caracteres, al menos una letra mayúscula, una minúscula, un número y un caracter especial'
            }
          })}
        />
      </div>
      {errors.password && (
        <span className='text-center text-[18px] text-[#6a3838] font-bold'>
          {errors.password.message}
        </span>
      )}
      {selected == 'password' && !errors.password ? (
        <span className='text-center text-[18px] text-[#2E4BDF] font-bold'>
          La contraseña tiene entre 8 y 12 caracteres, al menos una letra mayúscula, una minúscula,
          un número y un caracter especial
        </span>
      ) : (
        <></>
      )}
      <label
        className={`labelInput ` + (selected == 'confirmPassword' ? `appear` : `none-appear`)}
        htmlFor='password'
      >
        Confirmar contraseña
      </label>
      <div className='input-container'>
        {selected == 'confirmPassword' ? (
          errors.confirmPassword ? (
            <img className='w-8 h-8 icon-input' src={iconError} />
          ) : (
            <img className='w-6 h-6 icon-input ' src={iconCheck} />
          )
        ) : (
          <></>
        )}
        <input
          onFocus={() => setSelected('confirmPassword')}
          onBlur={() => setSelected('')}
          className='textField'
          type='password'
          id='confirmPassword'
          style={{ outline: errors.confirmPassword ? '2px solid #6a3838' : `none`, border: `none` }}
          placeholder={selected == 'confirmPassword' ? '' : 'Confirmar contraseña...'}
          {...register('confirmPassword', {
            required: {
              value: true,
              message: 'La confirmación de contraseña es obligatorio'
            },
            validate: value => {
              return watch('password') == value || 'La contraseña no coincide'
            }
          })}
        />
      </div>
      {errors.confirmPassword && (
        <span className='text-[18px] text-[#6a3838] font-bold'>
          {errors.confirmPassword.message}
        </span>
      )}
      <button type='submit' className='mt-32 main-button bg-blue'>
        Registrarme
      </button>
      <button className='mt-3 main-button' onClick={goToLogin}>
        Iniciar Sesión
      </button>
    </form>
  )
}
export default FormRegister
