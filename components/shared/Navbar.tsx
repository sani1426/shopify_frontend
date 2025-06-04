import { Col, Row } from 'antd'
import Link from 'next/link'
import Logo from './logo'
import ThemeToggle from '../UI/ThemeToggle'
import { IoSearch } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => (
  <header className='h-20 bg_soft border-b-2 fixed w-full z-[1001]'>
    <Row>
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
        <Link className='flex-center ' href='/'>
          <Logo />
          <span className='text-3xl  text-nowrap'>Shopify</span>
        </Link>
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
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
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
        <div className='w-full flex items-center  gap-4'>
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
  </header>
)

export default Navbar
