import { Types } from "./types";

export function setProduct(data) {
  return {
    type: Types.SET_PRODUCT,
    payload: data,
  };
}

export function fetchProduct() {
  return function (dispatch) {
    dispatch({ type: Types.PRODUCT_START });

    fetch("http://codersbella.sunrisestudio.pro/product")
      .then((data) => data.json())
      .then((data) => {
        dispatch(setProduct(data.results));
        dispatch({ type: Types.PRODUCT_SUCCESS });
        dispatch({ type: Types.PRODUCT_END });
      });
  };
}
