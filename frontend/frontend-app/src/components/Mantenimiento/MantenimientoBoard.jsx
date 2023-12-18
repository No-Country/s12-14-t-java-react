import { useEffect, useState } from 'react';
import { SimpleDatePicker } from '../SimpleDatePicker'
import { getActiveVehicles, getManTypes, postNewMant } from '../../services/fetchService';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export const MantenimientoBoard = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm()

  const [value, setValue] = useState();

  const [vehicles, setVehicles] = useState([]);

  const [manTypes, setManTypes] = useState([]);

  useEffect(() => {
    getActiveVehicles().then((response)=>{
      console.log("Response:");
      console.log(response.data);
      setVehicles(response.data);
    });
    getManTypes().then((response)=>{
      console.log("Response:");
      console.log(response.data);
      setManTypes(response.data);
    })
  }, []);

  const onSubmit = async data => {
    try {
      data.date = value
      data.bill = 'recibo'
      console.log(data)
      const response = await postNewMant(data)
      console.log("RESPONSE")
      console.log(response)
      Swal.fire(`Registro de mantenimiento creado!`)
      reset()
    } catch (error) {
      console.log("ERROR")
      console.log(error.response.data)
      try{
        Swal.fire(`Error al crear empleado! \n ${error.response.data.details[0]}`)
      } catch (error) {
        Swal.fire(`Error desconocido`)
      }
    }
  }

  return (
    <>
      <div className='container w-full lg:w-[50%] py-3 px-5'>
        <div className='addVehicle w-full h-full rounded-[15px] shadow-custom px-6 py-7'>
          <h1 className='text-xl font-bold lg:text-2xl md:text-2xl'>
            Crear registro de mantenimiento
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-5 pt-10 lg:grid-cols-2'>
              <div>
                <div className='relative'>
                  <label
                    htmlFor='vehicle'
                    className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                  >
                    Vehiculo*
                  </label>
                  <select
                    id='vehicle'
                    className='block w-full px-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 min-h-[56px]'
                    defaultValue={'DEFAULT'}
                    {...register('vehicle', { required: 'Campo requerido' })}
                  >
                    <option disabled value={'DEFAULT'}>
                      Selecciona un Vehículo
                    </option>
                    {vehicles.map((vehicle, index)=>
                       (<option value={vehicle.id}>{vehicle.brand} {vehicle.model} ({vehicle.patent})</option>)
                    )}
                  </select>
                  {errors.vehicle && <span className='error'>{errors.vehicle.message}</span>}
                </div>
              </div>
              <div>
                <div className='relative'>
                  <input
                    type='text'
                    id='km'
                    className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none border-[#0D1544] hover:#31429B focus:outline-none peer'
                    placeholder=''
                    {...register('km', { required: 'Campo requerido' })}
                  />
                  <label
                    htmlFor='km'
                    className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                  >
                    Kilometraje actual*
                  </label>
                </div>
                {errors.km && <span className='error'>{errors.km.message}</span>}
              </div>
            </div>

            <div className='grid gap-5 pt-10 lg:grid-cols-2'>
              <div className='relative z-20'>
                <SimpleDatePicker label='Fecha de mantenimiento*' changeValue={setValue}/>
              </div>
              {errors.dateMant && <span className='error'>{errors.dateMant.message}</span>}
              <div className='relative'>
                <label
                  htmlFor='mantType'
                  className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                >
                  Vehiculo*
                </label>
                <select
                  id='manType'
                  name='manType'
                  defaultValue={'DEFAULT'}
                  {...register('manType', { required: 'Campo requerido' })}
                  className='block w-full px-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 min-h-[56px]'
                >
                  <option disabled value='DEFAULT'>
                    Tipo de mantenimiento*
                  </option>
                  {manTypes.map((manType, index)=>
                       (<option value={manType.name}>{manType.name} </option>)
                    )}
                </select>
                {errors.manType && <span className='error'>{errors.manType.message}</span>}
              </div>
            </div>

            <div className='pt-10'>
              <div className='relative'>
                <textarea
                  type='text'
                  id='description'
                  className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none border-[#0D1544] hover:#31429B focus:outline-none peer'
                  placeholder=''
                  name='description'
                  rows={5}
                  {...register('description', { required: 'Campo requerido' })}
                />
                <label
                  htmlFor='description'
                  className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                >
                  Descripción*
                </label>
              </div>
              {errors.description && <span className='error'>{errors.description.message}</span>}
            </div>

            <div className='grid gap-5 pt-8 lg:grid-cols-2'>
              <div className='flex items-end'>
                <div className='relative w-full'>
                  <input
                    type='text'
                    id='cost'
                    className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none border-[#0D1544] hover:#31429B focus:outline-none peer'
                    placeholder=''
                    name='cost'
                    {...register('cost', { required: 'Campo requerido' })}
                  />
                  <label
                    htmlFor='cost'
                    className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                  >
                    Costo*
                  </label>
                </div>
                {errors.costo && <span className='error'>{errors.costo.message}</span>}
              </div>

              <div className='relative'>
                <label
                  htmlFor='example1'
                  className='block mb-1 text-base font-medium text-gray-700'
                >
                  Foto del recibo*
                </label>
                <input
                  id='recibo'
                  type='file'
                  className='block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-dark-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-60'
                  placeholder='valsad'
                />
              </div>
            </div>

            <div>
              <button type='submit' className='block w-full mt-8 btn btn-template-1'>
                Registrar mantenimiento
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
