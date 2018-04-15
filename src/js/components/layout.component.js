import React from "react"
import { connect } from "react-redux"
import bootstrap from "bootstrap"

import { fetchCurrencies } from "../handlers/currencies.handler"
import layoutTemplate from "../templates/layout.template"
import style from "../../css/all.scss"

export class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchCurrencies())
    }

    render() {
        return layoutTemplate(this.props);
    }
}

const mapStoreToProps = function (store) {
    return {
        currencies: store.currencyReducer.currencies,
    };
}

export default connect(mapStoreToProps)(Layout);