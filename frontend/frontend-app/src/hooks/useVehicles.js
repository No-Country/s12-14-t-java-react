import { useDispatch } from 'react-redux'
import {
  startLoadingVehiclesOn,
  setVehiclesOn,
  startLoadingVehiclesOff,
  setVehiclesOff,
  deleteVehicles
} from '../store/vehicles/vehiclesSlice'
import { pageApi } from '../api/PageApi'
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
   
  const setMaintenanceVehicle = async info => {
    console.log("Cambiando estado de vehiculo")
    pageApi.post(`${import.meta.env.VITE_API_URL}/vehicle/inactiveVehi/${info.vehicle.id}`, {'reason':info.motivo})
    .then(response => {
      console.log(response)
      Swal.fire({
        title: '¡Mantenimiento!',
        text: 'El vehiculo ha sido puesto fuera de servicio.',
        icon: 'success'
      })
      dispatch(deleteVehicles(info.vehicle.id))
      getVehiclesNotWorking();
    })
      .catch(err => {
        console.log(err)
        Swal.fire(`Error al cambiar el estado del vehiculo!`)
      })
}

const backMaintenanceVehicle = async info => {
  console.log("Cambiando estado de vehiculo")
  pageApi.post(`${import.meta.env.VITE_API_URL}/vehicle/activeVehi/${info.vehicle.id}`)
  .then(response => {
    console.log(response)
    Swal.fire({
      title: '¡Mantenimiento!',
      text: 'El vehiculo ha vuelto al servicio.',
      icon: 'success'
    })
    dispatch(deleteVehicles(info.vehicle.id))
    getVehiclesActivated();
  })
    .catch(err => {
      console.log(err)
      Swal.fire(`Error al cambiar el estado del vehiculo!`)
    })
}


  return {
    getVehiclesActivated,
    getVehiclesNotWorking,
    deleteVehicle,
    setMaintenanceVehicle,
    backMaintenanceVehicle
  }
}
