import deleteIcon from '/img/deleteIcon.svg'
import editIcon from '/img/editIcon.svg'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import { useVehicles } from '../../hooks/useVehicles'
import { useSelector } from 'react-redux'
import { Button, Modal } from 'flowbite-react'

const CardVehicleNotWorking = ({vehicle}) => {
  const user = useSelector(state => state.auth.user)

  const {deleteVehicle} =useVehicles();
  const { backMaintenanceVehicle } = useVehicles()
  const handleDelete = async e => {
    console.log("Deletting")
    e.preventDefault()
    deleteVehicle(id);
  
  }
  const [openModal, setOpenModal] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const idCheckBox = uuidv4()

  const handleCheckBoxChange = () => {
    // setMaintenanceVehicle()
    setOpenModal(true)

    // setIsChecked(!isChecked)
  }

  const iconDelete = (
    <img
      src={deleteIcon}
      alt='Icono para eliminar'
      className='border-b-2 pb-[2px] cursor-pointer border-[#31429B] group-hover:border-white'
      onClick={deleteVehicle}
    />
  )

  const enableVehicle = () => {
    setOpenModal(false)
    console.log("Disabling vehicle " + vehicle.id)
    backMaintenanceVehicle({
      vehicle: vehicle,
      })
  }

  const {id ,brand, model, year, patent, reason}= vehicle;
  return (
    <article className="card h-max-[250px] mb-3 overflow-hidden">
      <header className="bg-[#31429B] w-full h-9 flex flex-row justify-around  items-center">
      <p className='text-[#fff] text-[16px] font-semibold'>ID: {id}</p>
        {user.role==='OWNER'?<div className='flex flex-row gap-1'>
          {/* <a href='#'>{iconEdit}</a> */}
          <a href='#' className='px-3 pt-3 pb-2 group border-color' onClick={handleDelete}>
            {iconDelete}
          </a>
        </div>:null}
      </header>
      <div className="w-full flex flex-row justify-start items-start p-3 bg-[#F0F8FF] rounded-b-[10px]">
        <div className="text-[15px] font-bold leading-6 text-[#0D1544] h-[180px]">
          <p>Marca: <span className="font-semibold">{brand}</span></p> 
          <p>Modelo: <span className="font-semibold">{model}</span></p>
          <p>Año: <span className="font-semibold">{year}</span></p>
          <p>Patente: <span className="font-semibold">{patent}</span></p>
          <p>Motivo: <span className="font-semibold">{reason}</span></p>
        </div>
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
                Poner en servicio
              </span>
            </label>
          </div>
        </footer>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className='bg-[#F0F8FF]'>PONER EN SERVICIO</Modal.Header>
        <Modal.Body className='bg-[#F0F8FF]'>
          <div className='space-y-6'>
            <p className='text-base text-[#0D1544]'>
              <strong>ID: {vehicle.id}</strong> <br />
              <strong>Tipo de vehículo:</strong> {vehicle.vehicleType} <br />
              <strong>Patente:</strong> {vehicle.patent} <br />
              <strong>Marca:</strong> {vehicle.brand} <br />
              <strong>Año:</strong> {vehicle.year}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className='bg-[#F0F8FF] flex-col'>
          <Button className='w-full btn btn-template-1' onClick={() => enableVehicle()}>
            Confirmar
          </Button>
          <Button className='w-full btn btn-template-2' onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>

    </article>
  );
};
export default CardVehicleNotWorking;
