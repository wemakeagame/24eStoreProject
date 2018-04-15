import React from "react"
import { connect } from "react-redux"
import $ from "jquery"
import bootstrap from "bootstrap"

import { fetchCurrencies, addFavoriteCurrency, removeCurrency } from "../handlers/currencies.handler"

export class CurrenciesList extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchCurrencies());
    }

    addToFavorite(currency) {
        this.props.dispatch(addFavoriteCurrency(currency));
        this.props.dispatch(removeCurrency(currency));
        console.log($('#currencies'));
        $('#currencies').collapse('hide');
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

        return <div id="currencies" className="collapse currencies">
            <div className="panel">
            <button className="btn btn-default" data-toggle="collapse" data-target="#currencies">Cancel</button>
                <div className="currency-wrapper">
                    {mappedCurrencies}
                </div>
            </div>
        </div>;
    }
}

const mapStoreToProps = function (store) {
    return {
        currencies: store.currencyReducer.currencies
    };
}

export default connect(mapStoreToProps)(CurrenciesList);