import { useEffect, useState } from 'react'
import CardVehicleOnWorking from './CardVehicleOnWorking'
import { useSelector } from 'react-redux'
import { useVehicles } from './../../hooks/useVehicles'

const PanelVehiclesOnWorking = () => {
  const { getVehiclesActivated } = useVehicles()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      await getVehiclesActivated(15)
    }
    setLoading(true)
    fetchData().then(() => {
      setLoading(false)
    })
  }, [])

  const { vehiclesOn, isLoadingVOn } = useSelector(state => state.vehicles)

  return (
    <section className='w-full section-vehicles section-vehicles-ow'>
      <div className='section-vehicles__container'>
        <h2 className='section-vehicles__title'>Vehículos de la flota</h2>

        <div className='cards-container'>
          <div className='cards-carrusel cards-carrusel_wo'>
            {!loading||vehiclesOn.size!=0? (
              vehiclesOn.map((vehicle, index) => (
                <CardVehicleOnWorking vehicle={vehicle} key={index} />
              ))
            ) : (
              <span className='loaderSpin'></span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PanelVehiclesOnWorking
