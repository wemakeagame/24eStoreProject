import currenciesHandler from "../handlers/currencies.handler"

export default function reducer(
    state = {
        currencies: [{ rates: [] }],
        fetching: false,
        fetched: false,
        error: null
    }, action) {

    switch (action.type) {
        case "FETCH_CURRENCIES": {
            return { state, fetching: true }
        }
        case "FETCH_CURRENCIES_REJECTED": {
            return { state, fetching: false, error: action.payload }
        }
        case "FETCH_CURRENCIES_FULFILLED": {
            return { state, fetching: false, fetched: true, currencies: action.payload }
        }
    }

    return state
}