import { Types } from "../actions/types";

const intialState = {
  about: {},
};

export default function aboutReducer(state = intialState, action) {
  switch (action.type) {
    case Types.SET_ABOUT:
      return {
        ...state,
        about: action.payload,
      };

    default:
      return state;
  }
}
