import { combineReducers } from 'redux';
import { AUTHENTICATE, LOGOUT } from './actions';

const initialAuthState = {
  email: '',
  password: '',
  isLogin: false,
  comingFrom: null // login | signup
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        email: action.payload.email,
        password: action.payload.password,
        isLogin: action.payload.isLogin,
        comingFrom: action.payload.comingFrom
      };
    case LOGOUT:
      return initialAuthState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
