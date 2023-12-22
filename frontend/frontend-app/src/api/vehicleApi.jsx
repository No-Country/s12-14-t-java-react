import { pageApi } from './PageApi'

export const addVehicle = async data => {
  return pageApi.post('/vehicle', data)
}
