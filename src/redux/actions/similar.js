import { Types } from "./types";

function setSimilar(data) {
  return {
    type: Types.SET_SIMILAR,
    payload: data,
  };
}

export default function fetchSimilar(id) {
  return function (dispatch) {
    dispatch({ type: Types.SIMILAR_START });

    fetch("http://codersbella.sunrisestudio.pro/product/similar/" + id)
      .then((data) => data.json())
      .then((data) => {
        dispatch(setSimilar(data.results));
        dispatch({ type: Types.SIMILAR_END });
      });
  };
}
