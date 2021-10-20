import { Types } from "../actions/types";

const initialState = {
  ordersInfo: [],
  totalPrice: 0,
};

export default function historyInfoReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_HISTORY_INFO:
      return {
        ...state,
        ordersInfo: action.payload,
        totalPrice: action.price,
      };
    default:
      return state;
  }
}
