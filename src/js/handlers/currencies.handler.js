import axios from "axios";

export function model() {
    return {
        currencies: [],
        fetching: false,
        fetched: false,
        error: null
    }
}

export function fetchCurrencies() {
    return function (dispatch) {
        axios.get("http://api.nbp.pl/api/exchangerates/tables/a/?format=json").then((Response) => {
            dispatch({ type: "FETCH_CURRENCIES_FULFILLED", payload: Response.data })
        }).catch((error) => {
            dispatch({ type: "FETCH-CURRENCIES_REJECTED", payload: error })
        })
    }
}

export function addFavoriteCurrency(currency) {
   return {
       type: "ADD_CURRENCY",
       payload : currency
   }
}

export function removeFavoriteCurrency(currency) {
    return {
        type: "REMOVE_CURRENCY",
        payload : currency
    }
}