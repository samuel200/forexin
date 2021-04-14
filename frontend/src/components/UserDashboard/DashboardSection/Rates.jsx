import React, { Fragment } from 'react'
import RateItem from './RateItem'

export default function Rates() {
    const rates = [
      {
        "symbol": "FX:EURUSD",
        "width": "350",
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": "en"
      },
      {
        "symbol": "BITSTAMP:BTCUSD",
        "width": "350",
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": "en"
      },
      {
        "symbol": "BINANCE:ETHBTC",
        "width": "350",
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": "en"
      }
    ]
    return (
      <Fragment>
        <section id="rate-section" className="hide-on-large-only" style={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-evenly", 
          alignItems: "center"
        }}>
          {
            rates.map( rate => <RateItem scriptContent={ rate } />)
          }
        </section>
        <section id="rate-section" className="hide-on-med-and-down">
          {
            rates.map( rate => <RateItem scriptContent={ rate } />)
          }
        </section>
      </Fragment>
    )
}
