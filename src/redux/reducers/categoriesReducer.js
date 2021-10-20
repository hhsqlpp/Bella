import { Types } from "../actions/types";

const initialState = {
  categories: [],
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
}
