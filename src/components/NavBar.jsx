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
          {/* Computer Nav: */}
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
            {/* End Computer Nav */}

          {/* Mobile Nav: */}
          <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 text-white' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#212121] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
              <div>
                <div className='flex w-full items-center justify-between'>
                  <img src="/assets/path-logo-white1.png" alt="/" width='129' height='37' />
                  <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                    <AiOutlineClose />
                  </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                  <p className='w-[85%] md:w-[90%] py-4'>Your Financial Compass.</p>
                </div>
              </div>
              <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                  <Link onClick={()=> setNav(false)} to='main' smooth={true} duration={500}>
                  <li className='py-4 text-base'>Home</li>
                  </Link>
                  <Link onClick={()=> setNav(false)} to='markets' smooth={true} duration={500}>
                  <li className='py-4 text-base'>Markets</li>
                  </Link>
                  <Link onClick={()=> setNav(false)} to='news' smooth={true} duration={500}>
                  <li className='py-4 text-base'>News</li>
                  </Link>
                </ul>
                <div className='pb-10 fixed bottom-0'>
                  <p className='uppercase tracking-widest'>
                    Built for pioneers.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          {/* End Mobile Nav */}

        </div>
      )
}


export default NavBar