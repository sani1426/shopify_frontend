import { nav_Item } from "@/lib/data"
import Link from "next/link"

const NavigationMenu = () => {
  return (
    <header className=' bg_soft  shadow-md hidden lg:block w-full z-[1000] fixed top-20'>
    <div className='container my-auto mx-auto flex items-center gap-8 lg:gap-12   px-4'>
    {
        nav_Item.map(item => (
            <Link className="py-3 px-4 " key={item?.id} href={item?.href}>
                {item?.label}
            </Link>
        ))
    }
    </div>
  </header>
  )
}

export default NavigationMenu