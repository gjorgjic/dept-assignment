import { findWithAttr } from '../../helpers';

export const setGrid = () => ({
    type: 'SET_GRID',
    payload: 'grid'
})

export const setList = () => ({
    type: 'SET_LIST',
    payload: 'list'
})

export const fetchCasesAsync = cases => {
    return {
        type: 'FETCH_CASES',
        payload: cases
    }
}

export const fetchFeaturedCaseAsync = featuredCase => {
    return {
        type: 'FEATURED_CASE',
        payload: featuredCase
    }
}

export const fetchCases = () => {
    
    return async function(dispatch) {
        const headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
    
        const cases = await fetch("http://localhost:4000/cases", {
                headers: headers,
            })
            .then(response => response.json())
            .then(data => {
                let standardCases = data.cases.filter(standardCase => standardCase !== data.cases[findWithAttr(data.cases, 'featured', true)])
                dispatch(fetchCasesAsync(standardCases));
                dispatch(fetchFeaturedCaseAsync(data.cases[findWithAttr(data.cases, 'featured', true)]));
            })
            .catch((e) => {
                dispatch(fetchCasesAsync({"error": e}))
            });
        return cases;
    }
}

export const fetchClientsAsync = clients => {
    return {
        type: 'GET_CLIENTS',
        payload: clients
    }
}

export const fetchClients = () => {
    return function(dispatch) {
        const headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });

         fetch("http://localhost:4000/clients", {
                headers: headers,
            })
            .then(res => res.json())
            .then(data => dispatch(fetchClientsAsync(data)));
    }
};

