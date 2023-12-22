import { useEffect, useState } from "react";

export const vehiculosChofer = [
  {
    id: 1,
    nameChofer: "Nombre del chofer 1",
    vehicle: 1,
    date: "dd/mm/aaaa",
    luces: true,
    frenos: false,
    gomas: true,
    aceite: false,
  },
  {
    id: 2,
    nameChofer: "Nombre del chofer 1",
    vehicle: 2,
    date: "dd/mm/aaaa",
    luces: true,
    frenos: false,
    gomas: true,
    aceite: false,
  },
  {
    id: 3,
    nameChofer: "Nombre del chofer 1",
    vehicle: 1,
    date: "dd/mm/aaaa",
    luces: true,
    frenos: false,
    gomas: true,
    aceite: false,
  },
  {
    id: 4,
    nameChofer: "Nombre del chofer 1",
    vehicle: 1,
    date: "dd/mm/aaaa",
    luces: true,
    frenos: false,
    gomas: false,
    aceite: false,
  },
  {
    id: 5,
    nameChofer: "Nombre del chofer 1",
    vehicle: 2,
    date: "dd/mm/aaaa",
    luces: true,
    frenos: false,
    gomas: true,
    aceite: false,
  },
];

const CardRevision = ({ selectedVehicle }) => {
  const [choferInfoList, setChoferInfoList] = useState([]);

  useEffect(() => {
    // Filtra el array de vehículos para encontrar los que coinciden con el selectedVehicle
    const selectedChofers = vehiculosChofer.filter(
      (chofer) => chofer.vehicle === parseInt(selectedVehicle)
    );

    // Inicializa el estado para cada chofer con la información correspondiente
    const initialChoferInfoList = selectedChofers.map((chofer) => ({
      ...chofer,
    }));

    // Actualiza el estado con la lista de choferes seleccionados
    setChoferInfoList(initialChoferInfoList);
  }, [selectedVehicle]);

  const handleCheckboxChange = (choferId, property) => {
    setChoferInfoList((prevList) =>
      prevList.map((chofer) =>
        chofer.id === choferId
          ? { ...chofer, [property]: !chofer[property] }
          : chofer
      )
    );
  };

  if (choferInfoList.length === 0) {
    // Mostrar un mensaje o cualquier contenido si no hay información del chofer
    return <p>No se encontró información del chofer.</p>;
  }

  return (
    <>
      {choferInfoList.map((choferInfo) => (
        <div key={choferInfo.id} className="   my-5 p-3">
          <div className="flex justify-between gap-5 text-sm text-blue-600 font-semibold">
            <h3>{choferInfo.nameChofer}</h3>
            <h3>{choferInfo.date}</h3>
          </div>
          <div className="border-b border-solid border-blue-400 mt-2"></div>
          <article className="text-sm">
            <div className="flex flex-col my-2">
              {Object.entries(choferInfo).map(([key, value]) => {
                // Filtra las propiedades que son booleanas y crea los checkboxes y labels correspondientes
                if (typeof value === "boolean" && key !== "id") {
                  return (
                    <div className="flex items-start space-x-2" key={key}>
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() =>
                          handleCheckboxChange(choferInfo.id, key)
                        }
                      />
                      <label className="ml-auto">{`Verificar ${key}`}</label>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <p>
              <span className="font-semibold">Descripción: </span>Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Eaque illum, id
              provident amet omnis cumque!
            </p>
          </article>
        </div>
      ))}
    </>
  );
};

export default CardRevision;
