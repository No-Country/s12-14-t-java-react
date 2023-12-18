import { useDispatch } from "react-redux"
import {startLoadingVehiclesActivated, setVehiclesActivated} from './../store/vehicles/vehiclesActivedSlice'
import { getEnvVariables } from './../helpers/getEnvVariables';
import { getActiveVehicles } from "../services/fetchService";
export const useVehiclesActivated =()=>{
    const dispatch=useDispatch();
    const { VITE_API_URL } = getEnvVariables();
    
    const getVehiclesActivated= async (size)=>{
        console.log(VITE_API_URL);
        dispatch(startLoadingVehiclesActivated());
        //llamado a la api
        try{
            getActiveVehicles(size).then(response => {
                console.log( "respuesta: ", response.data);
                console.log( "mi objeto a ingresar al store:", { page: size,
                    vehicles:response.data, isLoading:false})
                    dispatch(setVehiclesActivated({ size: size,
                    vehicles:response.data, isLoading:false}));
                });
        }catch(error){
            console.log("error en llamar a la api:", error);
        }


    };
    
    return { getVehiclesActivated}
    
}

