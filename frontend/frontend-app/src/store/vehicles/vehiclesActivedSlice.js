import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const vehiclesActivatedSlice = createSlice({
  name: 'vehiclesActivatedSlice',
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
    setVehiclesActivated: (state, action)=>{
      console.log("ingresando objeto al estado: ")
      console.log("payload: ", action.payload);
      state.page = action.payload.size;
      state.isLoading = action.payload.isLoading;
      state.vehicles = action.payload.vehicles;
     }
  }
})

// Configuración de persistencia para el reducer de auth
const vehiclesActivatedSlicePersistConfig = {
  key: 'vehiclesActivatedSlice',
  storage: storage,
  blacklist: [], // Puedes excluir ciertos campos si es necesario
};

const persistedVehiclesReducer = persistReducer(vehiclesActivatedSlicePersistConfig, vehiclesActivatedSlice.reducer);

export const { startLoadingVehiclesActivated , setVehiclesActivated} = vehiclesActivatedSlice.actions

export default persistedVehiclesReducer;
