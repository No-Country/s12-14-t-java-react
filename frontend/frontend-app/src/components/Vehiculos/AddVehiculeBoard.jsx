export const AddVehiculeBoard = () => {
  function handleClick1() {
    console.log('¡Hiciste clic en el botón 1!')
  }
  function handleClick2() {
    console.log('¡Hiciste clic en el botón 2!')
  }
  return (
    <>
      <div className='container w-full md:w-[55%] py-3 px-5'>
        <div className='w-full h-full rounded-[15px] shadow-custom px-10 py-7'>
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
            <section className='mt-[2.5%] lg:grid lg:grid-cols-6 mb-7'>
              <div className='my-[2.5%]'>
                <label className='text-[#0D1444] text-sm flex items-center' htmlFor='option1'>
                  <input
                    className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent'
                    type='radio'
                    id='opcion1'
                    name='vehicleType'
                    value='option1'
                  />
                  <span className='inline-block align-middle'>Acoplado</span>
                </label>
              </div>

              <div className='my-[2.5%]'>
                <label className='text-[#0D1444] text-sm flex items-center' htmlFor='option2'>
                  <input
                    className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent'
                    type='radio'
                    id='option2'
                    name='vehicleType'
                    value='option2'
                  />
                  <span className='inline-block align-middle'>Automóvil</span>
                </label>
              </div>

              <div className='my-[2.5%]'>
                <label className='text-[#0D1444] text-sm flex items-center' htmlFor='option3'>
                  <input
                    className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent'
                    type='radio'
                    id='option3'
                    name='vehicleType'
                    value='option3'
                  />
                  <span className='inline-block align-middle'>Camión</span>
                </label>
              </div>

              <div className='my-[2.5%]'>
                <label className='text-[#0D1444] text-sm flex items-center' htmlFor='option4'>
                  <input
                    className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent'
                    type='radio'
                    id='option4'
                    name='vehicleType'
                    value='option4'
                  />
                  <span className='inline-block align-middle'>Camioneta</span>
                </label>
              </div>

              <div className='my-[2.5%]'>
                <label className='text-[#0D1444] text-sm flex items-center' htmlFor='option5'>
                  <input
                    className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent'
                    type='radio'
                    id='option5'
                    name='vehicleType'
                    value='option5'
                  />
                  <span className='inline-block align-middle'>Combi</span>
                </label>
              </div>

              <div className='my-[2.5%]'>
                <label className='text-[#0D1444] text-sm flex items-center' htmlFor='option6'>
                  <input
                    className='mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent'
                    type='radio'
                    id='option6'
                    name='vehicleType'
                    value='option6'
                  />
                  <span className='inline-block align-middle'>Semiremolque</span>
                </label>
              </div>
            </section>

            <div className='grid gap-5 lg:grid-cols-2'>
              <div>
                <div className='relative'>
                  <label
                    htmlFor='marca'
                    className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[30px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                  >
                    Marca*
                  </label>
                  <select
                    id='marca'
                    className='block w-full px-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 min-h-[56px]'
                    defaultValue={'DEFAULT'}
                  >
                    <option disabled value={'DEFAULT'}>
                      Selecciona una marca
                    </option>
                    <option value='Nissan'>Nissan</option>
                    <option value='Ford'>Ford</option>
                    <option value='Geely'>Geely</option>
                    <option value='General Motorsy'>General Motors</option>
                    <option value='BMW'>BMW</option>
                    <option value='Grupo Stellantis'>Grupo Stellantis</option>
                    <option value='Honda'>Honda</option>
                    <option value='Hyundai Motor Company'>Hyundai Motor Company</option>
                    <option value='Mazda'>Mazda</option>
                    <option value='Subaru'>Subaru</option>
                    <option value='Suzuki'>Suzuki</option>
                    <option value='Tata'>Tata</option>
                    <option value='Tesla Inc'>Tesla Inc</option>
                    <option value='Toyota'>Toyota</option>
                    <option value='Volkswagen'>Volkswagen</option>
                  </select>
                </div>
              </div>
            </div>

            <section className='mt-[5%] lg:grid lg:grid-cols-2'>
              <div className='relative mb-[5%]'>
                <label
                  htmlFor='inputField'
                  className='absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[8%] left-[12%] text-[#0D1444] text-sm'
                >
                  Marca
                </label>
                <input
                  type='text'
                  id='inputField'
                  name='inputField'
                  className='border border-[#0D1444] py-2 px-4 h-14 my-4 rounded textField'
                />
              </div>
              <div className='relative mb-[5%]'>
                <label
                  htmlFor='inputField'
                  className='absolute bg-white px-1 -top-[5%] md:top-[8%]
                        lg:top-[8%] left-[12%] text-[#0D1444] text-sm'
                >
                  Modelo
                </label>
                <input
                  type='text'
                  id='inputField'
                  name='inputField'
                  className='border border-[#0D1444] py-2 px-4 w-[85%] h-14
                        mx-[10%] my-4  rounded'
                />
              </div>
              <div className='relative mb-[5%]'>
                <label
                  htmlFor='inputField'
                  className='absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[8%] left-[12%] z-10 text-[#0D1444] text-sm'
                >
                  Año
                </label>
                <div className='relative'>
                  <input
                    type='text'
                    id='yearField'
                    className='border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-4 rounded'
                    placeholder='Seleccione el año'
                  />
                  <select
                    id='yearSelect'
                    className='bg-white absolute inset-0 opacity-0 cursor-pointer w-[85%] h-14 mx-[10%] my-4 z-10'
                    onChange={e => {
                      const selectedYear = e.target.value
                      document.getElementById('yearField').value = selectedYear
                    }}
                  >
                    <option value='Seleccione el año'>Seleccione el año</option>
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
                  <div className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none'></div>
                </div>
              </div>
              <div className='relative mb-[5%]'>
                <label
                  htmlFor='inputField'
                  className='absolute bg-white px-1 -top-[5%] md:top-[8%]
                        lg:top-[8%] left-[12%] text-sm'
                >
                  Patente
                </label>
                <input
                  type='text'
                  id='inputField'
                  name='inputField'
                  className='border border-[#0D1444] py-2 px-4 w-[85%] h-14
                        mx-[10%] my-4  rounded'
                />
              </div>
            </section>
          </div>

          <h2
            className='ml-[10%] mt-[10%] mb-[5%] text-[#0D1444] text-lg
            font-medium  leading-normal tracking-tight'
          >
            Tipo de combustible
          </h2>

          <div>
            <section className='ml-[10%] mt-[0%] lg:grid lg:grid-cols-4 lg:ml-[15%]'>
              <div className='my-[2.5%]'>
                <label className='text-[#0D1444] text-sm flex items-center' htmlFor='option1'>
                  <input
                    className='mr-2 h-4 w-4 appearance-none rounded-full border-2
                            border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent'
                    type='radio'
                    id='opcion1'
                    name='oilType'
                    value='option1'
                  />
                  <span className='inline-block align-middle'>Biocombustible</span>
                </label>
              </div>
              <div className='my-[2.5%]'>
                <label className='text-[#0D1444] text-sm flex items-center' htmlFor='option2'>
                  <input
                    className='mr-2 h-4 w-4 appearance-none rounded-full border-2
                            border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent'
                    type='radio'
                    id='option2'
                    name='oilType'
                    value='option2'
                  />
                  <span className='inline-block align-middle'>Gas</span>
                </label>
              </div>
              <div className='my-[2.5%]'>
                <label className='text-[#0D1444] text-sm flex items-center' htmlFor='option3'>
                  <input
                    className='mr-2 h-4 w-4 appearance-none rounded-full border-2
                            border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent'
                    type='radio'
                    id='option3'
                    name='oilType'
                    value='option3'
                  />
                  <span className='inline-block align-middle'>Gasoil</span>
                </label>
              </div>
              <div className='my-[2.5%]'>
                <label className='text-[#0D1444] text-sm flex items-center' htmlFor='option4'>
                  <input
                    className='mr-2 h-4 w-4 appearance-none rounded-full border-2
                            border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent'
                    type='radio'
                    id='option4'
                    name='oilType'
                    value='option4'
                  />
                  <span className='inline-block align-middle'>Nafta</span>
                </label>
              </div>
            </section>

            <section className='mt-[5%] lg:grid lg:grid-cols-2 lg:ml-[8%]'>
              <div className='relative mb-[5%]'>
                <label
                  htmlFor='inputField'
                  className='absolute bg-white px-1 -top-[5%] md:top-[8%]
                        left-[12%] text-[#0D1444] text-sm'
                >
                  Marca de motor
                </label>
                <input
                  type='text'
                  id='inputField'
                  name='inputField'
                  className='border border-[#0D1444] py-2 px-4 w-[85%] h-14
                        mx-[10%] my-4 rounded'
                />
              </div>
              <div className='relative mb-[5%]'>
                <label
                  htmlFor='inputField'
                  className='absolute bg-white px-1 -top-[5%] md:top-[8%]
                        left-[12%] text-[#0D1444] text-sm'
                >
                  N° de motor
                </label>
                <input
                  type='text'
                  id='inputField'
                  name='inputField'
                  className='border border-[#0D1444] py-2 px-4 w-[85%] h-14
                        mx-[10%] my-4 rounded'
                />
              </div>
              <div className='relative mb-[5%]'>
                <label
                  htmlFor='inputField'
                  className='absolute bg-white px-1 -top-[5%] md:top-[8%]
                        left-[12%] z-10 text-[#0D1444] text-sm'
                >
                  Marca de chasis
                </label>
                <div className='relative'>
                  <input
                    type='text'
                    id='yearField'
                    name='yearField'
                    className='border border-[#0D1444] py-2 px-4 w-[85%] h-14
                        mx-[10%] my-4 rounded'
                  />
                </div>
              </div>

              <div className='relative mb-[5%]'>
                <label
                  htmlFor='inputField'
                  className='absolute bg-white px-1 -top-[5%] md:top-[8%]
                        left-[12%] text-[#0D1444] text-sm'
                >
                  N° de chasis
                </label>
                <input
                  type='text'
                  id='inputField'
                  name='inputField'
                  className='border border-[#0D1444] py-2 px-4 w-[85%] h-14
                        mx-[10%] my-4 rounded'
                />
              </div>
              <div className='relative mb-[5%]'>
                <label
                  htmlFor='inputField'
                  className='absolute bg-white px-1 -top-[5%] md:top-[8%]
                        left-[12%] text-[#0D1444] text-sm'
                >
                  Fecha de Vtv
                </label>
                <input
                  type='text'
                  id='inputField'
                  name='inputField'
                  className='border border-[#0D1444] py-2 px-4 w-[85%] h-14
                        mx-[10%] my-4 rounded'
                />
              </div>
              <div className='relative mb-[5%]'>
                <label
                  htmlFor='inputField'
                  className='absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[8%] left-[12%] z-10 text-[#0D1444] text-sm'
                >
                  Cantidad de ejes
                </label>
                <div className='relative'>
                  <input
                    type='text'
                    id='ejesField'
                    className='border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-4 rounded'
                    placeholder='Seleccione n° de ejes'
                  />
                  <select
                    id='ejesSelect'
                    className='bg-white absolute inset-0 opacity-0 cursor-pointer w-[85%] h-14 mx-[10%] my-4 z-10'
                    onChange={e => {
                      const selectedEjes = e.target.value
                      document.getElementById('ejesField').value = selectedEjes
                    }}
                  >
                    <option value='Seleccione n° de ejes'>Seleccione n° de ejes</option>
                    <option value='2 Ejes'>2 Ejes</option>
                    <option value='3 Ejes'>3 Ejes</option>
                    <option value='4 Ejes'>4 Ejes</option>
                    <option value='5 Ejes'>5 Ejes</option>
                    <option value='6 Ejes'>6 Ejes</option>
                  </select>
                  <div className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none'></div>
                </div>
              </div>
            </section>
          </div>

          <div className='bg-[#31429B] w-[100%] mx-[2.5%] md:-mx-[22%] md:w-[150%] lg:w-[100%] lg:mx-[5%]'>
            <h3 className='w-4/5 py-4 mx-4 font-semibold text-white text-start'>
              REGISTRO ÚNICO DE TRANSPORTE DEL AUTOMOTOR
            </h3>
            <div className='lg:grid lg:grid-cols-3'>
              <div className='relative my-0'>
                <label
                  htmlFor='inputField'
                  className='absolute bg-[#31429B] px-1 -top-[5%]  left-[12%]
                        z-10 text-white text-sm md:left-[22%] lg:top-[8%]'
                >
                  Constancia de inscripción
                </label>
                <div className='relative'>
                  <input
                    type='text'
                    id='yearField'
                    name='yearField'
                    className='border bg-[#31429B] border-white py-2 px-4 h-14
                        w-[85%] mx-[8%] my-4 rounded md:w-[57%] md:mx-[21%]
                        lg:w-[70%] lg:ml-[22%]  text-white'
                  />
                </div>
              </div>
              <div className='relative mb-2'>
                <label
                  htmlFor='inputField'
                  className='absolute bg-[#31429B] px-1 -top-[5%]
                        md:top-[8%] left-[12%] text-white text-sm
                        md:left-[22%] lg:top-[8%] z-20'
                >
                  Categoría
                </label>
                <div className='relative'>
                  <input
                    type='text'
                    id='categoryField'
                    className='border bg-[#31429B] border-white py-2 px-4
                        w-[85%] h-14 mx-[8%] my-4 rounded md:w-[57%] md:mx-[21%]
                        lg:w-[70%] lg:ml-[22%] text-white'
                    placeholder='Categoría de carga'
                  />
                  <select
                    id='categorySelect'
                    className=' bg-white absolute inset-0 opacity-0 cursor-pointer
                        w-[85%] h-14 mx-[8%] my-4 md:w-[57%] md:mx-[21%] lg:w-[70%] lg:ml[22%]'
                    onChange={e => {
                      const selectedCategory = e.target.value
                      document.getElementById('categoryField').value = selectedCategory
                    }}
                  >
                    <option value='Categoría de carga'>Seleccione la categoría de carga</option>
                    <option value='Transportista de carga de masiva o a granel'>
                      Transportista de carga de masiva o a granel
                    </option>
                    <option value='Transportista de carga peligrosa'>
                      Transportista de carga peligrosa
                    </option>
                    <option value='Transportista de carga fraccionada'>
                      Transportista de carga fraccionada
                    </option>
                    <option value='Transportista de carga propia'>
                      Transportista de carga propia
                    </option>
                    <option value='Transportista tráficos especiales'>
                      Transportista tráficos especiales
                    </option>
                    <option value='Transportista de carga internacional'>
                      Transportista de carga internacional
                    </option>
                  </select>
                  <div className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none'></div>
                </div>
              </div>
              <div>
                <button
                  onClick={handleClick1}
                  className='w-[65%] h-8 mx-[8%] mb-0 rounded-md bg-white
                    text-[#0D1444] font-semibold text-xs md:w-[30%]
                    md:mx-[21%] lg:mt-[5%] lg:w-[55%]'
                >
                  seleccionar constancia
                </button>
                <p className='text-white mx-[10%] pb-4 md:mx-[22%]'>imagen.jpg</p>
              </div>
            </div>
          </div>

          <div className='w-[95%] h-20'>
            <button
              onClick={handleClick2}
              className='w-full h-8 bg-[#31429B] rounded-md
                text-white'
            >
              Agregar vehículo
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
