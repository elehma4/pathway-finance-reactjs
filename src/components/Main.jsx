import React from 'react'


const Main = () => {
  return (
    <div className='w-full h-screen text-center'>

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
            <button className=' mt-12 py-5 px-7 rounded-full text-xl bg-gradient-to-r from-[#007BFF] to-white animate-text font-semibold'>Enter Trading Portal</button>        

            </div>
        </div>

    </div>
  )
}

export default Main