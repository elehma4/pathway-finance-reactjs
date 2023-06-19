import React, {useState, useEffect} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-scroll';

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
      const handleShadow = () => {
        if(window.scrollY >= 90){
            setShadow(true)
        } else {
            setShadow(false)
        }
      }
      window.addEventListener('scroll', handleShadow)
    }, [])
    

    return (
        <div className={shadow ? 'fixed w-full h-20 bg-[#212121] shadow-xl z-[100]' : 'fixed w-full h-20 bg-[#212121] z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link to='main' smooth={true} duration={500} className=' cursor-pointer'>
                    <img src="/assets/path-logo-white1.png" alt="/" width='147' height='37' />
                </Link>
                <div>
                    <ul className='text-white hidden md:flex'>
                        
                        <li className='ml-14 text-lg uppercase hover:border-b border-[#007BFF] hover:text-[#007BFF] cursor-pointer'>
                          <Link to='main' smooth={true} duration={500}>Home</Link>
                        </li>
                        
                        <li className='ml-14 text-lg uppercase hover:border-b border-[#007BFF] hover:text-[#007BFF] cursor-pointer'>
                          <Link to='markets' smooth={true} duration={500}>Markets</Link>
                        </li>
                        
                        <li className='ml-14 text-lg uppercase hover:border-b border-[#007BFF] hover:text-[#007BFF] cursor-pointer'>
                          <Link to='news' smooth={true} duration={500}>News</Link>
                        </li>
                        
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer text-white'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>
        </div>
      )
}


export default NavBar