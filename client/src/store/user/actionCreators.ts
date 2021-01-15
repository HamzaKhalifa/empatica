import { BEGIN_LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, SET_USER, LOGOUT } from './actions';
import axios, { AxiosResponse } from 'axios';
import IUser from './types/IUser';
import { baseUrl } from '../../config/api';
import { getOrdersRequest, setOrders } from '../orders/actionCreators';

export const loginError = (error: string) => ({
  type: LOGIN_ERROR,
  payload: error
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const beginLogin = () => ({
  type: BEGIN_LOGIN,
})

export const setUser = (user: IUser) => ({
  type: SET_USER,
  payload: user
})

export const login = () => (dispatch: any) => {
  dispatch(beginLogin());
  axios.post<any, AxiosResponse<IUser>>(`${baseUrl}login`).then(res => {
    axios.get<any, AxiosResponse<IUser>>(`${baseUrl}users/` + res.data.id).then(res => {
      dispatch(setUser(res.data));
      dispatch(loginSuccess());
      dispatch(getOrdersRequest(res.data.id));
    })
  }).catch(error => {
    console.log('error', error);
    dispatch(loginError(error.message));
  })
}

const logout = () => ({
  type: LOGOUT
})

export const logoutRequest = () => (dispatch: any) => {
  dispatch(logout());
  dispatch(setOrders([]));
}