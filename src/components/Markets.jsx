import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { ColorType, createChart } from 'lightweight-charts'
import { Indices } from './moneyMarkets/Indices';
import { Stocks } from './moneyMarkets/Stocks';
import { Crypto } from './moneyMarkets/Crypto';
import Charts from './Charts';

const Markets = (props) => {

  const [activeMarket, setActiveMarket] = useState('indices');

  return (
    <div className='w-full md:h-screen p-2 bg-white flex flex-col items-center justify-center sm:py-20'>

    <div className='max-w-[1240px] mt-auto md:grid grid-cols-5 gap-2'>
        <div className='col-span-5'>
            <h2 className='text-[#212121] pl-3 sm:pl-5'>Trade Live Markets</h2>
        </div>
        <div className='w-full h-auto m-auto rounded-full flex items-center justify-start pl-6 p-4 hover:scale-105 ease-in duration-300 font-normal'>
            <button className={`bg-transparent text-lg p-3 rounded-lg ${activeMarket === 'indices' ? 'shadow ease-in' : ''} hover:bg-gray-100`} onClick={() => setActiveMarket('indices')}>Indices</button>
            <button className={`bg-transparent text-lg p-3 rounded-lg ${activeMarket === 'stocks' ? 'shadow ease-in' : ''} hover:bg-gray-100`} onClick={() => setActiveMarket('stocks')}>Stocks</button>
            <button className={`bg-transparent text-lg p-3 rounded-lg ${activeMarket === 'crypto' ? 'shadow ease-in' : ''} hover:bg-gray-100`} onClick={() => setActiveMarket('crypto')}>Crypto</button>
        </div>
        <div/><div/><div/><div/>
        {activeMarket === 'indices' && <Indices />}
        {activeMarket === 'stocks' && <Stocks />}
        {activeMarket === 'crypto' && <Crypto />}

    </div>
    <Charts />

    </div>
  )
}

export default Markets