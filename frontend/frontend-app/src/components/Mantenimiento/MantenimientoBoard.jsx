import { SimpleDatePicker } from '../SimpleDatePicker'

export const MantenimientoBoard = () => {
  return (
    <>
      <div className='container w-full md:w-[50%] p-3'>
        <div className='w-full h-full rounded-[15px] shadow-custom px-6 py-7'>
          <h1 className='text-xl font-bold lg:text-2xl md:text-2xl'>
            Crear registro de mantenimiento
          </h1>

          <form>
            <div className='grid grid-cols-2 gap-5 pt-10'>
              <div>
                <div className='relative'>
                  <label
                    htmlFor='default'
                    className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                  >
                    Vehiculo*
                  </label>
                  <select
                    id='default'
                    className='block w-full px-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 min-h-[56px]'
                    defaultValue={'DEFAULT'}
                  >
                    <option disabled value={'DEFAULT'}>
                      Selecciona un Vehículo
                    </option>
                    <option value='1'>Vehículo 1</option>
                    <option value='2'>Vehículo 2</option>
                    <option value='3'>Vehículo 3</option>
                    <option value='4'>Vehículo 4</option>
                  </select>
                </div>
              </div>
              <div>
                <div className='relative'>
                  <input
                    type='text'
                    id='floating_outlined'
                    className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none border-[#0D1544] hover:#31429B focus:outline-none peer'
                    placeholder=''
                  />
                  <label
                    htmlFor='floating_outlined'
                    className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                  >
                    Kilometraje actual*
                  </label>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-5 pt-10'>
              <div className='relative z-20'>
                <SimpleDatePicker />
              </div>

              <div>
                <div className='relative'>
                  <label
                    htmlFor='mantType'
                    className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                  >
                    Vehiculo*
                  </label>
                  <select
                    id='mantType'
                    name='mantType'
                    defaultValue={'DEFAULT'}
                    className='block w-full px-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 min-h-[56px]'
                  >
                    <option disabled value='DEFAULT'>
                      Tipo de mantenimiento*
                    </option>
                    <option value='1'>Tipo 1</option>
                    <option value='2'>Tipo 2</option>
                    <option value='3'>Tipo 3</option>
                    <option value='4'>Tipo 4</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='pt-10'>
              <div>
                <div className='relative'>
                  <textarea
                    type='text'
                    id='description'
                    className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none border-[#0D1544] hover:#31429B focus:outline-none peer'
                    placeholder=''
                    name='description'
                    rows={5}
                  />
                  <label
                    htmlFor='description'
                    className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[25px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                  >
                    Descripción*
                  </label>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-5 pt-10'>
              <div className='relative'>
                <input
                  type='text'
                  id='costo'
                  className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none border-[#0D1544] hover:#31429B focus:outline-none peer'
                  placeholder=''
                  name='costo'
                />
                <label
                  htmlFor='costo'
                  className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                >
                  Costo*
                </label>
              </div>
            </div>

            <div>
              <button type='submit' className='btn btn-template-1'>
                Algo
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
