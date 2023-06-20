import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { priceData } from './priceData/priceData';
import { Link } from 'react-router-dom';

function TradingPortal() {
    // reference to the div containing the chart:
    const chartContainerRef = useRef(); 

    useEffect(() => {
        console.log(`rendering chart`);
        // chart instance:
        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { color: '#222' },
                textColor: '#DDD'
            },
            grid: {
                vertLines: { color: '#444' },
                horzLines: { color: '#444' }
            },
        })

        // convert candlestick data for use w/ a line series:
        const lineData = priceData.map(datapoint => ({
            time: datapoint.time,
            value: (datapoint.close + datapoint.open) / 2,
        }));

        // Add an area series to the chart,
        // Adding this before we add the candlestick chart
        // so that it will appear beneath the candlesticks
        const areaSeries = chart.addAreaSeries({
            lastValueVisible: false, // hide the last value marker for this series
            crosshairMarkerVisible: false, // hide the crosshair marker for this series
            lineColor: 'transparent', // hide the line
            topColor: 'rgba(56, 33, 110,0.6)',
            bottomColor: 'rgba(56, 33, 110, 0.1)',
        });
        // Set the data for the Area Series
        areaSeries.setData(lineData);

        // Create the Main Series (Candlesticks)
        // sample data w/ candlestick series:
        const mainSeries = chart.addCandlestickSeries();
        mainSeries.setData(priceData);

        // auto resize the chart:
        const resizeObserver = new ResizeObserver(entries => {
            window.requestAnimationFrame(() => {
                for (let entry of entries) {
                    const { width, height } = entry.contentRect;
                    chart.resize(width, height);
                }
            });
        });

        resizeObserver.observe(chartContainerRef.current);

        // clean up unmount
        return () => {
            if (chartContainerRef.current) {
                resizeObserver.unobserve(chartContainerRef.current);
            }
        };
    }, []);

  return (
    <>
    <div className='fixed w-full h-20 bg-[#212121] z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <div className='flex items-center' >
            <Link to='/' smooth={true} duration={500} className='cursor-pointer mr-2 sm:mr-6'>
                <img src="/assets/path-white.png" alt="/" width='87' height='37' />
            </Link>
                <h4 className='text-sm sm:text-xl mr-1 sm:mr-2 text-white'>Search Symbol:</h4>
                <input type="search" className='sm:px-2 h-8 rounded-md' />
            </div>
            <div>

            </div>
        </div>
    </div>
    <div id='TradingPortal' className='w-full h-screen'>
        <div className='p-4 w-full h-full mx-auto flex justify-center items-center text-white'>
            <div ref={chartContainerRef} className='w-full h-full' />
        </div>
    </div>
    </>
  );
}

export default TradingPortal