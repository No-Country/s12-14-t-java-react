import { configureStore } from '@reduxjs/toolkit';
import  persistedAuthReducer  from './auth/authSlice';
import { vehiclesActivedSlice } from './vehicles/vehiclesActivedSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        vehiclesActived: vehiclesActivedSlice.reducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
export const persistor = persistStore(store);