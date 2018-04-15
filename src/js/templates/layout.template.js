import React from "react"
import { Provider } from "react-redux"


import FavoriteCurrencies from "../components/favoriteCurrencies.component"
import CurrenciesList from "../components/currenciesList.component";
import Store from "../store"

export default function (props) {
    return <div className="container">
        <h1 className="title">Currency Watcher</h1>

        <h2>
            My favorites:
            <div className="actions">
                <button className="btn btn-primary add" data-toggle="collapse" data-target="#currencies">+</button>
            </div>
        </h2>
        <Provider store={Store}><FavoriteCurrencies /></Provider>

        <div id="currencies" class="collapse">
            <div className="panel">
                <Provider store={Store}><CurrenciesList /></Provider>
            </div>
        </div>

        
    </div>
}