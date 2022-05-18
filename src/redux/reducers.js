import { CHANGE_QUERY_NAME } from "./constants";

const initialState = {

    variable: "all"
}

export const setVariable = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_QUERY_NAME:
            
            return Object.assign({}, state, { variable : action.payload })
    
        default:
            
            return state;
    }
}