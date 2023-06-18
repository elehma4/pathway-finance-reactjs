import React from 'react'

export const Indices = (props) => {
  return (
    <>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold' id='GSPC' onClick={() => props.onSelectSymbol('GSPC')}><img src="/assets/s-and-p-500.png" alt='S&P 500' className='w-10 rounded-full mr-3' />S&P 500</button>
    </div>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold' id='NDX' onClick={() => props.onSelectSymbol('NDX')}><img src="/assets/nasdaq-100.png" alt='Nasdaq 100' className='w-10 rounded-full mr-3' />Nasdaq 100</button>
    </div>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold' id='DXY' onClick={() => props.onSelectSymbol('DXY')}><img src="/assets/u-s-dollar-index.png" alt='US Dollar' className='w-10 rounded-full mr-3'/>U.S. Dollar</button>
    </div>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold' id='DJI' onClick={() => props.onSelectSymbol('DJI')}><img src="/assets/dow-30.png" alt='US Dollar' className='w-10 rounded-full mr-3' />DOW 30</button>
    </div>
    </>
  )
}
