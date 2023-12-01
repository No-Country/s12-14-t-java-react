import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";
import { useEffect} from 'react';
import { useAuthStore } from '../hooks/useAuthStore';
import { useForm } from '../hooks/useForm';




const loginFormFields = {
  email: "",
  password: "",
}
export const Homepage = () => {
  
  const { errorMessage, startLogin } = useAuthStore();

  const { email, 
          password, 
          onInputChange: onLoginInputChange } = useForm( loginFormFields );
  


  const loginSubmit = (event) => {

    event.preventDefault();

    startLogin({
        email: email,
        password: password,
    });
};

useEffect(() => {
    if (errorMessage !== undefined) {

        console.log("Mensaje de error (LoginPage, linea 60) " + errorMessage )
    }
}, [ errorMessage ])


  return (
    <section className='min-h-screen bg-purple'>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='col-auto px-4 py-5 text-left md:h-screen'>
          <Link to='/' className='inline-block'>
            <Logo />
          </Link>
          <section className='relative flex flex-col gap-2 text-3xl text-white'>
            <div className='absolute w-[5px] h-[90%] opacity-50 bg-red top-[5%] left-[38px] bg-light-blue z-0 hidden md:block'></div>
            <div className='static flex items-center z-[1]'>
              <img src='/img/img_seguimiento.svg' alt='Seguimiento en tiempo real' className='w-20 h-24 md:mr-2' />
              <div className='ml-2'>Seguimiento en tiempo real</div>
            </div>
            <div className='static flex items-center z-[1]'>
              <img src='/img/img_seguridad.svg' alt='Seguridad en tu mantenimiento' className='w-20 h-24 md:mr-2' />
              <div className='ml-2'>Seguridad en tu mantenimiento</div>
            </div>

            <div className='static flex items-center z-[1]'>
              <img src='/img/img_presupuesto.svg' alt='Presupuestos mensuales' className='w-20 h-24 md:mr-2' />
              <div className='ml-2'>Presupuestos mensuales</div>
            </div>

            <div className='static flex items-center z-[1]'>
              <img src='/img/img_estado.svg' alt='Estado de tus vehículos' className='w-20 h-24 md:mr-2' />
              <div className='ml-2'>Estado de tus vehículos</div>
            </div>

            <div className='static flex items-center z-[1]'>
              <img src='/img/img_ayuda.svg' alt='Ayuda y soporte 24 horas' className='w-20 h-24 md:mr-2' />
              <div className='ml-2'>Ayuda y soporte 24 horas</div>
            </div>
          </section>
        </div>
        <div className="col-auto px-3 py-5 md:h-screen">
          <img src="/img/img_vehicle.svg" alt="" />
          <form onSubmit={loginSubmit} className="block py-5 text-center space-y-3">
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Ingrese su correo"
                className="rounded-lg border-none"
                name="email"
                value={email}
                onChange={onLoginInputChange}
              />
              <input
                type="password"
                placeholder="Ingrese su contraseña"
                className="rounded-lg border-none"
                name="password"
                value={password}
                onChange={onLoginInputChange}
              />
            </div>

            <button className="btn btn-template-1 w-[100]" type="submit" >
              Ingresar
            </button>

            <a href='#' className='btn btn-template-1'>
              Registrarse
            </a>
            <a href='#' className='text-lg btn text-blue'>
              Olvidé mi contraseña
            </a>
            <div className='flex justify-center gap-5'>
              <img src='/img/gmail.svg' alt='gmail' className='hover:cursor-pointer' />
              <img src='/img/outlook.svg' alt='outlook' className='hover:cursor-pointer' />
            </div>
            <a href='#' className='text-lg btn text-blue'>
              Ingresar con email
            </a>
          </form>
        </div>
      </div>
    </section>
  )
}

