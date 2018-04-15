import React from "react"
import { connect } from "react-redux"

import { getFavoritesCurrencies } from "../handlers/currencies.handler"

export class FavoriteCurrencies extends React.Component {
    componentWillMount () {
        this.props.dispatch(getFavoritesCurrencies());
    }

    render() {
        const mappedCurrencies = this.props.favorites.map(currency => <p>{currency}</p>);

        return <div className="currency">{mappedCurrencies}</div>
    }
}

const mapStoreToProps = function (store) {
    console.log(store);
    return {
        favorites: store.favoritesCurrencyReducer,
    };
}

export default connect(mapStoreToProps)(FavoriteCurrencies);