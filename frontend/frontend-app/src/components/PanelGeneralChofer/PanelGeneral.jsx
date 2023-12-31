import React, { useEffect, useState } from "react";
import { BiErrorAlt } from "react-icons/bi";
import "./PanelGeneralChofer.css";
import { IoMdTime } from "react-icons/io";
import DriverMenu from "../DriverMenu/DriverMenu";
import RevisionChofer from "./RevisionChofer";
import { getActiveVehicles } from "../../services/fetchService";

function PanelGeneral({ value }) {
  
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getActiveVehicles().then((vehicles)=>{
      setVehicles(vehicles.data)
      console.log(vehicles.data)
      // setSwitchOn(true)
      // setButtonRevision(false);
      // setSelectStatus(true);
      // setShowRevisionComponent(false); // Oculta el componente revisión al cambiar el switch
    })

  }, []);


  const formattedDate = value
    ? value.format("DD/MM/YYYY")
    : "01/2023 - 01/2024";
  const [SwitchOn, setSwitchOn] = useState(false);
  const [buttonRevision, setButtonRevision] = useState(false);
  const [selectStatus, setSelectStatus] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(""); // Estado para el vehículo seleccionado
  const [showRevisionComponent, setShowRevisionComponent] = useState(false); // Mostrar el componente de revisión

  const handleSwitchChange = () => {
    setSwitchOn((prev) => !prev);
    setButtonRevision(false);
    setSelectStatus(true);
    setShowRevisionComponent(false); // Oculta el componente revisión al cambiar el switch
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    setButtonRevision(true);
    setSelectStatus(false);
    setSelectedVehicle(selectedValue);
    setShowRevisionComponent(false); // Oculta el componente revisión al cambiar al seleccionar un vehículo
  };

  const handleStartRevisionClick = () => {
    setButtonRevision(false);
    setSelectStatus(true);
    setShowRevisionComponent(true); // Muestra el componente al hacer clic en "Iniciar revisión diaria"
  };

  const user = JSON.parse(localStorage.getItem('user'));

  const imageStyle = {
    height: '100px'
  }

  return (
    <>
      <DriverMenu />
      <section className="sm:w-100% sm:h-100% ">
        <div className="flex mt-24 gap-6">
          <img style={imageStyle} className="ml-6 rounded-2xl" src={user.photo} alt="" />
          <div className="flex flex-col">
            <h6 className="text-xl text-[#31429B] font-semibold">
              {user.name}
            </h6>
            <p className="font-semibold text-base">{user.role}</p>
          </div>
        </div>
        <div className="flex mt-10 ml-8 items-center gap-4">
          <div className="flex flex-col">
            <h1 className="text-base font-semibold">Identidad Validada</h1>
            <p className="fecha text-xs font-semibold">{formattedDate} </p>
          </div>
          <button className="btn-renovar rounded w-[40%] h-7 text-base text-blue-600">
            Renovar ID
          </button>
        </div>

        <div
          className={`horario-container w-[90%] mt-10 ml-6 rounded-lg ${
            SwitchOn ? "bg-blue-600 text-white" : "bg-[#FBFBFB] text-black"
          }`}
        >
          <div className=" h-24 p-2">
            <h6 className="text-lg font-semibold">Horario laboral</h6>
            <div className="flex gap-4  items-center">
              <div className="{gap-5 ${isSwitchOn ? 'text-white' : 'text-blue-600'}}> ">
                <IoMdTime size={40} />
              </div>
              <p className="mt-3 text-base font-semibold">
                {SwitchOn ? "Terminar mi turno" : "Iniciar mi turno"}
              </p>

              <label className="relative inline-flex items-center cursor-pointer ml-5 bg-gray rounded-2xl">
                <input
                  type="checkbox"
                  checked={SwitchOn}
                  onChange={handleSwitchChange}
                  className="sr-only peer"
                />
                <div className=" w-16 h-9 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-grey after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
        {SwitchOn && selectStatus && (
          <select
            id="countries"
            onChange={handleSelectChange}
            value={selectedVehicle}
            className=" ml-6 mt-8 bg-gray-50 border border-[#0D1544] text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-[#0D1544] block w-[90%]  h-14 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option className="bg-[#0D1544] text-white" disabled>
              Seleccionar vehiculo
            </option>
            {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={'Vehiculo: ' + vehicle.brand + ' ' + vehicle.model + '(' + vehicle.patent + ')'}>
              {vehicle.brand} {vehicle.model} {vehicle.patent}
            </option>))}
          </select>
        )}

        {buttonRevision && (
          <div className="flex flex-col gap-3 m-5">
            <div className="flex justify-between text-sm text-blue-600 font-semibold">
              <h2>{selectedVehicle}</h2>

            </div>

            <button
              className="text-white text-sm  rounded-sm bg-blue-600 py-1 px-4"
              onClick={handleStartRevisionClick}
            >
              Iniciar revisión diaria
            </button>
            <button
              className="rounded-sm border-[1px] border-blue-600 text-blue-600"
              onClick={() => {
                setButtonRevision(false);
                setSelectStatus(true);
                setShowRevisionComponent(false); // Oculta el componente al devolver el vehículo
              }}
            >
              Devolver vehículo
            </button>
          </div>
        )}

        {showRevisionComponent && (
          <RevisionChofer
            selectedVehicle={selectedVehicle}
            setButtonRevision={setButtonRevision}
            setSelectStatus={setSelectStatus}
            setShowRevisionComponent={setShowRevisionComponent}
          />
        )}

        {showRevisionComponent ? (
          ""
        ) : (
          <div className="flex justify-center items-center">
            <div className="btn-reporte w-[65%] mt-80 mb-8 flex gap-2 items-center">
              <BiErrorAlt className="text-[#CB0000] ml-8" size={20} />
              <button className="text-[#CB0000] text-sm flex justify">
                Realizar reporte
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default PanelGeneral