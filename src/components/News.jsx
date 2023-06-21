import React, {useState, useEffect} from 'react'

function News() {

    const [newsFeed, setNewsFeed] = useState([])

    const fetchNews = () => {
        const API_KEY = process.env.REACT_APP_API_KEY;

        let API_CALL = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=blockchain&topics=financial_markets&apikey=${API_KEY}`

        fetch(API_CALL)
            .then((response) => response.json())
            .then((data) => {
                setNewsFeed(data.feed);
            })
            .catch((error) => {
              console.error('An error occurred:', error);
          });
    }

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div id='News' className='w-full lg:h-screen p-2 bg-white'>
          <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#2962FF]'>Technology</p>
            <h2 className='py-4'>Market News</h2>
            {/* <p className='text-xl text-[#2962FF] pb-2'>Overall Sentiment: </p> */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {newsFeed && newsFeed.slice(0, 12).map((news) => (
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' key={news.id}>
                  <div className='grid grid-cols-3 justify-center items-center'>
                    <div className='m-auto'>
                      <img src={news.banner_image} className='w-20' alt='/' />
                    </div>
                    <div className='flex flex-col col-span-2 items-center justify-center'>
                      <a href={news.url} className='font-semibold'>{news.title.slice(0, 77)}{news.title.length > 77 ? '...' : ''}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default News