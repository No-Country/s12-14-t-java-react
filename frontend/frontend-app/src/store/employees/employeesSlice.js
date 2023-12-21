import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const employees = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
    isLoading: null
  },
  reducers: {
    startLoadingEmployees: (state, )=>{
      state.isLoading=true;
    },
    setEmployees: (state, {payload})=>{
      console.log("payload en empleados: ", payload);
      state.isLoading = payload.isLoading;
      state.employees = payload.employees;
      state.isLoading=false;
     },
     deleteListEmployees:(state, {payload})=>{
        state.employees = state.employees.filter(employee => !payload.includes(employee.id));
    }
  }
}  
)

const employeesPersistConfig = {
  key: 'employees',
  storage: storage,
  blacklist: [], // Puedes excluir ciertos campos si es necesario
};

const persistedEmployeesReducer = persistReducer(employeesPersistConfig, employees.reducer);

export const { 
  startLoadingEmployees, setEmployees, deleteListEmployees
  } = employees.actions

export default persistedEmployeesReducer;
