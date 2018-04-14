import React from "react"

export default function (prop) {
    const mappedCurrencies = prop[0].rates.map(currency => <p>{currency.currency}</p>);

    return <div className="currency">{mappedCurrencies}</div>
}