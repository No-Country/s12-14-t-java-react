import deleteIcon from '/img/deleteIcon.svg'
import editIcon from '/img/editIcon.svg'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import { useVehicles } from '../../hooks/useVehicles'
import { MaintenanceVehicleForm } from './MaintenanceVehicleForm'
import { Modal, Button } from 'flowbite-react'

const CardVehicleOnWorking = props => {
  const { deleteVehicle } = useVehicles()
  const [openModal, setOpenModal] = useState(false)

  const handleDelete = async e => {
    e.preventDefault()
    deleteVehicle(props.vehicle.id)
  }

  const iconDelete = (
    <img
      src={deleteIcon}
      alt='Icono para eliminar'
      className='border-b-2 pb-[2px] cursor-pointer border-[#31429B] group-hover:border-white'
      onClick={deleteVehicle}
    />
  )
  // const iconEdit = (
  //   <img
  //     src={editIcon}
  //     alt='Icono de editar'
  //     className='p-3 cursor-pointer hover:bg-[#9299b5] '
  //     onClick={editVehicle}
  //   />
  // )
  const [isChecked, setIsChecked] = useState(false)
  const idCheckBox = uuidv4()
  const handleCheckBoxChange = () => {
    // setMaintenanceVehicle()
    setOpenModal(true)

    // setIsChecked(!isChecked)
  }

  return (
    <>
      <article className='card'>
        <header className='bg-[#31429B] w-full flex flex-row justify-between items-center rounded-t-lg pl-3'>
          <p className='text-[#fff] text-[16px] font-semibold'>{props.vehicle.id}</p>
          <div className='flex flex-row gap-1'>
            {/* <a href='#'>{iconEdit}</a> */}
            <a href='#' className='px-3 pt-3 pb-2 group border-color' onClick={handleDelete}>
              {iconDelete}
            </a>
          </div>
        </header>

        <div className='w-full flex flex-row items-start justify-between bg-[#F0F8FF] px-3 py-2'>
          <div className='text-[13px] font-bold leading-6 text-[#0D1544] '>
            <p>{props.vehicle.vehicleType}</p>
            <p>{props.vehicle.model}</p>
            <p>{props.vehicle.patent}</p>
            <p>{props.vehicle.brand}</p>
          </div>
          <span className=' text-[#0D1544] font-bold leading-6'>{props.vehicle.year}</span>
        </div>
        <footer className='bg-[#31429B] w-full py-2 flex flex-row items-center rounded-b-lg px-3'>
          <div>
            <label htmlFor={idCheckBox} className='flex align-baseline cursor-pointer'>
              <input
                className='custom-checkbox-out'
                type='checkbox'
                id={idCheckBox}
                checked={isChecked}
                onChange={handleCheckBoxChange}
              />
              <div
                className={`new-checkbox ` + (isChecked ? 'checked' : 'not-checked')}
                onClick={handleCheckBoxChange}
              >
                &#10003;
              </div>
              <span className='text-[#fff] text-[14px] font-normal leading-5 tracking-[0.25px] '>
                Fuera de servicio
              </span>
            </label>
          </div>
        </footer>
      </article>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className='bg-[#F0F8FF]'>FUERA DE SERVICIO</Modal.Header>
        <Modal.Body className='bg-[#F0F8FF]'>
          <div className='space-y-6'>
            <p className='text-base text-[#0D1544]'>
              <strong>ID: {props.vehicle.id}</strong> <br />
              <strong>Tipo de vehículo:</strong> {props.vehicle.vehicleType} <br />
              <strong>Patente:</strong> {props.vehicle.patent} <br />
              <strong>Marca:</strong> {props.vehicle.brand} <br />
              <strong>Año:</strong> {props.vehicle.year}
            </p>
            <div className='relative'>
              <textarea
                type='text'
                id='motivo'
                className='block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none border-[#0D1544] bg-white hover:#31429B focus:outline-none peer'
                placeholder=''
                name='motivo'
                rows={5}
              />
              <label
                htmlFor='description'
                className='left-3.5 absolute text-sm text-gray-500 duration-300 transform rounded -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
              >
                Motivo*
              </label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='bg-[#F0F8FF] flex-col'>
          <Button className='w-full btn btn-template-1' onClick={() => setOpenModal(false)}>
            Confirmar
          </Button>
          <Button className='w-full btn btn-template-2' onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default CardVehicleOnWorking
