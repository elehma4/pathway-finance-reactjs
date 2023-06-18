import React from 'react'

export const Crypto = () => {
  return (
    <>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold'><img src="/assets/bitcoin.png" alt='Bitcoin' className='w-10 rounded-full mr-3' id='BTC' />Bitcoin</button>
    </div>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold'><img src="/assets/ethereum.png" alt='Ethereum' className='w-10 rounded-full mr-3' id='ETH' />Ethereum</button>
    </div>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold'><img src="/assets/BNB.png" alt='Bitcoin Dominance' className='w-10 rounded-full mr-3' id='BNB' />Binance</button>
    </div>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold'><img src="/assets/arbitrum.png" alt='Ethereum Dominance' className='w-10 rounded-full mr-3' id='ARB' />Arbitrum</button>
    </div>
    </>
  )
}