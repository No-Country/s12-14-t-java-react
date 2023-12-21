import { useState } from 'react'
import CardRevision from './CardRevision'

const vehiculosLista = () => [
  {
    id: 1,
    driver: 'Juan',
    date: '19/12/2023',
    lights: true,
    breaks: true,
    presion: true,
    oil: true,
    description: 'Todo bien'
  },
  {
    id: 2,
    driver: 'Carlos',
    date: '19/12/2023',
    lights: true,
    breaks: false,
    presion: true,
    oil: true,
    description: 'Todo bien'
  },
  {
    id: 3,
    driver: 'David',
    date: '19/12/2023',
    lights: true,
    breaks: false,
    presion: false,
    oil: true,
    description: 'Fallan las gomas'
  },
  {
    id: 4,
    driver: 'Cris',
    date: '19/12/2023',
    lights: true,
    breaks: true,
    presion: false,
    oil: true,
    description: 'Todo bien'
  },
  {
    id: 5,
    driver: 'Carlos',
    date: '19/12/2023',
    lights: false,
    breaks: true,
    presion: true,
    oil: true,
    description: 'Todo bien'
  },
  {
    id: 6,
    driver: 'Juan',
    date: '19/12/2023',
    lights: true,
    breaks: true,
    presion: true,
    oil: true,
    description: 'Todo bien'
  }
]

const Revision = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('')

  const vehicles = vehiculosLista()

  const handleSelectChange = e => {
    const selectedValue = e.target.value
    setSelectedVehicle(selectedValue)
    console.log(selectedValue)
  }

  return (
    <div className='container w-full lg:w-[100%] py-3 px-5'>
      <div className='addVehicle w-full h-full rounded-[15px] shadow-custom px-6 py-7'>
        <section className=''>
          <h1 className='Mostrar-title font-bold text-[#0D1544] lg:text-2xl md:text-2xl text-lg ml-0'>
            Revisión diaria
          </h1>
          <p className='text-lg mt-7'>
            <strong>Vehículo:</strong> 17
          </p>

          <div className='grid gap-5 pt-10 lg:grid-cols-2'>
            {vehicles.map((v, idx) => {
              return (
                <div key={idx} className='rounded-md shadow-[1px_1px_4px+0px_rgba(0,0,0,0.25)]'>
                  <div className='bg-[#F0F8FF] flex justify-between items-center py-2 px-3 border-b border-[#2E4BDF]'>
                    <p className='text-base text-[#2E4BDF]'>
                      <strong>{v.driver}</strong>
                    </p>
                    <span className='text-sm text-[#2E4BDF]'>{v.date}</span>
                  </div>
                  <div className='px-3 pt-3 pb-2 text-base'>
                    <p className='mb-2'>
                      <input type='checkbox' disabled checked={v.lights} /> Verificar luces
                    </p>
                    <p className='mb-2'>
                      <input type='checkbox' disabled checked={v.breaks} /> Revisar frenos
                    </p>
                    <p className='mb-2'>
                      <input type='checkbox' disabled checked={v.presion} /> Verificar presión de
                      las gomas
                    </p>
                    <p className='mb-2'>
                      <input type='checkbox' disabled checked={v.oil} /> Medir aceite
                    </p>
                    <p className='mt-3 text-base'>
                      <strong>Descripción:</strong> {v.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* <div className="p-4">
        <select
          className="p-2 border"
          onChange={handleSelectChange}
          value={selectedVehicle}
        >
          <option value="">Seleccione un vehículo</option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.name}
            </option>
          ))}
        </select>
      </div>

      <section className=" w-[328px]  sm:w-[630px] md:w-[898px] h-full p-5 shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        <CardRevision selectedVehicle={selectedVehicle} />
      </section> */}
        </section>
      </div>
    </div>
  )
}

export default Revision
