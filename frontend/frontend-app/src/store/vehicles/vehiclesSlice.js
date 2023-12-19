import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const vehicles = createSlice({
  name: 'vehicles',
  initialState: {
    size:0,
    sizeOn: 0,
    sizeOff:0,
    vehicles: [],
    vehiclesOn: [],
    vehiclesOff:[],
    isLoadingVOff: false,
    isLoadingVOn:false,  
    isLoading: false,   
  },
  reducers: {
    startLoadingVehiclesOn: (state, )=>{
      console.log("Ingresado isLoading al store");
      state.isLoadingVOn=true;
    },
    setVehiclesOn: (state, {payload})=>{
      console.log("ingresando al estado VOn: ")
      console.log("payload: ", payload);
      state.sizeOn = payload.size;
      state.isLoadingVOn = payload.isLoading;
      state.vehiclesOn = payload.vehicles;
     },
     deleteVehicleOn:(state, {payload})=>{
      return state.vehiclesOn.filter((vehicleOn)=>vehicleOn.id!=payload);
    },
    startLoadingVehiclesOff: (state, )=>{
      console.log("Ingresado isLoading al store");
      state.isLoadingVOff=false;
    },
    setVehiclesOff: (state, {payload})=>{
      console.log("ingresando al estado VOff: ")
      console.log("payload: ", payload);
      state.sizeOff = payload.size;
      state.isLoadingVOff = payload.isLoading;
      state.vehiclesOff = payload.vehicles;
     },
     startLoadingVehicles: (state, )=>{
      console.log("Ingresado isLoading al store");
      state.isLoadingVOff=false;
    },
    setVehicles: (state, {payload})=>{
      console.log("ingresando todos los vehiculos al store: ")
      console.log("payload: ", payload);
      state.size = payload.size;
      state.isLoading = payload.isLoading;
      state.vehicles = payload.vehicles;
     },
    deleteVehicles:(state, {payload})=>{
      state.vehicles= state.vehicles.filter((vehicle)=>vehicle.id!=payload);
      state.vehiclesOn= state.vehiclesOn.filter((vehicle)=>vehicle.id!=payload);
      state.vehiclesOff= state.vehiclesOff.filter((vehicle)=>vehicle.id!=payload);

    }
  }
}  
)

// Configuración de persistencia para el reducer de auth
const vehiclesPersistConfig = {
  key: 'vehicles',
  storage: storage,
  blacklist: [], // Puedes excluir ciertos campos si es necesario
};

const persistedVehiclesReducer = persistReducer(vehiclesPersistConfig, vehicles.reducer);

export const { 
  startLoadingVehiclesOn , setVehiclesOn,
  startLoadingVehiclesOff, setVehiclesOff,
  startLoadingVehicles, setVehicles, deleteVehicles
  } = vehicles.actions

export default persistedVehiclesReducer;
