import { useState } from "react";
import CardRevision from "./CardRevision";

const vehiculosLista = () => [
  {
    id: 1,
    name: "Vehículo 1",
  },
  {
    id: 2,
    name: "Vehículo 2",
  },
  {
    id: 3,
    name: "Vehículo 3",
  },
  {
    id: 4,
    name: "Vehículo 4",
  },
  {
    id: 5,
    name: "Vehículo 5",
  },
  {
    id: 6,
    name: "Vehículo 6",
  },
  {
    id: 7,
    name: "Vehículo 7",
  },
];

const Revision = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const vehicles = vehiculosLista();

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedVehicle(selectedValue);
    console.log(selectedValue);
  };

  const imageStyle = {
    height: '400px'
  }

  return (
    <div className='container w-full lg:w-[100%] py-3 px-5'>
    <div className='addVehicle w-full h-full rounded-[15px] shadow-custom px-6 py-7'>

    <section className="flex flex-col w-[100%]  items-center mt-5  ">
      <h1 className="Mostrar-title font-bold text-[#0D1544] lg:text-2xl md:text-2xl text-lg ml-0">
        Revisión diaria
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <img  src='https://prmceam.ac.in/wp-content/uploads/2015/09/page-under-construction-300x217.jpg' alt='No Image' className='w-[80%] rounded-[15px]' />


      {/* <div className="p-4">
        <select
          className="border p-2"
          onChange={handleSelectChange}
          value={selectedVehicle}
        >
          <option value="">Seleccione un vehículo</option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.name}
            </option>
          ))}
        </select>
      </div>

      <section className=" w-[328px]  sm:w-[630px] md:w-[898px] h-full p-5 shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        <CardRevision selectedVehicle={selectedVehicle} />
      </section> */}
    </section>
    </div>
    </div>
  );
};

export default Revision;
