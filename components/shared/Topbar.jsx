
import Logo from './logo.jsx'
import { FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants.js'
import ThemeToggle from '../UI/ThemeToggle.jsx'

const Topbar = () => {



  return (
    <header

      className='h-20 nav-class  shadow-md fixed w-full z-[1000]'
    >
      <div className='container my-auto mx-auto flex-between h-full gap-8 lg:gap-12   px-4'>
        <Link className='flex-center ' href='/'>
          <Logo w={70} h={40} />
          <span className='text-2xl text-grown-50 text-nowrap'>{APP_NAME}</span>
        </Link>

        <div className={`w-full  flex-center bg_soft rounded-md  `}>
          <input
            className='w-full rounded-md px-4 py-2'
            type='text'
            placeholder='search ....'
          />
        </div>
 
        <div className='w-full flex items-center justify-end  gap-4'>
     

              <Link
                href='/login'
                className=' bg-transparent border-2 px-3 py-2 rounded-md text-2xl md:hidden'
              >
                <FaUserCircle />
              </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Topbar
