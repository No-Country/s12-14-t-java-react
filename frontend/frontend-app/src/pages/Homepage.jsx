import { Logo } from '../components/Logo'
import { Link } from 'react-router-dom'

export const Homepage = () => {
  return (
    <section className='min-h-screen'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='h-screen col-auto px-3 py-5'>
          <Link to='/' className='inline-block'>
            <Logo />
          </Link>
        </div>
        <div className='h-screen col-auto px-3 py-5'>
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
