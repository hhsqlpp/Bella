import { Types } from "./types";

function getOrder(data) {
  return {
    type: Types.GET_ORDER,
    payload: data,
  };
}

function setOrder(data) {
  return {
    type: Types.SET_ORDER,
    payload: data,
  };
}

export function fetchGetOrder() {
  return function (dispatch) {
    dispatch({ type: Types.ORDER_START });
    fetch("http://codersbella.sunrisestudio.pro/order", {
      method: "GET",
      headers: {
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        dispatch(getOrder(data.results, data.info));
        dispatch({ type: Types.ORDER_END });
      });
  };
}

export function fetchDeleteOrder(id) {
  return function (dispatch) {
    fetch("http://codersbella.sunrisestudio.pro/order/delete/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    }).then(() => {
      dispatch({ type: Types.DELETE_ORDER, payload: id });
    });
  };
}

export function fetchSetOrder(order) {
  return function (dispatch) {
    fetch("http://codersbella.sunrisestudio.pro/order/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((data) => data.json())
      .then((data) => {
        dispatch(setOrder(data));
      });
  };
}
