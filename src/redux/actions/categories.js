import { Types } from "./types";

function setCategories(data) {
  return {
    type: Types.SET_CATEGORIES,
    payload: data,
  };
}

export default function fetchCategories() {
  return function (dispatch) {
    fetch("http://codersbella.sunrisestudio.pro/product/categories")
      .then((data) => data.json())
      .then((data) => {
        dispatch(setCategories(data.results));
      });
  };
}
