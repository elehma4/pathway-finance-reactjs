import React, {useState, useEffect, useRef} from 'react'
import { ColorType, createChart } from 'lightweight-charts'

const Charts = ({ symbol, type, onSelectSymbol }) => {
    const chartContainerRef = useRef();
    const [stockChartXValues, setStockChartXValues] = useState([])
    const [stockChartYValues, setStockChartYValues] = useState([])
    const colors = {
            backgroundColor: 'white',
            lineColor: '#2962FF',
            textColor: 'black',
			areaTopColor: '#2962FF',
	    	areaBottomColor: 'rgba(41, 98, 255, 0.28)',
    }

    const fetchStock = () => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const API_KEY_INDICES = process.env.REACT_APP_API_KEY_INDICES;
        let API_CALL;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        switch(type){
            case 'indices':
                API_CALL = `https://api.twelvedata.com/time_series?apikey=${API_KEY_INDICES}&interval=1day&symbol=${symbol}&format=JSON&type=index&outputsize=252`;
                break;
            case 'stocks': 
                API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=${API_KEY}`;
                break;
            case 'crypto':
                API_CALL = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${symbol}&market=USD&apikey=${API_KEY}`;
                break;
            default:
                console.log("Unknown asset type");
                return;
        }

        fetch(API_CALL)
            .then((response) => response.json())
            .then((data) => {
                if( type === 'indices'){
                    for(let value of data.values){
                        stockChartXValuesFunction.push(value.datetime);
                        stockChartYValuesFunction.push(parseFloat(value.close));
                    }
                } else if( type === 'stocks' ) {
                    const timeSeries = data['Time Series (Daily)'] || {};
                    let tradingDays = 0;
                    for(let key in timeSeries){
                        if(tradingDays >= 252){
                            break;
                        }
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(parseFloat(timeSeries[key]['4. close']))
                        tradingDays++;
                    }
                } else if( type === 'crypto' ){
                    const timeSeries = data['Time Series (Digital Currency Daily)'] || {};
                    let tradingDays = 0;
                    for(let key in timeSeries){
                        if(tradingDays >= 252){
                            break;
                        }
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(parseFloat(timeSeries[key]['4b. close (USD)']));
                        tradingDays++;
                    }
                }
                setStockChartXValues(stockChartXValuesFunction.reverse());
                setStockChartYValues(stockChartYValuesFunction.reverse());
            })
            .catch((error) => {
                console.log(`Error fetching stock data: ${error}`);
            })
    };

    
    useEffect(() => {
        fetchStock();
    }, [symbol, type]);

    useEffect(
        () => {
            const initialData = stockChartXValues.map((time, index) => ({ time, value: stockChartYValues[index] }));
            const data = initialData;

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
        }, [stockChartXValues, stockChartYValues, colors]);

  return (
    
        <div className='w-10/12 h-auto m-auto sm:mx-36' ref={chartContainerRef}/>
    
  )
}

export default Charts