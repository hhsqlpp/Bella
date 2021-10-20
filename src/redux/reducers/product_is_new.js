import {Types} from "../actions/types";

const initialState = {
    data:{
        results: []
    },
    error:null,
    loading:false,
}

const productIsNew = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_PRODUCT_IS_NEW_SUCCESS:
            return {
                ...state,
                loading: true,
                data: action.payload
            }
        case Types.SET_PRODUCT_IS_NEW_FAIL:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            }
        default:
            return state
    }
}

export default productIsNew