import { pageApi } from '../api/PageApi'

// export const getActiveVehicles = (size) => {
//   return pageApi.get(`${import.meta.env.VITE_API_URL}/list/vehicle/getAllActive?page=0&size=${size}`);
// }

export const getInactiveVehicles = () => {
  return pageApi.get(`${import.meta.env.VITE_API_URL}/list/vehicle/getAllInactive?page=0&size=10`)
}

export const getEmployees = () => {
  return pageApi.get('/employee/allEmployees')
}

export const deleteVehicle = data => {
  return pageApi.delete(`https://trucking-jebius.koyeb.app/api/v1/vehicle/${data.id}`)
}

export const postVehicle = data => {
  console.log('Token : ' + localStorage.getItem('token'))
  console.log('Vehicle: ')
  console.log(data)
  return pageApi.post(`${import.meta.env.VITE_API_URL}/vehicle/save`, data)
}

// export const postEmployee = (data) => {
//   data.photo = photo.value
//   console.log("Token : " + localStorage.getItem('token'))
//   console.log("Employee: ")
//   console.log(data)
//   return pageApi.post(`${import.meta.env.VITE_API_URL}/employee/newEmployee`, data)
// }
