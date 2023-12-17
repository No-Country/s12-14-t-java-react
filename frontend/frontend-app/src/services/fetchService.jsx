import axios from "axios";
import { pageApi } from "../api/PageApi";

export const getActiveVehicles = () => {
  return pageApi.get('http://149.50.131.109:9896/api/v1/list/vehicle/getAllActive?page=0&size=10');
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