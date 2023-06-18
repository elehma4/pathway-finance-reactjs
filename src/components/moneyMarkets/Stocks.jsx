import React from 'react'

export const Stocks = (props) => {
  return (
    <>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold' id='AAPL' onClick={() => props.onSelectSymbol('AAPL')}><img src="/assets/apple.png" alt='Apple' className='w-10 rounded-full mr-3' />Apple</button>
    </div>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold' id='AMD' onClick={() => props.onSelectSymbol('AMD')}><img src="/assets/advanced-micro-devices.png" alt='Advanced Micro Devices' className='w-10 rounded-full mr-3' />AMD Inc</button>
    </div>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold' id='AMZN' onClick={() => props.onSelectSymbol('AMZN')}><img src="/assets/amazon.png" alt='Amazon' className='w-10 rounded-full mr-3' />Amazon Inc</button>
    </div>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold' id='TSLA' onClick={() => props.onSelectSymbol('TSLA')}><img src="/assets/tesla.png" alt='Tesla' className='w-10 rounded-full mr-3' />Tesla, Inc</button>
    </div>
    </>
  )
}
