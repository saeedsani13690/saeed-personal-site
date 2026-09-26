import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

import './Sliderproject.css'

// import required modules
import { EffectCards } from 'swiper/modules'

export default function Sliderproject () {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src='/image/airplan.png' alt='' />{' '}
        </SwiperSlide>

        <SwiperSlide>
          <img src='/image/cofee.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/image/sherts.png' alt='' />
        </SwiperSlide>

 <SwiperSlide>  <img src='/image/drible1.webp' alt='' />  </SwiperSlide>
 <SwiperSlide>  <img src="/image/drible2.webp" alt='' />  </SwiperSlide>
 <SwiperSlide>  <img src='/image/drible3.webp' alt='' />  </SwiperSlide>
 <SwiperSlide>  <img src='/image/drible4.webp' alt='' />  </SwiperSlide>
        
      



      </Swiper>
    </>
  )
}
