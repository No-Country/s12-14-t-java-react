import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { vehiclesActivedSlice } from './vehicles/vehiclesActivedSlice';
export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        vehiclesActived: vehiclesActivedSlice.reducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})