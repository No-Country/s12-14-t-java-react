import { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

export const SimpleDatePicker = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  })

  const handleValueChange = newValue => {
    // console.log('newValue:', newValue.startDate)
    setValue(newValue.startDate)
  }

  return (
    <Datepicker
      primaryColor={'blue'}
      asSingle={true}
      useRange={false}
      value={value}
      onChange={handleValueChange}
      i18n={'es'}
      displayFormat={'DD/MM/YYYY'}
    />
  )
}
