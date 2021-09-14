import UserActionTypes from './user.types';

const user = JSON.parse(localStorage.getItem("user"));

const INITIAL_STATE = user
? { isLoggedIn: true, user }
: { isLoggedIn: false, user: null };

const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case UserActionTypes.REGISTER_SUCCESS:
          return {
            ...state,
            isLoggedIn: false,
          };
        case UserActionTypes.REGISTER_FAIL:
          return {
            ...state,
            isLoggedIn: false,
          };
        case UserActionTypes.LOGIN_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
            user: payload.user,
          };
        case UserActionTypes.LOGIN_FAIL:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
        case UserActionTypes.LOGOUT:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
        default:
          return state;
      }
};

export default userReducer;