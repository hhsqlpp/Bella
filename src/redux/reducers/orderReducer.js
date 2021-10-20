import { Types } from "../actions/types";

const intialState = {
  products: [],
  loading: false,
};

export default function orderReducer(state = intialState, action) {
  switch (action.type) {
    case Types.GET_ORDER:
      return {
        ...state,
        products: action.payload,
      };
    case Types.SET_ORDER:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case Types.ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case Types.ORDER_END:
      return {
        ...state,
        loading: false,
      };
    case Types.DELETE_ORDER:
      return {
        ...state,
        products: state.products.filter((item) => item.id === action.payload),
      };
    default:
      return state;
  }
}
