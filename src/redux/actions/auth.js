import axios from "axios";

import { Types } from "./types";

const url = "http://codersbella.sunrisestudio.pro";

export const load_user = (data) => ({
    type: Types.USER_LOADED_SUCCESS,
    payload: data
})

export const user_loading = () => dispatch => {
    if(localStorage.getItem('token')) {
        dispatch({
            type: Types.USER_LOADING_SUCCESS
        })
    } else {
        dispatch({
            type: Types.USER_LOADING_FAIL
        })
    }
}


export const login =
  ({ phone, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ phone, password });
    try {
      const res = await axios.post(`${url}/account/login/`, body, config);
      dispatch({
        type: Types.USER_LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: Types.USER_LOGIN_FAIL,
        payload: 'Ошибка при авторизации'
      });
    }
  };

export const register =
  ({ phone, first_name, last_name, password, password2 }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      phone,
      first_name,
      last_name,
      password,
      password2,
    });
    try {
      const res = await axios.post(`${url}/account/register/`, body, config);
      dispatch({
        type: Types.USER_REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(load_user(JSON.parse(body)))
    } catch (e) {
      dispatch({
        type: Types.USER_REGISTER_FAIL,
          payload: 'Ошибка при регистрации'
      });
    }
  };


export const setChangeProfile = (data) => dispatch => {
    dispatch({
        type: Types.USER_CHANGE_PROFILE,
        payload: data
    })
    dispatch({
        type: Types.USER_UPDATE_PROFILE
    })
}


export const logout = () => ({
  type: Types.USER_LOGOUT,
});

