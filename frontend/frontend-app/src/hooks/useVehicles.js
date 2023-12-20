import { useDispatch } from 'react-redux'
import {
  startLoadingVehiclesOn,
  setVehiclesOn,
  startLoadingVehiclesOff,
  setVehiclesOff
} from '../store/vehicles/vehiclesSlice'
import { pageApi } from '../api/PageApi'
import { deleteVehicles } from '../store/vehicles/vehiclesSlice'
import Swal from 'sweetalert2'

export const useVehicles = () => {
  const dispatch = useDispatch()

  const getVehiclesActivated = async size => {
    dispatch(startLoadingVehiclesOn())

    try {
      // Asegúrate de que la ruta de la API sea correcta y acepte los parámetros adecuados
      const { data } = await pageApi.get(`/list/vehicle/getAllActive?page=0&size=${size}`)

      // Puede que desees utilizar el parámetro 'size' en alguna parte del código
      dispatch(
        setVehiclesOn({
          size: size,
          vehicles: data,
          isLoading: true
        })
      )
      console.log('vehiculos en servicio: ', data)
    } catch (error) {
      console.error('Error al llamar a la API:', error)
      // Puedes agregar acciones adicionales aquí, como mostrar un mensaje de error al usuario
    }
  }

  const getVehiclesNotWorking = async size => {
    dispatch(startLoadingVehiclesOff())

    try {
      // Asegúrate de que la ruta de la API sea correcta y acepte los parámetros adecuados
      const { data } = await pageApi.get(
        `${import.meta.env.VITE_API_URL}/list/vehicle/getAllInactive?page=0&size=${size}`
      )

      dispatch(
        setVehiclesOff({
          size: size,
          vehicles: data,
          isLoading: true
        })
      )
      console.log('vehiculos fuera de servicio: ', data)
    } catch (error) {
      console.error('Error al llamar a la API:', error)
      // Puedes agregar acciones adicionales aquí, como mostrar un mensaje de error al usuario
    }
  }
  const deleteVehicle = async id => {
    Swal.fire({
      title: '¿Estás seguro de que quieres eliminar el vehiculo?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#31429B',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        pageApi
          .delete(`${import.meta.env.VITE_API_URL}/vehicle/${id}`)
          .then(response => {
            console.log(response)
            Swal.fire({
              title: '¡Eliminado!',
              text: 'Su vehiculo ha sido eliminado.',
              icon: 'success'
            })
            dispatch(deleteVehicles(id))
          })
          .catch(err => {
            console.log(err)
            Swal.fire(`Error al eliminar el vehiculo!`)
          })
      }
    })
  }
  const deleteEmployee = async id => {
    Swal.fire({
      title: '¿Estás seguro de que quieres eliminar el empleado?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#31429B',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        pageApi
          .delete(`${import.meta.env.VITE_API_URL}/employee/deleteEmployee/${id}`)
          .then(response => {
            console.log(response)
            Swal.fire({
              title: '¡Eliminado!',
              text: 'Su empleado ha sido eliminado.',
              icon: 'success'
            })
            dispatch(deleteVehicles(id))
          })
          .catch(err => {
            console.log(err)
            Swal.fire(`Error al eliminar el vehiculo!`)
          })
      }
    })
  }

  const setMaintenanceVehicle = async id => {}

  return {
    getVehiclesActivated,
    getVehiclesNotWorking,
    deleteVehicle,
    deleteEmployee,
    setMaintenanceVehicle
  }
}
