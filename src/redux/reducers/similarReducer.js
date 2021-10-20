import { Types } from "../actions/types";

const initialState = {
  products: [],
  loading: false,
};

export default function similarProducts(state = initialState, action) {
  switch (action.type) {
    case Types.SET_SIMILAR:
      return {
        ...state,
        products: action.payload,
      };
    case Types.SIMILAR_START:
      return {
        ...state,
        loading: true,
      };
    case Types.SIMILAR_END:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
