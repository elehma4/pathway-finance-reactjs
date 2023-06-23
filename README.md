# Pathway Finance (React, Tailwind, & Redux)
Pathway Finance (PATH) is a front-end stock and crypto analysis application where users can analyze financial market data through charts as well as stay up to date with news related to the financial markets. Users can also enter the <b>Stock Trading Portal</b> or the <b>Crypto Trading Portal</b> for full-screen, fully interactive candle-charts, as well as save favorite stocks or crypto to their local storage. 
<br/>
### 🔗 Live Link: (link)

## <a id="tech">Technologies: 💻</a>
- <b>Javascript
- React
- Redux (RTK)
- Tailwind CSS
- <a href="https://tradingview.github.io/lightweight-charts/">Lightweight Charts by TradingView</a>
- APIs: <a class="apiLink" href="https://www.alphavantage.co/documentation/#">Alpha Vantage</a> & <a class="apiLink" href="https://twelvedata.com/docs">Twelve Data</a></b>


## <a id="status">Status: 📶</a>

PATH is in beta stage of development. This was a front-end project built by myself in 1 week.<br>Take note that the Alpha Vantage API only allows 5 calls per minute, so if you see an empty chart (or news feed) just wait a minute and refresh. Most likely, nothing is appearing due to API calls/min being exceeded. Hope you enjoy!
<br/>

## <a id="about">About PATH: 📈</a>

### <b>Home Page:</b><br>
The Main.jsx component serves as the initial interface of the Pathway Finance (PATH) application. As a stock and crypto market analysis tool, it incorporates visually striking features with a technology-driven framework. The home page showcases a gradient-enhanced title and an informative tagline, seamlessly tying into the core function of the application. The central element is an "Enter Trading Portal" button, which activates a popup window through React's useState hook, allowing users to select either the stock or crypto trading portals. This interaction represents conditional rendering in the React environment. Additionally, user-friendly features like gradient designs on popup buttons and a close functionality on the popup window aim to create an optimal user experience. The design of the home page combines user-oriented design and efficient use of technology.
<br/>

### <b>Trading Portal (Stocks):</b><br>
The <b>'TradingPortal'</b> of the Pathway Finance application provides an in-depth analysis of stock trading data through an async function, <b>'fetchStock'</b>. Utilizing the Alphavantage API, users can search any stock symbol and fetch real-time stock data based on the user-specified symbol and interval. The portal's core feature is an interactive chart that displays a candlestick representation of the chosen stock, alongside an area series for trend analysis, adapting to viewport changes through the <b>'ResizeObserver'</b>. 

Complementing this data-focused approach is a user-centric design with a gradient aesthetic, smooth animations, and contrasting colors. Users can search for specific stocks, star their favorites for easy access, and switch between different time intervals for stock data. This balance of robust data fetching, detailed chart rendering, and interactive user interface establishes the stock <b>'TradingPortal'</b> as an engaging platform suitable for varying trading strategies.

### <b>Trading Portal (Crypto):</b><br>
The <b>'TradingPortalCrypto'</b> component within the Pathway Finance application is responsible for providing a comprehensive analysis of cryptocurrency data. It uses the Alphavantage API to fetch real-time crypto prices via async functions <b>'handleSubmit'</b> and <b>'fetchCrypto'</b>, focusing on user-specified symbols. The main feature is a detailed, interactive chart that renders a candlestick representation of the cryptocurrency data, accompanied by an area series for trend analysis. This chart is adaptable to viewport changes using <b>'ResizeObserver'</b>.

The user interface, which combines a sleek gradient aesthetic with smooth animations and contrasting colors, promotes user interaction. Users can search for specific cryptocurrencies and star favorites for quicker access. The interface also handles favorites in a responsive manner, allowing for the addition and removal of cryptocurrencies from the favorites list. A blend of robust data fetching, detailed chart rendering, and an interactive user interface culminates in the <b>'TradingPortalCrypto'</b> providing a platform accommodating for various crypto trading strategies.

