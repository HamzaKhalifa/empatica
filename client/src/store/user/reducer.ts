import { Action, UserState, Reducer } from './types';
import { BEGIN_LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, SET_USER, LOGOUT } from './actions';

const beginLogin: Reducer = (state: UserState) => {
  return {
    ...state,
    error: '',
    loading: true
  }
}

const loginError: Reducer = (state: UserState, action: Action) => {
  return {
    ...state,
    error: action.payload,
    loading: false,
  }
}
const loginSuccess: Reducer = (state: UserState) => {
  return {
    ...state,
    error: '',
    loading: false
  }
}

const setUser: Reducer = (state: UserState, action: Action) => {
  return {
    ...state,
    user: action.payload
  }
}

const logout: Reducer = (state: UserState) => {
  return {
    ...initialState
  }
}

const actionHandler: any = {
  [BEGIN_LOGIN]: beginLogin,
  [LOGIN_ERROR]: loginError,
  [LOGIN_SUCCESS]: loginSuccess,
  [SET_USER]: setUser,
  [LOGOUT]: logout
}

const initialState: UserState = {
  user: {
    id: -1,
    firstName: '',
    lastName: '',
    email: ''
  },
  error: '',
  loading: false,
} 

const reducer = (state = initialState, action: Action) => {
  const handler = actionHandler[action.type];

  return handler ? handler(state, action) : state; 
}

export default reducer;