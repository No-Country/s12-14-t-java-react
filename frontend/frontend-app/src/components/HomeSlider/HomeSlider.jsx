import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './HomeSlider.css'

import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules'

export const HomeSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        cssMode={true}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true
        }}
        pagination={{
          clickable: true
        }}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        className='pt-5 pb-10 homeSwiper'
      >
        <SwiperSlide className='flex items-center justify-center py-4'>
          <div className='w-2/4'>
            <p className='text-lg font-semibold text-center text-white align-items-center md:text-xl drop-shadow-purple'>
              Seguí tus vehículos en tiempo real las 24 horas del día.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center py-4'>
          <div className='w-2/4'>
            <p className='w-full text-lg font-semibold text-center text-white align-items-center md:text-xl drop-shadow-purple'>
              Seguridad en tu mantenimiento
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center py-4'>
          <div className='w-2/4'>
            <p className='w-full text-lg font-semibold text-center text-white align-items-center md:text-xl drop-shadow-purple'>
              Estado de tus vehículos
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center py-4'>
          <div className='w-2/4'>
            <p className='w-full text-lg font-semibold text-center text-white align-items-center md:text-xl drop-shadow-purple'>
              Presupuestos mensuales
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center py-4'>
          <div className='w-2/4'>
            <p className='w-full text-lg font-semibold text-center text-white align-items-center md:text-xl drop-shadow-purple'>
              Ayuda y soporte 24 horas
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
