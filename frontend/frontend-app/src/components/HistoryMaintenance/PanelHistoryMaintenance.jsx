import { useEffect, useState } from "react";
import CardHistoryMaintenance from "./CardHistoryMaintenance";
import './HistorialMantenimiento.css';
import { useSearchParams } from "react-router-dom";
import { getActiveVehicles, getInactiveVehicles, getMant } from "../../services/fetchService";
const PanelHistoryMaintenance =()=>{
    
const [mant, setMant] = useState([]);
const [loading, setLoading] = useState(false);
const [vehicles, setVehicles] = useState([])

const getMantV = (e) =>{
    setLoading(true)
    console.log(e.target.value)
    getMant(e.target.value).then((response)=>{
        console.log("Mantenimiento")
        console.log(response.data)
        setMant(response.data)
        setLoading(false)
    })
}

    useEffect(() => {
        getActiveVehicles().then(response => {
            console.log('Response:')
            console.log(response.data)
            setVehicles(response.data)
          })
    }, []);


    return (
        
        <section className={`contorno 
        mt-20 w-95% flex flex-col gap-3 justify-center items-center py-7
        md:w-full md:flex md:flex-col md:gap-3 md:justify-center md:items-center md:mt-6
        `}>
            <div className="w-full
            flex flex-col justify-center items-center gap-8">
                <h1 className="text-[22px] font-bold text-center">Historial de Mantenimiento</h1>
                {/* <h2 className="text-[18px] font-bold text-center">
                Vehículo: 
                <span className="ml-2 font-medium">{"vehiculo"}</span> </h2> */}

                <div className='relative'>
                  <label
                    htmlFor='vehicle'
                    className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[28px] pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'
                  >
                    Vehiculo*
                  </label>
                  <select
                    id='vehicle'
                    className='block w-full px-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 min-h-[56px]'
                    defaultValue={'DEFAULT'}
                    onChange={getMantV}
                  >
                    <option disabled value={'DEFAULT'}>
                      Selecciona un Vehículo
                    </option>
                    {vehicles.map((vehicle) => (
                      <option value={vehicle.id}>
                        {vehicle.brand} {vehicle.model} ({vehicle.patent})
                      </option>
                    ))}
                  </select>
                </div>



                <div className={`w-full flex flex-row flex-wrap gap-5 justify-center items-center
                 md:w-full md:flex md:flex-row md:gap-4 md:justify-center md:items-center md:flex-wrap md:p-7
                 }`}>
            {!loading ? (
              mant.map((mant, index) => (
                <CardHistoryMaintenance mant={mant} key={index} />
              ))
            ) : (
              <span className='loaderSpin'></span>
            )}

                    {/* <CardHistoryMaintenance /> 
                    <CardHistoryMaintenance /> 
                    <CardHistoryMaintenance /> 
                    <CardHistoryMaintenance /> 
                    <CardHistoryMaintenance /> 
                    <CardHistoryMaintenance /> 
                    <CardHistoryMaintenance /> 
                    <CardHistoryMaintenance />  */}

                </div>
            </div>
        </section>
    
    )
}
export default PanelHistoryMaintenance;