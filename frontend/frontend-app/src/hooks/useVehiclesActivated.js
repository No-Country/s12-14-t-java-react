import { useDispatch } from "react-redux";
import { startLoadingVehiclesActivated, setVehiclesActivated } from './../store/vehicles/vehiclesActivedSlice';
import { pageApi } from "../api/PageApi";

export const useVehiclesActivated = () => {
    const dispatch = useDispatch();

    const getVehiclesActivated = async (size) => {
        dispatch(startLoadingVehiclesActivated());

        try {
            // Asegúrate de que la ruta de la API sea correcta y acepte los parámetros adecuados
            const { data } = await pageApi.get(`/list/vehicle/getAllActive?page=0&size=${size}`);
            
            // Puede que desees utilizar el parámetro 'size' en alguna parte del código
            dispatch(setVehiclesActivated({
                size: size,
                vehicles: data,
                isLoading: false
            }));
            console.log(data);



        } catch (error) {
            console.error("Error al llamar a la API:", error);
            // Puedes agregar acciones adicionales aquí, como mostrar un mensaje de error al usuario
        }
    };

    return { getVehiclesActivated };
};