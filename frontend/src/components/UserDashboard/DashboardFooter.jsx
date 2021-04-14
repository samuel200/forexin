import React from 'react'

export default function DashboardFooter() {
    return (
        <div id="dashboard-footer">
            © { (new Date()).getUTCFullYear() } All Rights Reserved
        </div>
    )
}
