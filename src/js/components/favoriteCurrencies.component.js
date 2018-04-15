import React from "react"
import { connect } from "react-redux"

import { getFavoritesCurrencies, removeFavoriteCurrency, addCurrency } from "../handlers/currencies.handler"

export class FavoriteCurrencies extends React.Component {
    componentWillMount () {
        this.props.dispatch(getFavoritesCurrencies());
    }

    removeFromFavorite (currency) {
        this.props.dispatch(removeFavoriteCurrency(currency));
        this.props.dispatch(addCurrency(currency));
    }

    renderCurrency(currency) {
        return <div className="currency-item">
            <h4>{currency.code}</h4>
            <p>{currency.currency}</p>
            <h3>{currency.mid}</h3>
            <button className="btn btn-danger" onClick={this.removeFromFavorite.bind(this, currency)}>Remove</button>
        </div>;
    }

    render() {
        const mappedCurrencies = this.props.favorites.map(currency => this.renderCurrency(currency));

        return <div className="currency-wrapper">{mappedCurrencies}</div>
    }
}

const mapStoreToProps = function (store) {
    return {
        favorites: store.favoritesCurrencyReducer
    };
}

export default connect(mapStoreToProps)(FavoriteCurrencies);