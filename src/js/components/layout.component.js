import React from "react"
import { connect } from "react-redux"

import { fetchCurrencies } from "../handlers/currencies.handler"
import currenciesTemplate from "../templates/currencies.template"

class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchCurrencies())
    }

    render() {
        console.log(this.props);
        return currenciesTemplate(this.props.currencies);
    }
}

const mapStoreToProps = function (store) {
    return {
        currencies: store.currency.currencies,
    };
}

export default connect(mapStoreToProps)(Layout);