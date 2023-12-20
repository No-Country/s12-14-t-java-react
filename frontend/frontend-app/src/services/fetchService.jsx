import { pageApi } from '../api/PageApi'

export const getActiveVehicles = (size) => {
  return pageApi.get(`${import.meta.env.VITE_API_URL}/list/vehicle/getAllActive?page=0&size=${size}`);
}

export const getInactiveVehicles = () => {
  return pageApi.get(`${import.meta.env.VITE_API_URL}/list/vehicle/getAllInactive?page=0&size=10`)
}

export const getMant = (id) => {
  return pageApi.get(`${import.meta.env.VITE_API_URL}/reg-mant/byVehicle/${id}`)
}


export const getEmployees = () => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }
  return pageApi.get('/employee/allEmployees',config);
} 

export const deleteVehicle = data => {
  return pageApi.delete(`${import.meta.env.VITE_API_URL}/vehicle/${data.id}`)
}

export const deleteEmployee = data => {
  return pageApi.delete(`${import.meta.env.VITE_API_URL}/employee/deleteEmployee/${data.id}`)
}

export const getManTypes = () => {
  return pageApi.get(`${import.meta.env.VITE_API_URL}/man_types/allTypes`);
} 


export const postVehicle = data => {
  console.log('Token : ' + localStorage.getItem('token'))
  console.log('Vehicle: ')
  console.log(data)
  return pageApi.post(`${import.meta.env.VITE_API_URL}/vehicle/save`, data)
}

export const postNewMant = (data) => {
  console.log("Token : " + localStorage.getItem('token'))
  console.log("RegMant: ")
  console.log(data)
  return pageApi.post(`${import.meta.env.VITE_API_URL}/reg-mant`, data)
} 

// export const postEmployee = (data) => {
//   data.photo = photo.value
//   console.log("Token : " + localStorage.getItem('token'))
//   console.log("Employee: ")
//   console.log(data)
//   return pageApi.post(`${import.meta.env.VITE_API_URL}/employee/newEmployee`, data)
// }
