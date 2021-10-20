import { Types } from "./types";

function setAbout(data) {
  return {
    type: Types.SET_ABOUT,
    payload: data,
  };
}

export default function fetchAbout() {
  return function (dispatch) {
    fetch("http://codersbella.sunrisestudio.pro/info/about")
      .then((data) => data.json())
      .then((data) => {
        dispatch(setAbout(data));
      });
  };
}
