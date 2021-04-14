import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
 
const App = () => (
  <TradingViewWidget
    symbol="NASDAQ:AAPL"
    theme={Themes.DARK}
    locale="us"
    height="400"
    containerId="tradingview_78ef9"
    autosize
  />
);


export default function Chart() {
    return (
       <App />
    )
}
