import { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

export const SimpleDatePicker = ({ label }) => {
  const [value, setValue] = useState(new Date())

  const handleValueChange = newValue => {
    // console.log('newValue:', newValue.startDate)
    setValue(newValue)
  }

  return (
    <>
      <div className='relative w-full'>
        <Datepicker
          primaryColor={'blue'}
          asSingle={true}
          useRange={false}
          value={value}
          onChange={handleValueChange}
          i18n={'es'}
          displayFormat={'DD/MM/YYYY'}
        />
        <label className='left-3.5 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-#0d1544 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 pointer-events-none peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1'>
          {label}
        </label>
      </div>
    </>
  )
}
