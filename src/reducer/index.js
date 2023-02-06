const initialState = {
    characters: [],
    favoritos: [],
    detail: {}
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_CHARACTERS':
        return{
            ...state, 
            characters: action.payload,
        }
        case 'GET_DETAIL':
            return{
                ...state, 
            detail: action.payload
        }
        case 'ADD_FAVORITE':
                return{
                    ...state,
                    favoritos: state.favoritos.concat(action.payload)
                }
        case 'DELETE_FAVORITE':
            return{
                ...state,
                favoritos: state.favoritos.filter(e => e.id !== action.payload)
            }

        default: return {...state}
    }
}

export default rootReducer;