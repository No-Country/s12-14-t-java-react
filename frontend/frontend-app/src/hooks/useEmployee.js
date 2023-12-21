import { useDispatch } from 'react-redux'
import { setEmployees, deleteListEmployees,
    startLoadingEmployees } from '../store/employees/employeesSlice'
import { pageApi } from '../api/PageApi'
import Swal from 'sweetalert2'

export const useEmployee = () => {
  const dispatch = useDispatch()

  const getEmployees = async () => {
    dispatch(startLoadingEmployees())
   
    try {
      const { data } = await pageApi.get(`/employee/allEmployees`, config);
        console.log("obteniendo empleados de la api: ", data)
      dispatch(
        setEmployees({
          employees: data,
          isLoading: false,
        })
      )
    } catch (error) {
      console.error('Error al llamar a la API:', error)
    }
  }
  const config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }
  const deleteOneEmployee = async(id)=>{
        pageApi.delete(`${import.meta.env.VITE_API_URL}/employee/deleteEmployee/${id}`, config).then(response=>{
            console.log(`Elemento con ID ${id} eliminado con éxito.`);
        }).catch(error=>{
            console.error(`Error al eliminar el empleado con ${id}:`, error.message);
            throw error;
        })
      }
  
  const deleteSequentially= async (lista, listaEmpleadosCopia) =>{
    const errores=[];
    
    while(lista.length>0){
        const idAEliminar = lista.shift(); 
        try {
            await deleteOneEmployee(idAEliminar);
           } catch (error) {
              errores.push(error);
              console.log("Error en eliminar secuencialmente con el id:", idAEliminar, 
              "error encontrado: ", error);
          }
          await new Promise(resolve => setTimeout(resolve, 1000));
     
    }
    if (errores.length > 0) {
        Swal.fire(`Error al eliminar la lista de empleados!`)

      } else {
        Swal.fire({
            title: '¡Eliminado!',
            text: 'Sus empleados han sido eliminados de forma exitosa',
            icon: 'success'
          })
        dispatch(deleteListEmployees(listaEmpleadosCopia));
      }
}
  
  
  
  const deleteEmployees = async (listaEmpleados, listaEmpleadosCopia) => {
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
        deleteSequentially(listaEmpleados,listaEmpleadosCopia).catch(error =>{
            console.error('Error eliminando empleados:', error)
        } );
      }
    })
  }
  return {
    getEmployees,
    deleteEmployees,
  }
}
