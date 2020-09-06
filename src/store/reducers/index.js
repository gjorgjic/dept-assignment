import { combineReducers } from 'redux';

function layoutReducer(state = 'grid', action) {
    switch (action.type) {
        case 'SET_GRID':
            return action.payload
        case 'SET_LIST':
            return action.payload
        default:
            return state
    }
}

function casesReducer(state = { loading: true }, action) {
    switch (action.type) {
        case 'FETCH_CASES':
            return {
                loading: false,
                cases: action.payload
            }
        default:
            return state
    }
}

function featuredCaseReducer(state = { loading: true }, action) {
    switch (action.type) {
        case 'FEATURED_CASE':
            return {
                loading: false,
                featuredCase: action.payload 
            }
        default:
            return state
        }
}

function clientsReducer(state = { loading: true }, action) {
    switch (action.type) {
        case 'GET_CLIENTS':
            return {
                loading: false,
                clients: action.payload 
            }
        default:
            return state
        }
}

export default combineReducers({layoutReducer, casesReducer, featuredCaseReducer, clientsReducer})