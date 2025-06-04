

import { FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'
import Logo from './logo'
import ThemeToggle from '../UI/ThemeToggle'
import { IoSearch } from "react-icons/io5";




const Topbar = () => {



  return (
    <header

      className='h-20 bg_soft  shadow-md fixed w-full z-[1000]'
    >
      <div className='container my-auto mx-auto flex-between h-full gap-8 lg:gap-12   px-4'>
        <Link className='flex-center ' href='/'>
          <Logo />
          <span className='text-3xl  text-nowrap'>Shopify</span>
        </Link>

        <div className={`w-full   bg_soft rounded-md hidden lg:flex items-center justify-center flex-grow `}>
          <input
            className='w-full rounded-e-none rounded-s-md  px-4 py-2'
            type='text'
            placeholder='search ....'
          />
            <button
        type='submit'
        className='bg-yellow-500 text-black rounded-s-none rounded-e-md h-full px-3 py-2  hover:bg-yellow-300 duration-500 transition-all text-2xl'
      >
        <IoSearch />
      </button>
        </div>
 
        <div className='w-full flex items-center justify-end  gap-4'>
     

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
