const CardVehicleNotWorking = ({vehicle}) => {
  const {id ,brand, model, year, patent, reason}= vehicle;
  return (
    <article className="card h-max-[250px] mb-3 overflow-hidden">
      <header className="bg-[#31429B] w-full h-9 flex flex-row justify-around  items-center">
        <h2 className="text-[#fff] text-[16px] font-medium leading-6 tracking-[0.15px]">
          Tipo de Vehículo: {id}
        </h2>
        <div className="flex flex-row gap-1"></div>
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
