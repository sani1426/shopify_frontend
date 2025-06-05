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
              <div className='content absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] transform -translate-x-[50%] pr-[30%] box-border text-[#fff] '>
                <div className='author font-bold tracking-[10px] '>{item?.title}</div>
                <div className='title font-bold text-[5em] '>{item?.offer}</div>
                <div className='topic font-bold text-[5em] text-[#f1683a]'>saman</div>
                <div className='des'>{item?.description}</div>
                <div className='buttons grid grid-cols-[repeat(2,130px)] grid-rows-[40px] gap-1 mt-5'>
                  <button className='border-none bg-[#eee] tracking-[3px] font-semibold '>{item?.buttonText1}</button>
                  <button className='tracking-[3px] font-semibold border-[1px] border-white bg-transparent text-white'>{item?.buttonText2}</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

        <div className="thumbnail absolute bottom-[50%] left-[50%] w-[max-content] z-[100] flex gap-5">
            {
                sliderData.map((_) => {
                    return(
                        <div className="w-[150px] h-[220px] flex-shrink-0 relative">
                        <img src={_?.imgSrc} alt="" className='w-full h-full object-cover rounded-[20px]' />
                        <div className="absolute bottom-[10px] left-[10px] right-[10px]">
                            <div className="font-bold">{_?.title}</div>
                            <div className="des">{_?.description}</div>
                        </div>
                    </div>
                    )
                })
            }
       
        </div>

    </div>
  )
}

export default HeroCarousel
