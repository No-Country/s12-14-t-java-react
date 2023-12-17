import axios from "axios";
import { pageApi } from "../api/PageApi";

export const getActiveVehicles = (size) => {
  return pageApi.get(`${import.meta.env.VITE_API_URL}/list/vehicle/getAllActive?page=0&size=${size}`);
} 
export const getEmployees = () => {
  return pageApi.get('http://149.50.131.109:9896/api/v1/employee/allEmployees');
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

