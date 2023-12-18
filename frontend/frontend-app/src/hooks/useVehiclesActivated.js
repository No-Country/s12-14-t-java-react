import { useDispatch } from "react-redux"
import {startLoadingVehiclesActivated, setVehiclesActivated} from './../store/vehicles/vehiclesActivedSlice'

import { getActiveVehicles } from "../services/fetchService";



export const useVehiclesActivated =()=>{
  
    const dispatch = useDispatch();
    
    const getVehiclesActivated= async (size)=>{
      
        dispatch(startLoadingVehiclesActivated()); 
        
        try{
               await getActiveVehicles(size).then(response => {
                console.log( "respuesta: ", response.data);

                    setVehiclesActivated({ size: size,
                    vehicles:response.data, isLoading:false});
                });
        }catch(error){
            console.log("error en llamar a la api:", error);
        }


    };
    
    return { getVehiclesActivated}
    
}

