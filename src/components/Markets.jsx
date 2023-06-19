import React, {useState} from 'react'
import { Indices } from './moneyMarkets/Indices';
import { Stocks } from './moneyMarkets/Stocks';
import { Crypto } from './moneyMarkets/Crypto';
import Charts from './Charts';

const Markets = (props) => {

  const [activeMarket, setActiveMarket] = useState('indices');
  const [selectedSymbol, setSelectedSymbol] = useState('GSPC');

  const handleActiveMarketChange = (market) => {
    setActiveMarket(market);
    if(market === 'indices'){
        setSelectedSymbol('GSPC')
    } else if(market === 'stocks'){
        setSelectedSymbol('AAPL')
    } else if(market === 'crypto'){
        setSelectedSymbol('BTC')
    }
  }

  return (
    <div className='w-full md:h-screen p-2 bg-white flex flex-col items-center justify-center sm:py-20'>

    <div className='max-w-[1240px] mt-auto md:grid grid-cols-5 gap-2'>
        <div className='col-span-5'>
            <h2 className='text-[#212121] pl-3 sm:pl-5'>Trade Live Markets</h2>
        </div>
        <div className='w-full h-auto m-auto rounded-full flex items-center justify-start pl-6 p-4 hover:scale-105 ease-in duration-300 font-normal'>
            <button className={`bg-transparent text-lg p-3 rounded-lg ${activeMarket === 'indices' ? 'shadow ease-in' : ''} hover:bg-gray-100`} onClick={() => handleActiveMarketChange('indices')}>Indices</button>
            <button className={`bg-transparent text-lg p-3 rounded-lg ${activeMarket === 'stocks' ? 'shadow ease-in' : ''} hover:bg-gray-100`} onClick={() => handleActiveMarketChange('stocks')}>Stocks</button>
            <button className={`bg-transparent text-lg p-3 rounded-lg ${activeMarket === 'crypto' ? 'shadow ease-in' : ''} hover:bg-gray-100`} onClick={() => handleActiveMarketChange('crypto')}>Crypto</button>
        </div>
        <div/><div/><div/><div/>
        {activeMarket === 'indices' && <Indices onSelectSymbol={setSelectedSymbol} />}
        {activeMarket === 'stocks' && <Stocks onSelectSymbol={setSelectedSymbol} />}
        {activeMarket === 'crypto' && <Crypto onSelectSymbol={setSelectedSymbol} />}

    </div>
    <Charts symbol={selectedSymbol} type={activeMarket} onSelectSymbol={setSelectedSymbol} />
    <h3 className='text-[#2962FF]'>Chart: ${selectedSymbol}</h3>
    </div>
  )
}

export default Markets