import CardVehicleOnWorking from './CardVehicleOnWorking'
import { useSelector } from 'react-redux'
import { useVehiclesActivated} from './../../hooks/useVehiclesActivated'
const PanelVehiclesOnWorking = () => {
  console.log(import.meta.env.VITE_API_URL)

  //const [vehicles, setVehicles] = useState([])

  const {getVehiclesActivated} =useVehiclesActivated();

  getVehiclesActivated(5);
  const {isLoading,vehicles, page}=useSelector((state)=>state.vehiclesActivatedSlice);
  console.log("is loading: ", isLoading, "page: ", page)
  console.log("vehiculos del store; ", vehicles);
  // useEffect(() => {
  //   getActiveVehicles().then(response => {
  //     console.log('Response:')
  //     console.log(response.data)
  //     setVehicles(response.data)
  //   })
  // }, [])

  return (
    <section className='w-full section-vehicles section-vehicles-ow'>
      <div className='section-vehicles__container'>
        <h2 className='section-vehicles__title'>Vehículos de la flota</h2>

        <div className='cards-container'>
          <div className='cards-carrusel cards-carrusel_wo'>
            {/* {vehicles.map((vehicle, index) => (
              <CardVehicleOnWorking vehicle={vehicle} key={index} />
            ))} */}
          </div>
        </div>
      </div>
    </section>
  )
}
export default PanelVehiclesOnWorking
