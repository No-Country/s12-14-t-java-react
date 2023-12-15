import { createSlice } from '@reduxjs/toolkit'

export const vehiclesActivedSlice = createSlice({
  name: 'vehiclesActived',
  initialState: {
    page: 0,
    vehicles: [],
    isLoading: false    
  },
  reducers: {
    
  }
})

export const { onChecking } = vehiclesActivedSlice.actions
