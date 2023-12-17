import { configureStore } from '@reduxjs/toolkit';
import  persistedAuthReducer  from './auth/authSlice';
import persistedVehiclesReducer from './vehicles/vehiclesActivedSlice';
// import { vehiclesActivedSlice } from '../vehicles/vehiclesActivedSlice.js';
import { persistStore } from 'redux-persist';

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        vehiclesActivatedSlice : persistedVehiclesReducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
export const persistor = persistStore(store);