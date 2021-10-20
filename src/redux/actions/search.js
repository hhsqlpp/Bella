import { Types } from "./types";

// export default function setSearch(data) {
//   return {
//     type: Types.SEARCH,
//     name: data,
//   };
// }

export const setSearch = (name) => ({
  type: Types.SEARCH,
  payload: name,
});

// export const fetchSearchProducts = (name) => async (dispatch) => {
//   fetch(`http://codersbella.sunrisestudio.pro/products/?name=${name}`);
// };
