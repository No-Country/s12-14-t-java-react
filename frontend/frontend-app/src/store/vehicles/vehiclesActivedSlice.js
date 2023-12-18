import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const vehiclesActivatedSlice = createSlice({
  name: 'vehiclesActivate',
  initialState: {
    size: 0,
    vehicles: [],
    isLoading: false     
  },
  reducers: {
    startLoadingVehiclesActivated: (state, )=>{
      console.log("Ingresado isLoading al store");
      state.isLoading=true;
    },
    setVehiclesActivated: (state, {payload})=>{
      console.log("ingresando objeto al estado: ")
      console.log("payload: ", payload);
      state.size = payload.size;
      state.isLoading = payload.isLoading;
      state.vehicles = payload.vehicles;
     }
  }
})

// Configuración de persistencia para el reducer de auth
const vehiclesSlicePersistConfig = {
  key: 'vehiclesActivate',
  storage: storage,
  blacklist: [], // Puedes excluir ciertos campos si es necesario
};

const persistedVehiclesReducer = persistReducer(vehiclesSlicePersistConfig, vehiclesActivatedSlice.reducer);

export const { startLoadingVehiclesActivated , setVehiclesActivated} = vehiclesActivatedSlice.actions

export default persistedVehiclesReducer;
