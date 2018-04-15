import React from "react"
import { connect } from "react-redux"

import { fetchCurrencies } from "../handlers/currencies.handler"
import layoutTemplate from "../templates/layout.template"
import style from "../../css/all.scss"

export default class Layout extends React.Component {
    render() {
        return layoutTemplate(this.props);
    }
}