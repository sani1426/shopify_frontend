

import { FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'
import Logo from './logo'
import ThemeToggle from '../UI/ThemeToggle'




const Topbar = () => {



  return (
    <header

      className='h-20 bg_soft  shadow-md fixed w-full z-[1000]'
    >
      <div className='container my-auto mx-auto  flex-center h-full px-4'>
        <Link className='flex items-center justify-start' href='/'>
          <Logo />
          <span className='text-3xl  text-nowrap'>Shopify</span>
        </Link>

        <div className={`w-full   bg_soft rounded-md hidden lg:flex items-center justify-center flex-grow `}>
          <input
            className='w-full rounded-md px-4 py-2'
            type='text'
            placeholder='search ....'
          />
        </div>
 
        <div className='w-full flex items-center  gap-4 justify-end'>
     

              <Link
                href='/login'
                className=' bg-transparent border-2 px-3 py-2 rounded-md text-2xl '
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
