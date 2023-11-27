import { Logo } from '../components/Logo'
import { Link } from 'react-router-dom'

export const Homepage = () => {
  return (
    <section className='min-h-screen'>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='col-auto px-3 py-5 text-center md:text-left md:h-screen'>
          <Link to='/' className='inline-block'>
            <Logo />
          </Link>
        </div>
        <div className='col-auto px-3 py-5 md:h-screen'>
          <code className='block py-5 text-center'>{'<Form>'}</code>
          <a href='#' className='btn btn-template-1'>
            Ingresar
          </a>

          <a href='#' className='btn btn-template-1'>
            Registrarse
          </a>
        </div>
      </div>
    </section>
  )
}
