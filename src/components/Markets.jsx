import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import { ColorType, createChart } from 'lightweight-charts'
import { Indices } from './moneyMarkets/Indices';
import { Stocks } from './moneyMarkets/Stocks';
import { Crypto } from './moneyMarkets/Crypto';

const Markets = (props) => {

    const initialData = [
        { time: '2018-12-22', value: 32.51 },
        { time: '2018-12-23', value: 31.11 },
        { time: '2018-12-24', value: 27.02 },
        { time: '2018-12-25', value: 27.32 },
        { time: '2018-12-26', value: 25.17 },
        { time: '2018-12-27', value: 28.89 },
        { time: '2018-12-28', value: 25.46 },
        { time: '2018-12-29', value: 23.92 },
        { time: '2018-12-30', value: 22.68 },
        { time: '2018-12-31', value: 22.67 },
        { time: '2019-01-01', value: 23.67 },
        { time: '2019-01-02', value: 24.79 },
        { time: '2019-01-03', value: 23.24 },
        { time: '2019-01-04', value: 25.87 },
        { time: '2019-01-05', value: 26.27 },
        { time: '2019-01-06', value: 26.05 },
        { time: '2019-01-07', value: 28.53 },
        { time: '2019-01-08', value: 30.17 },
        { time: '2019-01-09', value: 34.37 },
    ];

    const {
        data = initialData,
        colors: {
            backgroundColor = 'white',
            lineColor = '#2962FF',
            textColor = 'black',
			areaTopColor = '#2962FF',
			areaBottomColor = 'rgba(41, 98, 255, 0.28)',
        } = {},
    } = props;

    const chartContainerRef = useRef();

    const [activeMarket, setActiveMarket] = useState('indices');


    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth })
            };

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
                    textColor,
                },
                width: chartContainerRef.current.clientWidth,
                height: 300
            });
            chart.timeScale().fitContent();

            const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
            newSeries.setData(data);

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    );

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
    <div className='w-10/12 h-auto m-auto sm:mx-36' ref={chartContainerRef}/>

    </div>
  )
}

export default Markets