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
    <form
      onSubmit={onSubmit}
      className='flex flex-col items-center justify-center w-full mb-16 text-blue'
    >
      <label
        className={`labelInput ` + (selected == 'companyName' ? `appear` : `none-appear`)}
        htmlFor='companyName'
      >
        Nombre de la empresa
      </label>
      <div className='w-full input-container'>
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
              message: 'El nombre de la empresa es obligatorio.'
            },
            minLength: {
              value: 2,
              message: 'El nombre de la empresa no es válido.'
            },
            maxLength: {
              value: 50,
              message: 'El nombre de la empresa no es válido.'
            }
          })}
          onFocus={() => setSelected('companyName')}
          onBlur={() => setSelected('')}
          className={'textField w-full'}
          name='companyName'
          style={{ outline: errors.companyName ? '2px solid #fff' : `none`, border: `none` }}
          type='text'
          id='companyName'
          placeholder={selected == 'companyName' ? '' : 'Nombre de la empresa...'}
          aria-autocomplete='both'
          autoComplete='companyName'
        />
      </div>
      {errors.companyName && (
        <span className='error-message'>
          {errors.companyName.message}
        </span>
      )}
      <label
        className={`labelInput ` + (selected == 'name' ? `appear` : `none-appear`)}
        htmlFor='name'
      >
        Nombres
      </label>
      <div className='w-full input-container'>
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
          className='w-full textField'
          type='text'
          id='name'
          name='name'
          aria-autocomplete='list'
          style={{ outline: errors.name ? '2px solid #fff' : `none`, border: `none` }}
          placeholder={selected == 'name' ? '' : 'Nombres...'}
          {...register('name', {
            required: {
              value: true,
              message: 'El nombre es obligatorio'
            },
            minLength: {
              value: 2,
              message: 'El nombre no es válido'
            },
            maxLength: {
              value: 50,
              message: 'El nombre no es válido'
            },
            pattern: {
              value: /^[a-zA-Z0-9\s]+$/,
              message: 'El nombre no es válido'
            }
          })}
        />
      </div>
      {errors.name && (
        <span className='error-message'>{errors.name.message}</span>
      )}
      <label
        className={`labelInput ` + (selected == 'lastName' ? `appear` : `none-appear`)}
        htmlFor='lastName'
      >
        Apellidos
      </label>
      <div className='w-full input-container'>
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
          className='w-full textField'
          type='text'
          id='lastName'
          name='lastName'
          aria-autocomplete='both'
          autoComplete='lastName'
          style={{ outline: errors.lastName ? '2px solid #fff' : `none`, border: `none` }}
          placeholder={selected == 'lastName' ? '' : 'Apellidos...'}
          {...register('lastName', {
            required: {
              value: true,
              message: 'El apellido es obligatorio'
            },
            minLength: {
              value: 2,
              message: 'El apellido no es válido'
            },
            maxLength: {
              value: 50,
              message: 'El apellido no es válido'
            },
            pattern: {
              value: /^[a-zA-Z0-9\s]+$/,
              message: 'El apellido no es válido'
            }
          })}
        />
      </div>
      {errors.lastName && (
        <span className='error-message'>
          {errors.lastName.message}
        </span>
      )}
      <label
        className={`labelInput ` + (selected == 'email' ? `appear` : `none-appear`)}
        htmlFor='email'
      >
        Correo electronico
      </label>
      <div className='w-full input-container'>
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
          className='w-full textField'
          style={{ outline: errors.correo ? '2px solid #fff' : `none`, border: `none` }}
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
        <span className='error-message'>{errors.email.message}</span>
      )}
      <label
        className={`labelInput ` + (selected == 'password' ? `appear` : `none-appear`)}
        htmlFor='password'
      >
        Contraseña
      </label>
      <div className='w-full input-container'>
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
          className='w-full textField'
          type='password'
          id='password'
          style={{ outline: errors.password ? '2px solid #fff' : `none`, border: `none` }}
          placeholder={selected == 'password' ? '' : 'Contraseña...'}
          {...register('password', {
            required: {
              value: true,
              message: 'La contraseña es obligatoria'
            },
            minLength: {
              value: 8,
              message: 'La contraseña debe tener entre 8 y 12 caracteres y tener por lo menos una letra mayúscula, una minúscula, un número y un caracter especial'
            },
            maxLength: {
              value: 12,
              message: 'La contraseña debe tener entre 8 y 12 caracteres y tener por lo menos una letra mayúscula, una minúscula, un número y un caracter especial'
            },
            pattern: {
              value: passwordRegex,
              message:
                'La contraseña debe tener entre 8 y 12 caracteres y tener por lo menos una letra mayúscula, una minúscula, un número y un caracter especial'
            }
          })}
        />
      </div>
      {errors.password && (
        <span className='error-message'>
          {errors.password.message}
        </span>
      )}
      {selected == 'password' && !errors.password ? (
        <div className='informative-message'>
          <p>1. Entre 8 y 12 caracteres.</p>
          <p>2. Al menos 1 mayúscula.</p>
          <p>3. Al menos 1 minúscula.</p>
          <p>4. Al menos 1 número.</p>
          <p>5. Al menos 1 caracter especial. Listado aceptado: 
          ! # $ % & &#40;  &#41; * +  - /? @ &#91;  \ &#93; ^ _ &#123; | &#125;  </p>
        </div>
      ) : (
        <></>
      )}
      <label
        className={`labelInput ` + (selected == 'confirmPassword' ? `appear` : `none-appear`)}
        htmlFor='password'
      >
        Confirmar contraseña
      </label>
      <div className='w-full input-container'>
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
          className='w-full textField'
          type='password'
          id='confirmPassword'
          style={{ outline: errors.confirmPassword ? '2px solid #fff' : `none`, border: `none` }}
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
        <span className='error-message'>
          {errors.confirmPassword.message}
        </span>
      )}
      <button type='submit' className='block w-full mt-8 btn btn-template-1'>
        Registrarme
      </button>
      <button className='block w-full mt-4 btn btn-template-1' onClick={goToLogin}>
        Iniciar Sesión
      </button>
    </form>
  )
}
export default FormRegister