### <b>Markets:</b><br>
The <b>'Markets.jsx'</b> component operates as a primary interface for the application, facilitating the seamless interaction between different market sectors - Indices, Stocks, and Crypto. At its core, the component utilizes React's useState hook to manage the active market and selected symbol dynamically. The activeMarket and selectedSymbol state variables drive conditional rendering of the respective child components (Indices, Stocks, Crypto), alongside updating the trading chart with the selected symbol's data. This implementation demonstrates effective use of React's state management and conditional rendering capabilities to maintain an interactive and responsive user interface.

### <b>Charts Component:</b><br>

The <b>'Charts.jsx'</b> component integrates with Lightweight Charts and Alphavantage or Twelvedata APIs to fetch and visualize trading data for indices, stocks, and cryptocurrencies. By leveraging React's <b>'useState'</b>, <b>'useEffect'</b>, and <b>'useRef'</b> hooks, it dynamically adjusts chart data and handles window resize events for a responsive design. Data from the APIs is processed to form x and y chart values that update when changes occur in the asset type or time frame. The color object provides flexibility in styling, enabling adjustments to various chart colors, and the <b>'useEffect'</b> hook is used to initialize, update, and responsively scale the chart. The returned JSX encapsulates the chart in a div element to control its dimensions and positioning, making <b>'Charts.jsx'</b> a vital component in delivering an interactive, visually engaging trading experience to users.

### <b>Money Market Components (Indices, Stocks, Crypto):</b><br>
The <b>'Indices.jsx'</b>, <b>'Stocks.jsx'</b>, and <b>'Crypto.jsx'</b> components each render a selection of market-specific assets, allowing users to update the parent component's selected symbol. Technically, these components illustrate a critical aspect of React's data flow - lifting state up. The selected asset in each market component is propagated to the parent 'Markets' component via the onSelectSymbol function passed down as a prop. This strategy highlights a practical application of prop drilling and callback functions to manage state across components, embodying React's uni-directional data flow. The amalgamation of these components reveals efficient state management and modular component design.

### <b>News:</b><br>
The <b>'News.jsx'</b> component in the application is responsible for fetching and presenting the latest financial market and blockchain news. Utilizing React's <b>'useState'</b> and <b>'useEffect'</b> hooks, it calls Alphavantage's <b>'NEWS_SENTIMENT'</b> endpoint to retrieve current news sentiment and articles, which are stored in a state variable <b>'newsFeed'</b>. The fetched news articles are displayed in a responsive grid layout that accommodates different screen sizes, with each news card containing the article's title and banner image. News articles are clickable and direct users to the source of the information for further reading. Handling error scenarios and ensuring component responsiveness, the <b>'News.jsx'</b> component is instrumental in keeping users up-to-date with recent financial market trends and blockchain technology advancements.

### <b>Navigation Bar:</b><br>
The <b>'NavBar'</b> component serves as the primary navigation tool in the application, providing a responsive design to accommodate various device sizes. Leveraging the <b>'useState'</b> and <b>'useEffect'</b> hooks from React, it maintains state for navigation toggling and shadow effects based on the page's scroll position. For desktop navigation, it presents a fixed, horizontal navigation bar with links to the application's main sections. The navigation bar's style dynamically adjusts to cast a shadow as users scroll down, providing a visual indication of their position on the page. On smaller screens, it offers a hamburger menu that unfolds into a vertical navigation panel. The <b>'NavBar'</b> component effectively leverages React's built-in hooks and the <b>'react-scroll'</b> library to offer smooth, scroll-based navigation between sections, ensuring a user-friendly navigation experience across various device sizes.

### <b>Local Storage (Redux Toolkit):</b><br>
The <b>'favSlice'</b> created using Redux Toolkit's <b>'createSlice'</b> function is responsible for managing the state of user's favorite regular and crypto assets. The initial state comprises two empty arrays, <b>'favorites'</b> and <b>'cryptoFavorites'</b>. Four reducer functions are defined to manage this state: <b>'addFavorite'</b> and <b>'addCryptoFavorite'</b> are used to append a new favorite item to the respective list, while <b>'removeFavorite'</b> and <b>'removeCryptoFavorite'</b> find and remove a specified favorite item from its corresponding array. The <b>'createSlice'</b> method automatically generates corresponding action creators, which are then exported for use elsewhere in the application. This efficient and intuitive way of handling favorites state contributes to the overall smooth and personal user experience, allowing users to track their preferred assets effectively.

