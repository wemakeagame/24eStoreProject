import axios from "axios";

export function fetchCurrencies() {
    return function (dispatch) {
        axios.get("http://api.nbp.pl/api/exchangerates/tables/a/?format=json").then((Response) => {
            dispatch({ type: "FETCH_CURRENCIES_FULFILLED", payload: Response.data[0].rates })
        }).catch((error) => {
            dispatch({ type: "FETCH-CURRENCIES_REJECTED", payload: error })
        })
    }
}

export function removeCurrency(currency) {
    return {
        type: "REMOVE_CURRENCY",
        payload: currency
    }
}

export function addCurrency(currency) {
    return {
        type: "Add_CURRENCY",
        payload: currency
    }
}

export function getFavoritesCurrencies() {
    return {
        type: "GET_FAVORITE_CURRENCIES"
    }
}

export function addFavoriteCurrency(currency) {
   return {
       type: "ADD_FAVORITE_CURRENCY",
       payload : currency
   }
}

export function cleanFavoriteList () {
    return  {
        type: "CLEAN_FAVORITE_LIST"
    }
}

export function removeFavoriteCurrency(currency) {
    return {
        type: "REMOVE_FAVORITE_CURRENCY",
        payload : currency
    }
}