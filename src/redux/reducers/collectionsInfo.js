import { Types } from "../actions/types";

const initialState = {
  title: "",
  products: [],
  loading: false,
};

export default function collectionInfo(state = initialState, action) {
  switch (action.type) {
    case Types.COLLECTIONS_INFO_START:
      return {
        ...state,
        loading: true,
      };
    case Types.COLLECTIONS_INFO_END:
      return {
        ...state,
        loading: false,
      };
    case Types.SET_COLLECTION_INFO:
      return {
        ...state,
        products: action.payload,
        title: action.title,
      };
    default:
      return state;
  }
}
