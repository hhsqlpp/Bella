import { Types } from "./types";

function setNewsInfo(data) {
  return {
    type: Types.SET_NEWS_INFO,
    payload: data,
  };
}

export default function fetchNewsInfo(id) {
  return function (dispatch) {
    fetch("http://codersbella.sunrisestudio.pro/info/news/" + id, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        dispatch(setNewsInfo(data));
      });
  };
}
