import React from 'react';

import Ticker from './Ticker';
import Rates from './Rates';
import Chart from './Chart';
import CryptoTable from './CryptoTable';

export default function DashboardSection() {
    return (
        <div id="dashboard-section">
            <h1>Dashboard</h1>
            <Ticker />
            <Rates />
            <Chart />
            <CryptoTable />
        </div>
    )
}
