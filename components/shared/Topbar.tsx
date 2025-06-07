import Link from 'next/link'
import '../UI/component.css'

const Topbar = () => {
  return (
    <header>
      <Link className='brand' href='/'>
        Shopify
      </Link>
      <div className='navigation'>
        <div className="navigation-items">
        <Link href='/'>Home</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Explore</Link>
        <Link href='/'>Gallery</Link>
        <Link href='/'>Contact</Link>

        </div>
      </div>
    </header>
  )
}

export default Topbar
