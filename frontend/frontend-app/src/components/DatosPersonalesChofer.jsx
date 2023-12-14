import DriverMenu from './DriverMenu/DriverMenu'
import SideMenu from './SideMenu/SideMenu'
import { SimpleDatePicker } from './SimpleDatePicker'
import React, { useRef, useState } from 'react'

function DatosPersonalesChofer() {
  const InputRef1 = useRef(null)
  const InputRef2 = useRef(null)
  const [Name1, setName1] = useState('')
  const [Name2, setName2] = useState('')

  const handleFileChange1 = () => {
    const fileInput = InputRef1.current
    if (fileInput.files.length > 0) {
      setName1(fileInput.files[0].name)
    } else {
      setName1('')
    }
  }

  const handleFileChange2 = () => {
    const fileInput = InputRef2.current
    if (fileInput.files.length > 0) {
      setName2(fileInput.files[0].name)
    } else {
      setName2('')
    }
  }

  return (
    <>
      <SideMenu />
      {/* <DriverMenu /> */}
      <section>
        <div className='flex gap-6 mt-24'>
          <img className='ml-6 rounded-2xl' src='././img/chofer.png' alt='' />
          <div className='flex flex-col'>
            <h6 className='text-xl text-[#31429B] font-semibold'>Nombre empleado</h6>
            <p className='text-base font-semibold'>Rol</p>
          </div>
        </div>
        <button className='w-[75%] text-center mt-10 ml-6 text-[#31429B] font-semibold text-base'>
          Carga tus datos laborales para completar tu perfil
        </button>
        <div className='gap-5 mt-10 ml-8'>
          <h1 className='text-base font-semibold '>Carnet de conducir habilitante*</h1>
          <div className='mt-3'>
            <label
              htmlFor='fileInput1'
              className='block w-40 mb-1 text-base font-medium text-center text-white text-gray-700 bg-blue-600 rounded-md cursor-pointer w'
              style={{
                padding: '10px 24px',
                display: 'inline-block'
              }}
            >
              Examinar
            </label>
            <input
              id='fileInput1'
              type='file'
              style={{ display: 'none' }}
              ref={InputRef1}
              onChange={handleFileChange1}
            />
            {Name1 && <span style={{ marginLeft: '10px' }}>{Name1}</span>}
          </div>
        </div>

        {/* Calendario */}

        <div className='mt-10 w-72 h-14 ml-5 text-lg border-[#0D1544]'>
          <SimpleDatePicker label='Fecha de mantenimiento' />
        </div>

        <div className='ml-9 '>
          <h3 className='mt-5 text-base font-semibold'>Antecedentes penales*</h3>
          {/* <button className=" bg-[#2E4BDF] mt-3 w-40  h-7 text-base text-white">Examinar</button> */}
        </div>

        <div className='mt-3 ml-9'>
          <label
            htmlFor='fileInput2'
            className='block w-40 mb-1 text-base font-medium text-center text-white text-gray-700 bg-blue-600 rounded-md cursor-pointer w'
            style={{
              padding: '10px 24px',
              display: 'inline-block'
            }}
          >
            Examinar
          </label>
          <input
            id='fileInput2'
            type='file'
            style={{ display: 'none' }}
            ref={InputRef2}
            onChange={handleFileChange2}
          />
          {Name2 && <span style={{ marginLeft: '10px' }}>{Name2}</span>}
        </div>
        <button
          className={`ml-6 mt-40 text-center w-72 h-10 rounded ${
            Name2 ? 'bg-blue-600' : 'bg-gray'
          } text-white text-sm`}
        >
          Guardar información
        </button>
      </section>
    </>
  )
}

export default DatosPersonalesChofer
