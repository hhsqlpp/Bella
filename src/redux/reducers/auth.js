import { Types } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: {
    first_name: "",
    last_name: "",
    phone: "",
    country: "",
    city: "",
  },
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.USER_LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case Types.USER_REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case Types.USER_CHANGE_PROFILE:
      localStorage.setItem('user', JSON.stringify(state.user))
      return {
        ...state,
        user: {
          ...state.user,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          phone: action.payload.phone,
          country: action.payload.country,
          city: action.payload.city
        }
      }
    case Types.USER_UPDATE_PROFILE:
      localStorage.setItem('user', JSON.stringify(state.user))
      return state
      localStorage.setItem('user', JSON.stringify(state.user))
    case Types.USER_LOADED_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload))
      return {
        ...state,
        user: {
          ...state.user,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          phone: action.payload.phone,
          country: '',
          city: '',
        },
        isAuthenticated: true,
      };
    case Types.USER_LOADING_SUCCESS:
      const user = JSON.parse(localStorage.getItem('user'))
      return {
        ...state,
        isAuthenticated: true,
        user: user,
      };
    case Types.USER_LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case Types.USER_REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case (Types.USER_LOADED_FAIL, Types.USER_LOGOUT):
      localStorage.removeItem("token");
      localStorage.removeItem('user')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
