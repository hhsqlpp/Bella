import { Types } from "./types";

function setProductInfo(data) {
  return {
    type: Types.SET_PRODUCT_INFO,
    payload: data,
  };
}

export default function fetchProductInfo(id) {
  return function (dispatch) {
    fetch("http://codersbella.sunrisestudio.pro/product/" + id)
      .then((data) => data.json())
      .then((data) => {
        dispatch(setProductInfo(data));
      });
  };
}
