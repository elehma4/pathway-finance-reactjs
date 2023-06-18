import React, {useState, useEffect, useRef} from 'react'
import { ColorType, createChart } from 'lightweight-charts'

const Charts = () => {
    const [stockChartXValues, setStockChartXValues] = useState([])
    const [stockChartYValues, setStockChartYValues] = useState([])
    const chartContainerRef = useRef();
    const initialData = stockChartXValues.map((time, index) => ({time, value: stockChartYValues[index]}));
    const data = initialData;
    const colors = {
            backgroundColor: 'white',
            lineColor: '#2962FF',
            textColor: 'black',
			areaTopColor: '#2962FF',
	    	areaBottomColor: 'rgba(41, 98, 255, 0.28)',
    }

    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth })
            };

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: colors.backgroundColor },
                    textColor: colors.textColor,
                },
                width: chartContainerRef.current.clientWidth,
                height: 300
            });
            chart.timeScale().fitContent();

            const newSeries = chart.addAreaSeries({ lineColor: colors.lineColor, topColor: colors.areaTopColor, bottomColor: colors.areaBottomColor });
            newSeries.setData(data);

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        }, [data, colors]);

        useEffect(() => {
            fetchStock();
        }, []);

    const fetchStock = () => {
        const API_KEY = 'BGUOV9YEEYOVJ6BO';
        let StockSymbol = 'AMZN'
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_CALL)
            .then(response => response.json())
            .then(data => {

                for(let key in data['Time Series (Daily)']){
                    stockChartXValuesFunction.push(key);
                    stockChartYValuesFunction.push(parseFloat(data['Time Series (Daily)'][key]['1. open']))
                }
                setStockChartXValues(stockChartXValuesFunction.reverse());
                setStockChartYValues(stockChartYValuesFunction.reverse());
            })
    };

  return (
    
        <div className='w-10/12 h-auto m-auto sm:mx-36' ref={chartContainerRef}/>
    
  )
}

export default Charts