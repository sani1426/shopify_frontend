'use client'

import { sliderData } from '@/lib/constants'
import './component.css'

const HeroCarousel = () => {
  return (
    <div className='carousel '>
      <div className='list'>
        {sliderData.map((item) => {
          return (
            <div key={item?.id} className='item '>
              <img src={item?.imgSrc} alt='' className='' />
              <div className='content  '>
                <div className='author '>{item?.title}</div>
                <div className='title  '>{item?.offer}</div>
                <div className='topic'>saman</div>
                <div className='des'>{item?.description}</div>
                <div className='buttons'>
                  <button className='border-none bg-[#eee] tracking-[3px] font-semibold '>{item?.buttonText1}</button>
                  <button className='tracking-[3px] font-semibold border-[1px] border-white bg-transparent text-white'>{item?.buttonText2}</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

        <div className="thumbnail ">
            {
                sliderData.map((_) => {
                    return(
                        <div className="item ">
                        <img src={_?.imgSrc} alt="" className='' />
                        <div className="content ">
                            <div className=" author ">{_?.title}</div>
                            <div className="des">{_?.description}</div>
                        </div>
                    </div>
                    )
                })
            }
       
        </div>

        <div className="arrows">
            <button className='w-[40px] h-[40px] rounded-full bg-[#eee4] border-none text-[#fff] font-bold  transition-all duration-500 hover:bg-[#eee] hover:text-[#555]' id='prev'>prev</button>
            <button className='w-[40px] h-[40px] rounded-full bg-[#eee4] border-none text-[#fff] font-bold  transition-all duration-500 hover:bg-[#eee] hover:text-[#555]' id='next'>next</button>
        </div>

    </div>
  )
}

export default HeroCarousel
