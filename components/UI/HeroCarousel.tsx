'use client'

import { sliderData } from '@/lib/constants'
import './component.css'

const HeroCarousel = () => {
  return (
    <div className='carousel w-[100vw] h-[100vh] overflow-hidden relative'>
      <div className='list'>
        {sliderData.map((item) => {
          return (
            <div key={item?.id} className='item absolute inset-0'>
              <img src={item?.imgSrc} alt='' className='w-full h-full object-cover' />
              <div className='content absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] transform -translate-x-[50%]'>
                <div className='author'>{item?.title}</div>
                <div className='title'>{item?.offer}</div>
                <div className='topic'>saman</div>
                <div className='des'>{item?.description}</div>
                <div className='buttons'>
                  <button className=''>{item?.buttonText1}</button>
                  <button className=''>{item?.buttonText2}</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HeroCarousel
