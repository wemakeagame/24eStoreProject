import React from "react"

import currenciesTemplate from "../templates/currencies.template"
import FavoriteCurrencies from "../components/favoriteCurrencies.component"

export default function (props) {
    return <div className="container">
        <h1>Currency Watcher</h1>

        <h2>My favorites:</h2>
        <FavoriteCurrencies />

        <div className="actions">
            <button className="btn btn-primary">Add new Currency</button>
        </div>
    </div>
}