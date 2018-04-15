import currenciesHandler from "../handlers/currencies.handler"

export function currencyReducer(
    state = {
        currencies: [{ rates: [] }],
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
            return { ...state, fetching: false, fetched: true, currencies: action.payload.currencies }
        }
    }

    return state
}

export function favoritesCurrencyReducer(state = [], action) {

    switch (action.type) {
        case "GET_FAVORITE_CURRENCIES": {
            

            return state;
        }
        case "ADD_FAVORITE_CURRENCIES": {
            return state = state.concat(action.payload);
        }
        case "REMOVE_FAVORITE_CURRENCIES": {
            let index = action.payload.index;

            //data: prevState.data.filter(i => i !== item)

            return state = [...state.slice(0, index), ...state.slice(index + 1)]
        }
    }

    return state
}