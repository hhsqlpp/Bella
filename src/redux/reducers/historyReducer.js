import { Types } from "../actions/types";

const initialState = {
  orders: [],
  date: "",
  id: 0,
};

export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_HISTORY:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        date: action.date,
        id: action.id,
      };
    default:
      return state;
  }
}
