import { combineReducers } from "redux"

import {currencyReducer, favoritesCurrencyReducer} from "./currency.reducer"

export default combineReducers({currencyReducer, favoritesCurrencyReducer})