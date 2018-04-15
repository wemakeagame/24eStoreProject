import React from "react"
import { connect } from "react-redux"

import { fetchCurrencies, addFavoriteCurrency, removeCurrency } from "../handlers/currencies.handler"

export class CurrenciesList extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchCurrencies());
    }

    addToFavorite(currency) {
        this.props.dispatch(addFavoriteCurrency(currency));
        this.props.dispatch(removeCurrency(currency))
    }

    renderCurrency(currency) {
        return <div className="currency-item">
            <h4>{currency.code}</h4>
            <p>{currency.currency}</p>
            <h3>{currency.mid}</h3>
            <button className="btn btn-primary" onClick={this.addToFavorite.bind(this, currency)}>Add</button>
        </div>;
    }

    render() {
        const mappedCurrencies = this.props.currencies.map(currency => this.renderCurrency(currency));

        return <div className="currency-wrapper">{mappedCurrencies}</div>;
    }
}

const mapStoreToProps = function (store) {
    return {
        currencies: store.currencyReducer.currencies
    };
}

export default connect(mapStoreToProps)(CurrenciesList);