import { Types } from "../actions/types";

const intialState = {
  newsInfo: {},
};

export default function newsInfoReducer(state = intialState, action) {
  switch (action.type) {
    case Types.SET_NEWS_INFO:
      return {
        ...state,
        newsInfo: action.payload,
      };
    default:
      return state;
  }
}
