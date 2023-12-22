import React, { useState } from "react";
import Swal from "sweetalert2";

const RevisionChofer = ({
  selectedVehicle,
  setButtonRevision,
  setSelectStatus,
  setShowRevisionComponent,
}) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [description, setDescription] = useState("");
  const [revisionCompleted, setRevisionCompleted] = useState(false);

  const handleCheckboxChange = (itemName) => {
    setCheckedItems((prevItems) => {
      if (prevItems.includes(itemName)) {
        return prevItems.filter((item) => item !== itemName);
      } else {
        return [...prevItems, itemName];
      }
    });
  };

  const [sending, setSending] = useState(false)

  const handleFinalizarMantenimiento = () => {
    // Mostrar la alerta con la información
    // alert(`Información:
    //         Vehículo: ${selectedVehicle}
    //         Elementos verificados: ${checkedItems.join(", ")}
    //         Descripción: ${description}`);
    setSending(true);
    setTimeout(() => {
      setSending(false)
      Swal.fire('Revision enviada con exito!')
      setRevisionCompleted(true); // oculto el componente de revisión
    }, 2000);


  };

  return (
    <div className="m-4">
      <section className="flex justify-between text-sm text-blue-600 font-semibold">
        <h2>Vehiculo</h2>
        <h2>Patente: {selectedVehicle}</h2>
      </section>
      {revisionCompleted ? ( // Mostrar solo si la revisión está completada
        <>
          <h2 className="text-sm  font-semibold mt-4">
            Revisión diaria completada
          </h2>
          <button
            className="rounded-sm border-[1px] border-blue-600 text-blue-600 flex items-center justify-center mx-auto py-1 px-6 mt-4 "
            onClick={() => {
              setButtonRevision(false);
              setSelectStatus(true);
              setShowRevisionComponent(false); // Oculta el componente al devolver el vehículo
            }}
          >
            Devolver vehículo
          </button>
        </>
      ) : (
        <>
          <section className="m-w-[329px] border-[1px] rounded-sm mt-2">
            <div className="bg-blue-600 py-3 px-4 self-stretch rounded-t-sm">
              <h2 className="text-sm text-white">Revisión diaria</h2>
            </div>
            <form className="m-5 flex flex-col gap-5">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={() => handleCheckboxChange("luces")}
                />
                Verificar luces
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={() => handleCheckboxChange("frenos")}
                />
                Revisar frenos
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={() => handleCheckboxChange("presionGomas")}
                />
                Verificar presión de las gomas
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={() => handleCheckboxChange("medirAceite")}
                />
                Medir aceite
              </label>
              <textarea
                rows="4"
                cols="30"
                placeholder=" Descripción..."
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </form>
          </section>
          <div className="flex justify-center items-center">
            <div className="mt-24 mb-8 flex gap-2 items-center ">
              <button
                className="text-white w-[100%] h-[52px] text-sm rounded-sm bg-blue-600 py-1 px-16"
                type="button"
                onClick={handleFinalizarMantenimiento}
              >
                {sending ? (
                  <span className='loaderSpinBtn'></span>
                ) : (
                  <span>Finalizar revision</span>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RevisionChofer;
