import React, { useEffect, useRef } from 'react'

export default function CryptoTable() {
    const ref = useRef();
    useEffect(()=>{
        const scriptContent = {
            "width": "100%",
            "height": 490,
            "defaultColumn": "overview",
            "screener_type": "crypto_mkt",
            "displayCurrency": "USD",
            "colorTheme": "dark",
            "locale": "en"
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
        script.async = true;
        script.innerHTML = JSON.stringify(scriptContent);
        ref.current.appendChild(script);
    }, [])
    return (
        <div class="tradingview-widget-container" ref={ ref }>
        <div class="tradingview-widget-container__widget"></div>
        <div class="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/" rel="noopener" target="_blank"><span class="blue-text">Cryptocurrency Markets</span></a> by TradingView</div>

        </div>
    )
}
