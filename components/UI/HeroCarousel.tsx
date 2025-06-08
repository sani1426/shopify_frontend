'use client'

import { sliderData } from '@/lib/constants'
import './component.css'
import { useEffect } from 'react'
let autoRun: ReturnType<typeof setTimeout>
let runTimeOut: ReturnType<typeof setTimeout>
const HeroCarousel = () => {
  useEffect(() => {
    let nextDom = document.getElementById('next')
    let prevDom = document.getElementById('prev')

    let carouselDom = document.querySelector('.carousel')
    let SliderDom = carouselDom!.querySelector('.carousel .list')
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail')
    let thumbnailItemsDom = thumbnailBorderDom!.querySelectorAll('.item')
    let timeDom = document.querySelector('.carousel .time')

    thumbnailBorderDom?.appendChild(thumbnailItemsDom[0])
    let timeRunning = 3000
    let timeAutoNext = 7000

    nextDom!.onclick = function () {
      showSlider('next')
    }

    prevDom!.onclick = function () {
      showSlider('prev')
    }
    let runTimeOut: ReturnType<typeof setTimeout>
    let runNextAuto = setTimeout(() => {
      nextDom?.click()
    }, timeAutoNext)
    function showSlider(type: string) {
      let SliderItemsDom = SliderDom!.querySelectorAll('.carousel .list .item')
      let thumbnailItemsDom = document.querySelectorAll(
        '.carousel .thumbnail .item'
      )

      if (type === 'next') {
        SliderDom?.appendChild(SliderItemsDom[0])
        thumbnailBorderDom?.appendChild(thumbnailItemsDom[0])
        carouselDom?.classList.add('next')
      } else {
        SliderDom?.prepend(SliderItemsDom[SliderItemsDom!.length - 1])
        thumbnailBorderDom?.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        )
        carouselDom?.classList.add('prev')
      }
      clearTimeout(runTimeOut)
      runTimeOut = setTimeout(() => {
        carouselDom?.classList.remove('next')
        carouselDom?.classList.remove('prev')
      }, timeRunning)

      clearTimeout(runNextAuto)
      runNextAuto = setTimeout(() => {
        nextDom?.click()
      }, timeAutoNext)
    }
  }, [])

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
                  <button className='border-none bg-[#eee] tracking-[3px] font-semibold '>
                    {item?.buttonText1}
                  </button>
                  <button className='tracking-[3px] font-semibold border-[1px] border-white bg-transparent text-white text-nowrap'>
                    {item?.buttonText2}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className='thumbnail '>
        {sliderData.map((_) => {
          return (
            <div className='item '>
              <img src={_?.imgSrc} alt='' className='' />
              <div className='content '>
                <div className='title '>{_?.title}</div>
              </div>
            </div>
          )
        })}
      </div>

      <div className='arrows'>
        <button
          className='w-[40px] h-[40px] rounded-full bg-[#eee4] border-none text-[#fff] font-bold  transition-all duration-500 hover:bg-[#eee] hover:text-[#555]'
          id='prev'
        >
          prev
        </button>
        <button
          className='w-[40px] h-[40px] rounded-full bg-[#eee4] border-none text-[#fff] font-bold  transition-all duration-500 hover:bg-[#eee] hover:text-[#555]'
          id='next'
        >
          next
        </button>
      </div>

      <div className='time'></div>
    </div>
  )
}

export default HeroCarousel
