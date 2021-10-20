import {Types} from "../actions/types";

const initialState = {
    data: {
        results: []
    },
    loading: false,
    error: null
}

const productIsHit = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_PRODUCT_IS_HIT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: true,
                error: null
            }
        case Types.SET_PRODUCT_IS_HIT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default productIsHit
