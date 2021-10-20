import { Types } from "../actions/types";

const initialState = {
  collections: [],
  loading: false,
};

export default function collectionsReducer(state = initialState, action) {
  switch (action.type) {
    case Types.COLLECTIONS_START:
      return {
        ...state,
        loading: true,
      };
    case Types.COLLECTIONS_END:
      return {
        ...state,
        loading: false,
      };
    case Types.SET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
}
