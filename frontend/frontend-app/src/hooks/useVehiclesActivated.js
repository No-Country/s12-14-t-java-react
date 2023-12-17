import { useDispatch } from "react-redux"
import {startLoadingVehiclesActivated, setVehiclesActivated} from './../store/vehicles/vehiclesActivedSlice'
import { getEnvVariables } from './../helpers/getEnvVariables';
import axios from "axios";
import { pageApi } from "../api/PageApi";
export const useVehiclesActivated =()=>{
    const dispatch=useDispatch();
    const { VITE_API_URL } = getEnvVariables();
    
    const getVehicles= async (page=0)=>{
        console.log(VITE_API_URL);
        dispatch(startLoadingVehiclesActivated());
        //llamado a la api
        const resp = await pageApi.get(`/list/vehicle/getAllActive?page=0&size=4`);
        console.log(resp);
        // dispatch(setVehiclesActivated(resp));

    };
    
    return { getVehicles}
    
}

