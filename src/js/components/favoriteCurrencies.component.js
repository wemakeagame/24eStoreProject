import React from "react"
import { connect } from "react-redux"

import { getFavoritesCurrencies, removeFavoriteCurrency, addCurrency, cleanFavoriteList } from "../handlers/currencies.handler"

export class FavoriteCurrencies extends React.Component {
    componentWillMount() {
        this.props.dispatch(getFavoritesCurrencies());
    }

    removeFromFavorite(currency) {
        this.props.dispatch(removeFavoriteCurrency(currency));
        this.props.dispatch(addCurrency(currency));
    }

    cleanFavoriteList() {
        this.props.dispatch(cleanFavoriteList());
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
        let mappedCurrencies = this.props.favorites.map(currency => this.renderCurrency(currency));
        let content = <div>
                <button className="btn btn-danger btn-clean-list" onClick={this.cleanFavoriteList.bind(this)}>Clean favorites</button>
                <div className="currency-wrapper">
                    {mappedCurrencies}
                </div>
            </div>;
        let template = mappedCurrencies.length > 0 ? content : null;

        return template;
    }
}

const mapStoreToProps = function (store) {
    return {
        favorites: store.favoritesCurrencyReducer
    };
}

export default connect(mapStoreToProps)(FavoriteCurrencies);