import { useEffect, useState } from 'react'
import { getEmployees } from '../../services/fetchService'

const Empleado = () => {
  const [empleados, setEmpleados] = useState([])

  useEffect(() => {
    getEmployees().then(response => {
      console.log('Response:')
      console.log(response.data)
      setEmpleados(response.data)
    })
  }, [])

  const imageStyle = {
    height: '100px'
  }
  // Prueba
  return (
    <>
      <section className='flex flex-col lg:w-[25%] justify-start min-h-screen gap-5 py-3 pr-3 text-lg query-empleado'>
        <div className='py-3 px-4  rounded-[15px] h-full w-full shadow-custom'>
          <h2 className='text-[#0D1544] mt-10 font-bold text-xl lg:text-2xl md:text-2xl m-6 max-h-screen'>
            Empleados
          </h2>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-1 mx-auto  overflow-y-scroll  max-h-[70vh] min-h-[30vh]'>
            {empleados.map(empleado => (
              <article
                key={empleado.id}
                className='flex max-h-screen pr-2 mr-5 space-x-4 shadow-md rounded-xl '
              >
                <img
                  style={imageStyle}
                  src={empleado.photo}
                  alt='No Image'
                  className='rounded-l-lg'
                />
                <div>
                  <h2 className='text-[#31429B] text-l font-semibold'>
                    {empleado.name + ' ' + empleado.lastName}
                  </h2>
                  <h3 className='text-[#0D1544] text-xs font-semibold'>
                    {empleado.roleName == 'OWNER'
                      ? 'Gerente'
                      : empleado.roleName == 'DRIVER'
                      ? 'Chofer'
                      : empleado.roleName == 'MAINTENANCE'
                      ? 'Mantenimiento'
                      : 'Sin Rol'}
                  </h3>
                  <h3 className='text-[#0D1544] text-xs font-normal'>{empleado.email}</h3>
                </div>
                <input type='checkbox' />
              </article>
            ))}
          </div>

          <button className='w-full mt-4 btn btn-template-1'>Eliminar selección</button>
        </div>
      </section>
    </>
  )
}

export default Empleado
