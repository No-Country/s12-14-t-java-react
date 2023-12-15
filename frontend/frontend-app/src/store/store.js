import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { vehiclesActivatedSlice } from './vehicles/vehiclesActivedSlice';
export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        vehiclesActived: vehiclesActivatedSlice.reducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})