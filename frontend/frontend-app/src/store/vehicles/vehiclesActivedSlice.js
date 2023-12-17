import { createSlice } from '@reduxjs/toolkit'

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

export const { startLoadingVehiclesActivated , setVehiclesActivated} = vehiclesActivatedSlice.actions
