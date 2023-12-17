import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated',
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        },
    }
});

// Configuración de persistencia para el reducer de auth
const authPersistConfig = {
    key: 'auth',
    storage: storage,
    blacklist: [], // Puedes excluir ciertos campos si es necesario
  };
  
  const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);
  
  export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;
  
  export default persistedAuthReducer;
