import { useEffect } from 'react';
import CardVehicleOnWorking from './CardVehicleOnWorking';
import { useSelector } from 'react-redux';
import { useVehiclesActivated } from './../../hooks/useVehiclesActivated';

const PanelVehiclesOnWorking = () => {
  
  const { getVehiclesActivated } = useVehiclesActivated();

  useEffect(() => {
    const fetchData = async () => {
      await getVehiclesActivated(6);
    };

    fetchData();
  }, []); 

  const {vehicles} = useSelector((state) => state.vehiclesActivate);

  return (
    <section className='w-full section-vehicles section-vehicles-ow'>
      <div className='section-vehicles__container'>
        <h2 className='section-vehicles__title'>Vehículos de la flota</h2>

        <div className='cards-container'>
          <div className='cards-carrusel cards-carrusel_wo'>
            {vehicles.map((vehicle, index) => (
              <CardVehicleOnWorking vehicle={vehicle} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanelVehiclesOnWorking;
