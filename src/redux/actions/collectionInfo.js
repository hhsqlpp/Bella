import { Types } from "./types";

function setCollectionInfo(data, title) {
  return {
    type: Types.SET_COLLECTION_INFO,
    payload: data,
    title: title,
  };
}

export default function fetchCollectionInfo(id) {
  return function (dispatch) {
    dispatch({ type: Types.COLLECTIONS_INFO_START });
    fetch("http://codersbella.sunrisestudio.pro/product/collections/1/")
      .then((data) => data.json())
      .then((data) => {
        dispatch(setCollectionInfo(data.collection_products, data.title));
        dispatch({ type: Types.COLLECTIONS_INFO_END });
      });
  };
}
