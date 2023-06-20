import React from 'react'
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div id='Main' className='w-full h-screen text-center'>

        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
            <h1 className='py-4 bg-gradient-to-r bg-clip-text  text-transparent from-gradient-start to-white
            animate-text'>
            Pathway Finance
            </h1>
            <h2 className='py-4 bg-gradient-to-r bg-clip-text  text-transparent 
             from-[#007BFF] to-white
            animate-text'>
            Your Financial Compass
            </h2>
            <Link to='/TradingPortal'>
            <button className=' mt-12 py-5 px-7 rounded-full text-xl bg-gradient-to-r from-[#007BFF] to-white animate-text font-semibold hover:scale-105 ease-in duration-300'>Enter Trading Portal</button>        
            </Link>
            </div>
        </div>

    </div>
  )
}

export default Main