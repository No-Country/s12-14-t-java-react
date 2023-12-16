import axios from "axios";
import { pageApi } from "../api/PageApi";
export const getAllClients = async (token) => {

  console.log("Token:"+token)
  let response = await fetch('http://149.50.131.109:9896/api/v1/list/vehicle/getAllActive?page=0&size=10', {
      method: 'GET',
//        mode: 'no-cors',
//        credentials: "omit",
      cache: 'no-cache',
      headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
      }

  });
  return response.json();
}

export const getActiveVehicles = () => {

  return axios({
        method: 'get',
        url: `http://149.50.131.109:9896/api/v1/list/vehicle/getAllActive?page=0&size=10`,
        withCredentials: false,
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),

        },
      });
} 

export const postVehicle = (data) => {

  console.log("Token : " + localStorage.getItem('token'))
  console.log("Vehicle: ")
  console.log(data)

  return pageApi.post(`http://149.50.131.109:9896/api/v1/vehicle/save`, data)
} 

export const postEmployee = (data) => {

  data.photo = photo.value
  console.log("Token : " + localStorage.getItem('token'))
  console.log("Employee: ")
  console.log(data)

  return pageApi.post(`http://149.50.131.109:9896/api/v1/employee/newEmployee`, data)
} 
