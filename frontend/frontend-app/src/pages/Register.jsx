import FormRegister from '../components/Register/FormRegister'
import './../styles/FormRegister.css'

export const Register = () => {
  return (
    <main className='flex flex-row items-center justify-center bg-purple'>
      <section className='container mt-8'>
        <div className='px-4 mx-auto lg:w-3/5'>
          <h1 className='text-left title'>Registra tu empresa hoy</h1>
          <FormRegister />
        </div>
      </section>
    </main>
  )
}
