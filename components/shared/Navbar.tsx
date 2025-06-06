import { Col, Row } from 'antd'
import Link from 'next/link'
import Logo from './logo'
import ThemeToggle from '../UI/ThemeToggle'
import { IoSearch } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => (
  <header className='bg_soft border-b-2 fixed w-full z-[1001] pr-6  mx-auto'>
 <div className=' py-3 mx-auto '>
 <Row  justify="space-around" align="middle">
      <Col span={5} >
        <Link className='flex items-center justify-start ' href='/'>
          <Logo />
          <span className='text-3xl  text-nowrap'>Shopify</span>
        </Link>
      </Col>
      <Col xs={10} lg={12}>
        <div
          className={`w-full   bg_soft rounded-md hidden lg:flex items-center `}
        >
          <input
            className='w-full rounded-e-none rounded-s-md  px-4 py-2 border-[1px]'
            type='text'
            placeholder='search in shopify ....'
          />
          <button
            type='submit'
            className='bg-yellow-500 text-black rounded-s-none rounded-e-md h-full px-3 py-2  hover:bg-yellow-300 duration-500 transition-all text-2xl'
          >
            <IoSearch />
          </button>
        </div>
      </Col>
      <Col span={5} offset={1}>
        <div className='w-full flex items-center  justify-end gap-4'>
          <Link
            href='/login'
            className=' bg-transparent border-2 px-3 py-2 rounded-md text-2xl '
          >
            <FaUserCircle />
          </Link>

          <ThemeToggle />
        </div>
      </Col>
    </Row>
 </div>
  </header>
)

export default Navbar
