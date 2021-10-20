import { Types } from "../actions/types";

const intialState = {
  news: [],
};

export default function newsReducer(state = intialState, action) {
  switch (action.type) {
    case Types.SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
}
