import { useDispatch } from "react-redux";
import { startLoadingVehiclesOn , setVehiclesOn, startLoadingVehiclesOff, setVehiclesOff} from '../store/vehicles/vehiclesSlice';
import { pageApi } from "../api/PageApi";

export const useVehicles = () => {
    const dispatch = useDispatch();

    const getVehiclesActivated = async (size) => {
        dispatch(startLoadingVehiclesOn());

        try {
            // Asegúrate de que la ruta de la API sea correcta y acepte los parámetros adecuados
            const { data } = await pageApi.get(`/list/vehicle/getAllActive?page=0&size=${size}`);
            
            // Puede que desees utilizar el parámetro 'size' en alguna parte del código
            dispatch(setVehiclesOn({
                size: size,
                vehicles: data,
                isLoading: false
            }));
            console.log("vehiculos en servicio: ", data);



        } catch (error) {
            console.error("Error al llamar a la API:", error);
            // Puedes agregar acciones adicionales aquí, como mostrar un mensaje de error al usuario
        }
    };

    const  getVehiclesNotWorking= async (size)=>{
        dispatch(startLoadingVehiclesOff());

        try {
            // Asegúrate de que la ruta de la API sea correcta y acepte los parámetros adecuados
            const { data } = await pageApi.get(`${import.meta.env.VITE_API_URL}/list/vehicle/getAllInactive?page=0&size=${size}`);
            
            dispatch(setVehiclesOff({
                size: size,
                vehicles: data,
                isLoading: false
            }));
            console.log("vehiculos fuera de servicio: ", data);



        } catch (error) {
            console.error("Error al llamar a la API:", error);
            // Puedes agregar acciones adicionales aquí, como mostrar un mensaje de error al usuario
        }
    }
    return { getVehiclesActivated, getVehiclesNotWorking };
};