import { Types } from "../actions/types";

const intialState = {
  productInfo: {},
};

export default function productInfoReducer(state = intialState, action) {
  switch (action.type) {
    case Types.SET_PRODUCT_INFO:
      return {
        ...state,
        productInfo: action.payload,
      };
    default:
      return state;
  }
}
