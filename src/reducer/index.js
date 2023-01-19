const initialState = {
    characters: [],
    detail: {}
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_CHARACTERS':
        return{
            ...state, 
            characters: action.payload.results
        }
        case 'GET_DETAIL':
            return{
                ...state, 
            detail: action.payload
        }

        default: return {...state}
    }
}

export default rootReducer;