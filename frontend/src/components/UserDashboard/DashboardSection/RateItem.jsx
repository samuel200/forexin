import React, { useEffect, useRef } from 'react'

export default function RateItem({ scriptContent }) {
    const ref = useRef();

    useEffect(()=>{
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
        script.async = true;
        script.innerHTML = JSON.stringify(scriptContent);
        ref.current.appendChild(script);
    }, [])

    return (
        <div class="tradingview-widget-container" ref={ ref }>
          <div class="tradingview-widget-container__widget"></div>
          <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BINANCE-ETHBTC/" rel="noopener" target="_blank"><span class="blue-text">ETHBTC Rates</span></a> by TradingView</div>
        </div>
    )
}
