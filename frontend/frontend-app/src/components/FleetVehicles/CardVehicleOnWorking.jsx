import deleteIcon from "/img/deleteIcon.svg";
import editIcon from "/img/editIcon.svg";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";
const CardVehicleOnWorking = () => {
  const deleteVehicle = () => {};
  const editVehicle = () => {};
  const iconDelete = (
    <img
      src={deleteIcon}
      alt="Icono para eliminar"
      className="w-[20px] h-5 cursor-pointer hover:bg-[#9299b5]"
      onClick={deleteVehicle}
    />
  );
  const iconEdit = (
    <img
      src={editIcon}
      alt="Icono de editar"
      className="w-[20px] h-5 cursor-pointer hover:bg-[#9299b5] "
      onClick={editVehicle}
    />
  );
  const [isChecked, setIsChecked] = useState(false);
  const idCheckBox=uuidv4();
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <article className="card">
      <header className="bg-[#31429B] w-full h-9 flex flex-row justify-around  items-center rounded-t-[10px] ">
        <h2 className="text-[#fff] text-[14px] font-semibold">
          ID del vehículo
        </h2>
        <div className="flex flex-row gap-1">
          {iconEdit}
          {iconDelete}
        </div>
      </header>
      <div className="w-full flex flex-row justify-around items-start bg-[#F0F8FF]">
        <div className="text-[13px] font-bold leading-6 text-[#0D1544] ">
          <p>Tipo de vehículo</p>
          <p>Patente</p>
          <p>Marca</p>
        </div>
        <span className=" text-[#0D1544] font-bold leading-6">Año</span>
      </div>
      <footer className="bg-[#31429B] w-full h-9 flex flex-row justify-center items-center rounded-b-[10px]">
        <div>
            <input className="custom-checkbox-out"
              type="checkbox"
              id={idCheckBox}
              checked={isChecked}
              onChange={handleCheckBoxChange}
            />
          <div className={`new-checkbox `+ (isChecked? 'checked':'not-checked')}
          onClick={handleCheckBoxChange}
          >&#10003;</div>
          <label className="text-[#fff] text-[14px] font-normal leading-5 tracking-[0.25px] " htmlFor={idCheckBox}>
            Fuera de servicio
          </label>
        </div>
      </footer>
    </article>
  );
};
export default CardVehicleOnWorking;
