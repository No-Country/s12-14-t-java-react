import Swal from 'sweetalert2'
import DriverMenu from './DriverMenu/DriverMenu'

import { SimpleDatePicker } from './SimpleDatePicker'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function DatosPersonalesChofer() {
  const InputRef1 = useRef(null)
  const InputRef2 = useRef(null)
  const [Name1, setName1] = useState('')
  const [Name2, setName2] = useState('')
  const navigateTo = useNavigate()

  const handleFileChange1 = () => {
    const fileInput = InputRef1.current
    if (fileInput.files.length > 0) {
      setName1(fileInput.files[0].name)
    } else {
      setName1('')
    }
  }
  const [sending, setSending] = useState(false)

  const handleFileChange2 = () => {
    const fileInput = InputRef2.current
    if (fileInput.files.length > 0) {
      setName2(fileInput.files[0].name)
    } else {
      setName2('')
    }
  }
  const user = JSON.parse(localStorage.getItem('user'));
  const imageStyle = {
    height: '100px'
  }

  const handleSendInfo = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false)
      Swal.fire('Informacion enviada!')
      navigateTo('/panel-general-chofer')
    }, 2000);

  }

    return (
        <>
            <DriverMenu />
            <section className='sm:w-100%'>
                <div className="flex mt-24 gap-6 w-full">
                <img style={imageStyle} className="ml-6 rounded-2xl" src={user.photo} alt="" />
                    <div className="flex flex-col">
                        <h6 className="text-xl text-[#31429B] font-semibold">Nombre empleado</h6>
                        <p className="font-semibold text-base">Rol</p>
                    </div>
                </div>
                <button className="w-[65%] text-center mt-10 ml-4 text-[#31429B] font-semibold text-base ">Carga tus datos laborales para completar tu perfil</button>
                <div className="gap-5 mt-10 ml-8">
                    <h1 className="text-base font-semibold ">Carnet de conducir habilitante*</h1>
                    <div className="mt-3">
                        <label
                            htmlFor="fileInput1"
                            className="mb-1 block bg-blue-600 cursor-pointer w-40 text-center text-base font-medium text-gray-700 text-white rounded-md w"
                            style={{
                                padding: '10px 24px',
                                display: 'inline-block'
                            }}
                        >
                            Examinar
                        </label>
                        <input
                            id="fileInput1"
                            type="file"
                            style={{ display: 'none' }}
                            ref={InputRef1}
                            onChange={handleFileChange1}
                        />
                        {Name1 && <span style={{ marginLeft: '10px' }}>{Name1}</span>}
                    </div>
                </div>

                {/* Calendario */}
                <div className='mt-10 ml-5'>
                    <div className='w-[80%] h-14 text-lg border-[#0D1544]'>
                        <SimpleDatePicker label="Fecha de mantenimiento" />
                    </div>
                </div>
                <div className='ml-9 '>
                    <h3 className='mt-5 text-base font-semibold'>Antecedentes penales*</h3>
                    {/* <button className=" bg-[#2E4BDF] mt-3 w-40  h-7 text-base text-white">Examinar</button> */}
                </div>

                <div className="ml-9 mt-3">
                    <label
                        htmlFor="fileInput2"
                        className="mb-1 block bg-blue-600 cursor-pointer w-40 text-center text-base font-medium text-gray-700 text-white rounded-md w"
                        style={{
                            padding: '10px 24px',
                            display: 'inline-block'
                        }}
                    >
                        Examinar
                    </label>
                    <input
                        id="fileInput2"
                        type="file"
                        style={{ display: 'none' }}
                        ref={InputRef2}
                        onChange={handleFileChange2}
                    />
                    {Name2 && <span style={{ marginLeft: '10px' }}>{Name2}</span>}
                </div>
                <div className='flex justify-center'>
                    <button
                        onClick={handleSendInfo}
                        className={`ml-6 mt-80 mb-8 text-center w-[65%] h-10 rounded ${Name2 ? 'bg-blue-600' : 'bg-gray'
                            } text-white text-sm`}
                    >
                {sending ? (
                  <span className='loaderSpinBtn'></span>
                ) : (
                  <span>Guardar información</span>
                )}
                    </button>
                </div>

            </section>
        </>
    )
}

export default DatosPersonalesChofer
