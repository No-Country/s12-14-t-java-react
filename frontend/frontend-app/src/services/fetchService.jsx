import axios from "axios";
import { pageApi } from "../api/PageApi";

export const getActiveVehicles = () => {
  return pageApi.get(`${import.meta.env.VITE_API_URL}/list/vehicle/getAllActive?page=0&size=10`);
} 

export const getInactiveVehicles = () => {
  return pageApi.get(`${import.meta.env.VITE_API_URL}/list/vehicle/getAllInactive?page=0&size=10`);
} 

export const getEmployees = () => {
  return pageApi.get(`${import.meta.env.VITE_API_URL}/employee/allEmployees`);
} 

export const getManTypes = () => {
  return pageApi.get(`${import.meta.env.VITE_API_URL}/man_types/allTypes`);
} 

export const postVehicle = (data) => {
  console.log("Token : " + localStorage.getItem('token'))
  console.log("Vehicle: ")
  console.log(data)
  return pageApi.post(`${import.meta.env.VITE_API_URL}/vehicle/save`, data)
} 

export const postEmployee = (data) => {
  data.photo = photo.value
  console.log("Token : " + localStorage.getItem('token'))
  console.log("Employee: ")
  console.log(data)
  return pageApi.post(`${import.meta.env.VITE_API_URL}/employee/newEmployee`, data)
} 

export const postNewMant = (data) => {
  console.log("Token : " + localStorage.getItem('token'))
  console.log("RegMant: ")
  console.log(data)
  return pageApi.post(`${import.meta.env.VITE_API_URL}/reg-mant`, data)
} 
