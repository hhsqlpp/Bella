import { Types } from "./types";

function setNews(data) {
  return {
    type: Types.SET_NEWS,
    payload: data,
  };
}

export default function fetchNews() {
  return function (dispatch) {
    fetch("http://codersbella.sunrisestudio.pro/info/news", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        dispatch(setNews(data));
      });
  };
}
