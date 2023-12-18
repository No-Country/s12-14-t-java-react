import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { addVehicle } from '../../api/vehicleApi'
import { postVehicle } from '../../services/fetchService'
import { SimpleDatePicker } from '../SimpleDatePicker'
import { useState } from 'react'

export const AddVehiculeBoard = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm()

const [value, setValue] = useState();

  const onSubmit = async data => {
    try {
      data.dateVTV = value
      console.log(data)
      const response = await postVehicle(data)
      console.log("RESPONSE")
      console.log(response)
      Swal.fire(`Vehiculo creado!`)
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

  const handleNumericInput = e => {
    e.target.value = e.target.value.replace(/\D/g, '') // Elimina todos los caracteres no numéricos
    e.target.value = e.target.value.slice(0, 15) // limite de 15
  }

  return (
    <>
      <div className='container w-full lg:w-[56%] py-3 px-5 mx-auto'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='addVehicle w-full h-full rounded-[15px] shadow-custom py-7'
        >
          <div className='px-10'>
            <h1
              className='text-[#0D1444]
              text-[22px] font-bold'
            >
              Agregar vehículo
            </h1>

            <h2
              className='text-[#0D1444]
              text-lg font-medium
              leading-normal tracking-tight mt-4'
            >
              Tipo de vehículo
            </h2>

            <div>
              <section className='flex flex-wrap gap-3 mt-2 lg:justify-between mb-7'>
                <div className='mt-2'>
                  <label
                    className='text-[#0D1444] text-sm flex items-center cursor-pointer'
                    htmlFor='vehicleType1'
                  >
                    <input
                      className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent cursor-pointer'
                      type='radio'
                      id='vehicleType1'
                      name='vehicleType'
                      value='Acoplado'
                      {...register('vehicleType', { required: 'Campo requerido' })}
                    />
                    <span className='inline-block align-middle'>Acoplado</span>
                  </label>
                </div>

                <div className='mt-2'>
                  <label
                    className='text-[#0D1444] text-sm flex items-center cursor-pointer'
                    htmlFor='vehicleType2'
                  >
                    <input
                      className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent cursor-pointer'
                      type='radio'
                      id='vehicleType2'
                      name='vehicleType'
                      value='Automóvil'
                      {...register('vehicleType', { required: 'Campo requerido' })}
                    />
                    <span className='inline-block align-middle'>Automóvil</span>
                  </label>
                </div>

                <div className='mt-2'>
                  <label
                    className='text-[#0D1444] text-sm flex items-center cursor-pointer'
                    htmlFor='vehicleType3'
                  >
                    <input
                      className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent cursor-pointer'
                      type='radio'
                      id='vehicleType3'
                      name='vehicleType'
                      value='Camión'
                      {...register('vehicleType', { required: 'Campo requerido' })}
                    />
                    <span className='inline-block align-middle'>Camión</span>
                  </label>
                </div>

                <div className='mt-2'>
                  <label
                    className='text-[#0D1444] text-sm flex items-center cursor-pointer'
                    htmlFor='vehicleType4'
                  >
                    <input
                      className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent cursor-pointer'
                      type='radio'
                      id='vehicleType4'
                      name='vehicleType'
                      value='Camioneta'
                      {...register('vehicleType', { required: 'Campo requerido' })}
                    />
                    <span className='inline-block align-middle'>Camioneta</span>
                  </label>
                </div>

                <div className='mt-2'>
                  <label
                    className='text-[#0D1444] text-sm flex items-center cursor-pointer'
                    htmlFor='vehicleType5'
                  >
                    <input
                      className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent cursor-pointer'
                      type='radio'
                      id='vehicleType5'
                      name='vehicleType'
                      value='Combi'
                      {...register('vehicleType', { required: 'Campo requerido' })}
                    />
                    <span className='inline-block align-middle'>Combi</span>
                  </label>
                </div>

                <div className='mt-2'>
                  <label
                    className='text-[#0D1444] text-sm flex items-center cursor-pointer'
                    htmlFor='vehicleType6'
                  >
                    <input
                      className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent cursor-pointer'
                      type='radio'
                      id='vehicleType6'
                      name='vehicleType'
                      value='Semiremolque'
                      {...register('vehicleType', { required: 'Campo requerido' })}
                    />
                    <span className='inline-block align-middle'>Semiremolque</span>
                  </label>
                </div>
              </section>

              {errors.vehicleType && (
                <div className='mb-3 -mt-5'>
                  <span className='error'>{errors.vehicleType.message}</span>
                </div>
              )}

              <div className='grid gap-5 lg:grid-cols-2'>
                <div>
                  <div className='relative'>
                    <input
                      type='text'
                      id='brand'
                      className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none border-[#0D1544] hover:#31429B focus:outline-none peer'
                      placeholder=''
                      {...register('brand', {
                        required: 'La marca es obligatoria',
                        pattern: {
                          value: /^[a-zA-Z0-9\s]+$/,
                          message: 'La marca no es válida'
                        },
                        // valueAsNumber: true,
                        min: 3,
                        max: 15
                      })}
                    />
                    <label
                      htmlFor='brand'
                      className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                    >
                      Marca del vehículo*
                    </label>
                    {errors.brand && <span className='error '>{errors.brand.message}</span>}
                    {/* La mínima cantidad de caracteres permitidos será 3. La máxima cantidad de
                    caracteres permitidos será 15. */}

                    {/* La marca no es válida : caracter especial */}
                  </div>
                </div>
                <div>
                  <div className='relative'>
                    <input
                      type='text'
                      id='model'
                      className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none border-[#0D1544] hover:#31429B focus:outline-none peer'
                      placeholder=''
                      {...register('model', { required: 'Campo requerido' })}
                    />
                    <label
                      htmlFor='model'
                      className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                    >
                      Modelo*
                    </label>
                  </div>
                  {errors.model && <span className='error '>{errors.model.message}</span>}
                </div>
              </div>

              <div className='grid gap-5 pt-10 lg:grid-cols-2'>
                <div className='relative'>
                  <label
                    htmlFor='year'
                    className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                  >
                    Vehiculo*
                  </label>
                  <select
                    id='year'
                    className='block w-full px-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 min-h-[56px]'
                    defaultValue={'DEFAULT'}
                    {...register('year', { required: 'Campo requerido' })}
                  >
                    <option disabled value={'DEFAULT'}>
                      Selecciona un año
                    </option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                    <option value='2014'>2014</option>
                    <option value='2013'>2013</option>
                    <option value='2012'>2012</option>
                    <option value='2011'>2011</option>
                    <option value='2010'>2010</option>
                  </select>
                  {errors.year && <span className='error'>{errors.year.message}</span>}
                </div>
                <div>
                  <div className='relative'>
                    <input
                      type='text'
                      id='patent'
                      className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none border-[#0D1544] hover:#31429B focus:outline-none peer'
                      placeholder=''
                      {...register('patent', { required: 'Campo requerido' })}
                    />
                    <label
                      htmlFor='patent'
                      className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                    >
                      Patente*
                    </label>
                  </div>
                  {errors.patent && <span className='error'>{errors.patent.message}</span>}
                </div>
              </div>

              <h2 className='mt-10 text-lg font-medium leading-normal tracking-tight text-dark'>
                Tipo de combustible
              </h2>

              <div className='flex gap-4 mt-3'>
                <label
                  className='text-[#0D1444] text-sm flex items-center cursor-pointer'
                  htmlFor='fuelType1'
                >
                  <input
                    className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent cursor-pointer'
                    type='radio'
                    id='fuelType1'
                    name='fuelType'
                    value='Biocombustible'
                    {...register('fuelType', { required: 'Campo requerido' })}
                  />
                  <span className='inline-block align-middle'>Biocombustible</span>
                </label>
                <label
                  className='text-[#0D1444] text-sm flex items-center cursor-pointer'
                  htmlFor='fuelType2'
                >
                  <input
                    className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent cursor-pointer'
                    type='radio'
                    id='fuelType2'
                    name='fuelType'
                    value='Gas'
                    {...register('fuelType', { required: 'Campo requerido' })}
                  />
                  <span className='inline-block align-middle'>Gas</span>
                </label>
                <label
                  className='text-[#0D1444] text-sm flex items-center cursor-pointer'
                  htmlFor='fuelType3'
                >
                  <input
                    className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent cursor-pointer'
                    type='radio'
                    id='fuelType3'
                    name='fuelType'
                    value='Gasoil'
                    {...register('fuelType', { required: 'Campo requerido' })}
                  />
                  <span className='inline-block align-middle'>Gasoil</span>
                </label>
                <label
                  className='text-[#0D1444] text-sm flex items-center cursor-pointer'
                  htmlFor='fuelType4'
                >
                  <input
                    className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent cursor-pointer'
                    type='radio'
                    id='fuelType4'
                    name='fuelType'
                    value='Nafta'
                    {...register('fuelType', { required: 'Campo requerido' })}
                  />
                  <span className='inline-block align-middle'>Nafta</span>
                </label>
              </div>

              <div className='mt-2'>
                {errors.fuelType && <span className='error'>{errors.fuelType.message}</span>}
              </div>

              <div className='grid gap-5 pt-10 lg:grid-cols-2'>
                <div>
                  <div className='relative'>
                    <input
                      type='text'
                      id='brandMotor'
                      className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none border-[#0D1544] hover:#31429B focus:outline-none peer'
                      placeholder=''
                      {...register('brandMotor', { required: 'Campo requerido' })}
                    />
                    <label
                      htmlFor='brandMotor'
                      className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                    >
                      Marca del motor*
                    </label>
                  </div>
                  {errors.brandMotor && <span className='error'>{errors.brandMotor.message}</span>}
                </div>
                <div>
                  <div className='relative'>
                    <input
                      type='text'
                      id='numberMotor'
                      className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none border-[#0D1544] hover:#31429B focus:outline-none peer'
                      placeholder=''
                      {...register('numberMotor', { required: 'Campo requerido' })}
                    />
                    <label
                      htmlFor='numberMotor'
                      className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                    >
                      N° de motor*
                    </label>
                  </div>
                  {errors.numberMotor && (
                    <span className='error'>{errors.numberMotor.message}</span>
                  )}
                </div>
              </div>
              <div className='grid gap-5 pt-10 lg:grid-cols-2'>
                <div>
                  <div className='relative'>
                    <input
                      type='text'
                      id='brandChassis'
                      className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none border-[#0D1544] hover:#31429B focus:outline-none peer'
                      placeholder=''
                      {...register('brandChassis', { required: 'Campo requerido' })}
                    />
                    <label
                      htmlFor='brandChassis'
                      className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                    >
                      Marca del chasis*
                    </label>
                  </div>
                  {errors.brandChassis && (
                    <span className='error'>{errors.brandChassis.message}</span>
                  )}
                </div>

                <div>
                  <div className='relative'>
                    <input
                      type='text'
                      id='numberChassis'
                      className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none border-[#0D1544] hover:#31429B focus:outline-none peer'
                      placeholder=''
                      {...register('numberChassis', { required: 'Campo requerido' })}
                    />
                    <label
                      htmlFor='numberChassis'
                      className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                    >
                      N° de chasis*
                    </label>
                  </div>
                  {errors.numberChassis && (
                    <span className='error'>{errors.numberChassis.message}</span>
                  )}
                </div>
              </div>

              <div className='grid gap-5 pt-10 lg:grid-cols-2'>
                <div className='relative w-full'>
                  <label
                    htmlFor='year'
                    className='left-3.5 absolute text-sm rounded text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                  >
                    Cantidad de ejes*
                  </label>
                  <select
                    id='axle'
                    className='block w-full px-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 min-h-[56px]'
                    defaultValue={'DEFAULT'}
                    {...register('axle', { required: 'Campo requerido' })}
                  >
                    <option disabled value={'DEFAULT'}>
                      Seleccione la cantidad de ejes*
                    </option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                  </select>
                  {errors.axle && <span className='error'>{errors.axle.message}</span>}
                </div>
                <div>
                  <div className='relative'>
                  <div className='relative z-20'>
                    <SimpleDatePicker label='Fecha vencimiento VTV*' changeValue={setValue}
                    />
                  </div>
                    <label
                      htmlFor='dateVtv'
                      className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                    >
                      Fecha VTV*
                    </label>
                  </div>
                  {errors.dateVtv && <span className='error'>{errors.dateVtv.message}</span>}
                </div>
              </div>
            </div>
          </div>

          <div className='bg-[#31429B] w-full pt-5 pb-8 px-4 mt-7'>
            <h3 className='w-4/5 py-4 mx-4 font-semibold text-white text-start'>
              REGISTRO ÚNICO DE TRANSPORTE DEL AUTOMOTOR
            </h3>
            <div className='gap-3 lg:grid lg:grid-cols-3'>
              <div className='flex items-end'>
                <div className='relative w-full'>
                  <input
                    type='text'
                    id='constanciaInscripcion'
                    className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 bg-white border-gray-300 appearance-none border-[#0D1544] hover:#31429B focus:outline-none peer'
                    placeholder=''
                  />
                  <label
                    htmlFor='constanciaInscripcion'
                    className='left-3.5 absolute text-sm rounded text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                  >
                    Constancia de inscripción
                  </label>
                </div>
              </div>
              <div className='flex items-end'>
                <div className='relative w-full'>
                  <label
                    htmlFor='year'
                    className='left-3.5 absolute text-sm rounded text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                  >
                    Categoría
                  </label>
                  <select
                    id='categoria'
                    className='block w-full px-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 min-h-[56px]'
                    defaultValue={'DEFAULT'}
                  >
                    <option disabled value={'DEFAULT'}>
                      Selecciona un año
                    </option>
                    <option value='Transportista de Carga Masiva o a Granel'>
                      Transportista de Carga Masiva o a Granel
                    </option>
                    <option value='Transportista de Carga Peligrosa'>
                      Transportista de Carga Peligrosa
                    </option>
                    <option value='Transportista de Carga Fraccionada'>
                      Transportista de Carga Fraccionada
                    </option>
                    <option value='Transportista de Carga Propia'>
                      Transportista de Carga Propia
                    </option>
                    <option value='Transportista de Tráficos Especiales'>
                      Transportista de Tráficos Especiales
                    </option>
                    <option value='Transportista de Carga Internacional'>
                      Transportista de Carga Internacional
                    </option>
                  </select>
                </div>
              </div>

              <div className='relative'>
                <label htmlFor='example1' className='block mb-1 text-base font-medium text-white'>
                  Foto del empleado*
                </label>
                <input
                  id='example1'
                  type='file'
                  className='block cursor-pointer w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-dark-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-60'
                  placeholder='valsad'
                />
              </div>
            </div>
          </div>

          <div className='px-10 mt-7'>
            <button className='w-full btn btn-template-1'>Agregar vehículo</button>
          </div>
        </form>
      </div>
    </>
  )
}
