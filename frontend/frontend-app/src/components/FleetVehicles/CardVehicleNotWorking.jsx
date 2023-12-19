import deleteIcon from '/img/deleteIcon.svg'
import editIcon from '/img/editIcon.svg'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import { useVehicles } from '../../hooks/useVehicles'

const CardVehicleNotWorking = ({vehicle}) => {


  const {deleteVehicle} =useVehicles();
  const handleDelete = async e => {
    console.log("Deletting")
    e.preventDefault()
    deleteVehicle(id);
  
  }

  const iconDelete = (
    <img
      src={deleteIcon}
      alt='Icono para eliminar'
      className='border-b-2 pb-[2px] cursor-pointer border-[#31429B] group-hover:border-white'
      onClick={deleteVehicle}
    />
  )


  const {id ,brand, model, year, patent, reason}= vehicle;
  return (
    <article className="card h-max-[250px] mb-3 overflow-hidden">
      <header className="bg-[#31429B] w-full h-9 flex flex-row justify-around  items-center">
      <p className='text-[#fff] text-[16px] font-semibold'>ID: {id}</p>
        <div className='flex flex-row gap-1'>
          {/* <a href='#'>{iconEdit}</a> */}
          <a href='#' className='px-3 pt-3 pb-2 group border-color' onClick={handleDelete}>
            {iconDelete}
          </a>
        </div>
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
    </article>
  );
};
export default CardVehicleNotWorking;
