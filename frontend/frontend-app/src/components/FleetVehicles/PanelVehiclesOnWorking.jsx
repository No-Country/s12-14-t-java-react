import { useEffect, useState } from 'react'
import CardVehicleOnWorking from './CardVehicleOnWorking'
import { getActiveVehicles } from '../../services/fetchService'
const PanelVehiclesOnWorking = () => {
  console.log(import.meta.env.VITE_API_URL)

  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    getActiveVehicles().then(response => {
      console.log('Response:')
      console.log(response.data)
      setVehicles(response.data)
    })
  }, [])

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
  )
}
export default PanelVehiclesOnWorking
