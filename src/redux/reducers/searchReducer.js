import { Types } from "../actions/types";

const initialState = {
  name: null,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SEARCH:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}
