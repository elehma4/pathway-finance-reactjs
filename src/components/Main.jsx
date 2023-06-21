import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai'

const Main = () => {
  const [showPopup, setShowPopup] = useState(false);

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
            {/* <Link to='/TradingPortal'> */}
            <button 
            className=' mt-12 py-5 px-7 rounded-full text-xl bg-gradient-to-r from-[#007BFF] to-white animate-text font-semibold hover:scale-105 ease-in duration-300'
            onClick={() => setShowPopup(true)}
            >
              Enter Trading Portal
            </button>        
            {/* </Link> */}
            {showPopup && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <div className="bg-gradient-to-r sm:bg-gradient-to-t from-[#007BFF] to-red-400 font-semibold hover:scale-105 ease-in duration-300 pt-8 pb-16 px-12 sm:pt-16 sm:pb-24 sm:px-40 rounded-lg shadow-lg relative">
                
                <AiOutlineClose 
                  className="absolute top-0 right-0 m-2 cursor-pointer" 
                  onClick={() => setShowPopup(false)} 
                />
                <Link to='/TradingPortal'>
                <button 
                  className="block w-full mt-12 py-5 px-7 rounded-full text-xl bg-gradient-to-r from-[#007BFF] to-white animate-text font-semibold hover:scale-105 ease-in duration-300" 
                  onClick={() => {
                    setShowPopup(false);
                  }}
                >
                  Trade Stocks
                </button>
                </Link>
                <button 
                  className="block w-full mt-12 py-5 px-7 rounded-full text-xl bg-gradient-to-r from-[#007BFF] to-white animate-text font-semibold hover:scale-105 ease-in duration-300" 
                  onClick={() => {
                    setShowPopup(false);
                  }}
                >
                  Trade Crypto
                </button>
              </div>
            </div>
            )}

            </div>

        </div>

    </div>
  );
}

export default Main