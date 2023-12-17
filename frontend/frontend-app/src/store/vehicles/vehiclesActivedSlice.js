import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const vehiclesActivatedSlice = createSlice({
  name: 'vehiclesActivatedSlice',
  initialState: {
    page: 0,
    vehicles: [],
    isLoading: false    
  },
  reducers: {
    startLoadingVehiclesActivated: (state, )=>{
      state.isLoading=true;
    },
    setVehiclesActivated: (state, action)=>{
      console.log(action);
      state.vehicles=action.payload;
    }
  }
})

// Configuración de persistencia para el reducer de auth
const authPersistConfig = {
  key: 'vehiclesActivatedSlice',
  storage: storage,
  blacklist: [], // Puedes excluir ciertos campos si es necesario
};

const persistedVehiclesReducer = persistReducer(authPersistConfig, vehiclesActivatedSlice.reducer);

export const { startLoadingVehiclesActivated , setVehiclesActivated} = vehiclesActivatedSlice.actions

export default persistedVehiclesReducer;
