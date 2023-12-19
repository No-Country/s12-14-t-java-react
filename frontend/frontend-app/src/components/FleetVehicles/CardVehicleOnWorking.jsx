import deleteIcon from '/img/deleteIcon.svg'
import editIcon from '/img/editIcon.svg'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import { useVehicles } from '../../hooks/useVehicles'
const CardVehicleOnWorking = props => {

  const {deleteVehicle} =useVehicles();
  const handleDelete = async e => {
    console.log("Deletting")
    e.preventDefault()
    deleteVehicle(props.vehicle.id);
  
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
    setIsChecked(!isChecked)
  }

  return (
      <article className='card'>
      <header className='bg-[#31429B] w-full flex flex-row justify-between items-center rounded-t-lg pl-3'>
        <p className='text-[#fff] text-[16px] font-semibold'>ID: {props.vehicle.id}</p>
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
  )
}
export default CardVehicleOnWorking
