import React from 'react'
import AccountBalanceItem from './AccountBalanceItem'

export default function AccountBalanceSection({ authenticatedUser }) {
    const { account_balance, referral_earnings, investment_balance, investment_plan } = authenticatedUser;
    const balance = [
        {
            type: "Account Balance",
            ammount: `$${ account_balance }`,
            imageLink: require("../img/cheque.svg")
        },
        {
            type: "Investment Balance",
            ammount: `$${ investment_balance }`,
            imageLink: require("../img/cheque.svg")
        },
        {
            type: "Investment Plan",
            ammount: investment_plan ? investment_plan : "None",
            imageLink: require("../img/analysis.svg")
        },
        {
            type: "Referral Earnings",
            ammount: `$${ referral_earnings }`,
            imageLink: require("../img/cheque.svg")
        },
    ]
    return (
        <div id="account-balance-section">
            {
                balance.map(({type, ammount, imageLink})=> <AccountBalanceItem type={ type }
                                                                               ammount={ ammount }
                                                                               imageLink={ imageLink }/>)
            }
        </div>
    )
}
