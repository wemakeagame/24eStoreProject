import currenciesHandler from "../handlers/currencies.handler"

export function currencyReducer(
    state = {
        currencies: [],
        fetching: false,
        fetched: false,
        error: null
    }, action) {

    switch (action.type) {
        case "FETCH_CURRENCIES": {
            return { ...state, fetching: true }
        }
        case "FETCH_CURRENCIES_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
        }
        case "FETCH_CURRENCIES_FULFILLED": {
            return { ...state, fetching: false, fetched: true, currencies: action.payload }
        }
        case "REMOVE_CURRENCY": {
            const listCurrencies = state.currencies.filter(i => i !== action.payload)

            return { ...state, currencies: listCurrencies}
        }
        case "Add_CURRENCY": {
            return { ...state, currencies: state.currencies.concat(action.payload)}
        }
    }

    return state
}

export function favoritesCurrencyReducer(state = [], action) {

    switch (action.type) {
        case "GET_FAVORITE_CURRENCIES": {
            
            return state;
        }
        case "ADD_FAVORITE_CURRENCY": {
            return state = state.concat(action.payload);
        }
        case "REMOVE_FAVORITE_CURRENCY": {
            return state = state.filter(i => i !== action.payload)
        }
    }

    return state
}