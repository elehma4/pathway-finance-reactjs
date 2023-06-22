import React from 'react'

export const Crypto = (props) => {
  return (
    <>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold' id='BTC' onClick={() => props.onSelectSymbol('BTC')}><img src="/assets/bitcoin.png" alt='Bitcoin' className='w-10 rounded-full mr-3' id='BTC' />Bitcoin</button>
    </div>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold' id='ETH' onClick={() => props.onSelectSymbol('ETH')}><img src="/assets/ethereum.png" alt='Ethereum' className='w-10 rounded-full mr-3' />Ethereum</button>
    </div>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold' id='BNB' onClick={() => props.onSelectSymbol('BNB')}><img src="/assets/BNB.png" alt='Binance' className='w-10 rounded-full mr-3' />Binance</button>
    </div>
    <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold' id='MATIC' onClick={() => props.onSelectSymbol('MATIC')} ><img src="/assets/matic.png" alt='MATIC' className='w-10 rounded-full mr-3' />Polygon</button>
    </div>
    </>
  )
}
