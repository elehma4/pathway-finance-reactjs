import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { ColorType, createChart } from 'lightweight-charts'

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
    <div className='w-full md:h-screen p-2 bg-white flex'>
    <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-4'>
        <h2 className='text-[#212121] col-span-3 pl-5'>Trade Live Markets</h2>
        <div className='w-full h-auto m-auto rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 col-span-1 font-normal'>
            <button className='bg-transparent text-lg hover:bg-gray-100 p-3 rounded-lg'>Indices</button>
            <button className='bg-transparent text-lg hover:bg-gray-100 p-3 rounded-lg'>Stocks</button>
            <button className='bg-transparent text-lg hover:bg-gray-100 p-3 rounded-lg'>Crypto</button>
        </div>
        <div className='w-full h-auto m-auto rounded-full flex items-center justify-between p-4 col-span-3'>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg col-span-1 hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold'><img src="/assets/s-and-p-500.png" className='w-10 rounded-full mr-2' />S&P 500 Index</button>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg col-span-1 hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold'><img src="/assets/nasdaq-100.png" className='w-10 rounded-full mr-2' />Nasdaq 100</button>
        <button className='bg-transparent text-lg hover:bg-gray-100 p-4 rounded-lg col-span-1 hover:scale-110 ease-in duration-300 w-full flex items-center justify-start mx-2 shadow-md font-semibold'><img src="/assets/u-s-dollar-index.png" className='w-10 rounded-full mr-2' />U.S. Dollar</button>
        </div>
        <div className='col-span-3' ref={chartContainerRef}/>
    </div>
    </div>
  )
}

export default Markets