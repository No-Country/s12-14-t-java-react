const CardVehicleNotWorking = (props) => {
  return (
    <article className="card h-max-[250px] mb-3 overflow-hidden">
      <header className="bg-[#31429B] w-full h-9 flex flex-row justify-around  items-center">
        <h2 className="text-[#fff] text-[16px] font-medium leading-6 tracking-[0.15px]">
          Tipo de Vehículo: {props.vehicle.vehicleType}
        </h2>
        <div className="flex flex-row gap-1"></div>
      </header>
      <div className="w-full flex flex-row justify-start items-start p-3 bg-[#F0F8FF] rounded-b-[10px]">
        <div className="text-[14px] font-bold leading-6 text-[#0D1544] h-[180px]">
          <p>Marca: {props.vehicle.brand}</p>
          <p>Modelo: {props.vehicle.model}</p>
          <p>Año: {props.vehicle.year}</p>
          <p>Patente: {props.vehicle.patent}</p>
          <p>Motivo: {props.vehicle.reason}</p>
        </div>
      </div>
    </article>
  );
};
export default CardVehicleNotWorking;
