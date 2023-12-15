import { createSlice } from '@reduxjs/toolkit'

export const vehiclesActivedSlice = createSlice({
  name: 'vehiclesActived',
  initialState: {
    page: 0,
    vehicles: [],
    isLoading: false    
  },
  reducers: {
    startLoadingVehiclesActivated: (state, action)=>{
      state.isLoading=true;
    }
  }
})

export const { onChecking } = vehiclesActivedSlice.actions
