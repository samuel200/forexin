import React from 'react'

export default function AccountBalanceItem({ type, ammount, imageLink }) {
    return (
        <div className="account-balance-item">
            <div>
                <h4>{ type }</h4>
                <h2>{ ammount }</h2>
            </div>
            <img src={ imageLink } alt={ type+"_image" }/>
        </div>
    )
}
