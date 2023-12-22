import CardVehicleNotWorking from './CardVehicleNotWorking'
import { useVehicles } from '../../hooks/useVehicles';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const PanelVehiclesNotWorking = () => {
  const { getVehiclesNotWorking } = useVehicles();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await getVehiclesNotWorking(15);
    };
    setLoading(true);
    fetchData().then(()=>{setLoading(false)});
  }, []); 

  const {vehiclesOff} = useSelector((state) => state.vehicles);

  return (
    <section className='w-full mt-3 section-vehicles section-vehicles-nw'>
      <div className='section-vehicles__container '>
        <h2 className='section-vehicles__title'>Vehículos fuera de servicio</h2>
        <div className='cards-container'>
          <div className='cards-carrusel cards-carrusel_nw'>
            {!loading||vehiclesOff!=0?vehiclesOff.map((vehicle, index) => 
            (
              <CardVehicleNotWorking  vehicle={vehicle} key={index} />
            )):<span className="loaderSpin"></span>}
          </div>
        </div>
      </div>
    </section>
  )
}
export default PanelVehiclesNotWorking
