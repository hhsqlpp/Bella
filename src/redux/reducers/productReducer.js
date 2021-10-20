import { Types } from "../actions/types";

const initialState = {
  products: [],
  loading: false,
  error: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case Types.PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case Types.PRODUCT_END:
      return {
        ...state,
        loading: false,
      };
    case Types.PRODUCT_FAILURE:
      return {
        ...state,
        error: true,
      };
    case Types.PRODUCT_SUCCESS:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
}
