import { Types } from "./types";

function setCollection(data) {
  return {
    type: Types.SET_COLLECTIONS,
    payload: data,
  };
}

export default function fetchCollection() {
  return function (dispatch) {
    dispatch({ type: Types.COLLECTIONS_START });
    fetch("http://codersbella.sunrisestudio.pro/product/collections/")
      .then((data) => data.json())
      .then((data) => {
        dispatch(setCollection(data.results));
        dispatch({ type: Types.COLLECTIONS_END });
      });
  };
}
