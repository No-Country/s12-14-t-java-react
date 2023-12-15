import React, { useState } from "react";
import "./PanelGeneralChofer.css";
import DriverMenu from "../DriverMenu/DriverMenu";
import { SimpleDatePicker } from "../SimpleDatePicker";

function PerfilChofer() {
  const [carnetFile, setCarnetFile] = useState(null);
  const [antecedentesFile, setAntecedentesFile] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const isFormValid = carnetFile && antecedentesFile;

  const handleCarnetFileChange = (e) => {
    const file = e.target.files[0];

    setCarnetFile(file);
  };

  const handleAntecedentesFileChange = (e) => {
    const file = e.target.files[0];

    setAntecedentesFile(file);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <DriverMenu />
      <section className="sm:w-100% sm:h-100% ">
        <div className="flex mt-24 gap-6">
          <img className="ml-6 rounded-2xl" src="././img/chofer.png" alt="" />
          <div className="flex flex-col">
            <h6 className="text-xl text-[#31429B] font-semibold">
              Nombre empleado
            </h6>
            <p className="font-semibold text-base">Rol</p>
          </div>
        </div>

        <div className="m-8 text-center">
          <h2 className="text-sm text-blue-600 font-semibold">
            Carga tus datos laborales para completar tu perfil
          </h2>
        </div>
        <div className="m-8 flex flex-col gap-6">
          <label className="text-black text-sm ">
            Carnet de conducir habilitante*
            <input
              type="file"
              onChange={handleCarnetFileChange}
              className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-dark-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
            />
          </label>
          <div className="relative z-20">
            <SimpleDatePicker
              label="Fecha de nacimiento*"
              onChange={handleDateChange}
            />
          </div>
          <label className="text-black text-sm ">
            Antecedentes penales*
            <input
              type="file"
              onChange={handleAntecedentesFileChange}
              className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-dark-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          className={`first-letter:mt-10 bg-blue-600 text-white py-1 px-16 rounded-sm flex items-center justify-center mx-auto ${
            isFormValid ? "hover:bg-blue-700" : "opacity-60 cursor-not-allowed"
          }`}
        >
          Guardar información
        </button>
      </section>
    </>
  );
}

export default PerfilChofer;
