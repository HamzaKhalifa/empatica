import { SET_ORDERS, SET_ORDER, DELETE_ORDER } from './actions';
import axios, { AxiosResponse } from 'axios';
import IOrder from './types/IOrder';
import { baseUrl } from '../../config/api';
import { IApplicationState } from '../index';

export const setOrders = (orders: IOrder[]) => ({
  type: SET_ORDERS,
  payload: orders
})

export const getOrdersRequest = (userId: number) => (dispatch: any, state: IApplicationState) => {
  axios.get<any, AxiosResponse<any>>(`${baseUrl}users/${userId}/orders`)
    .then(response => {
      dispatch(setOrders(response.data.orders));
    }).catch(error => {
      dispatch(setOrders([]));
    });
}

const setOrder = (order: IOrder) => ({
  type: SET_ORDER,
  payload: order
})

export const getOrderRequest = (orderId: number) => (dispatch: any, state: IApplicationState) => {
  axios.get<any, AxiosResponse<any>>(`${baseUrl}orders/${orderId}`)
    .then(response => {
      console.log(response);
      dispatch(setOrder(response.data.order));
    }).catch(error => {
      console.log('error', error);
    });
}

const deleteOrder = (orderId: number) => ({
  type: DELETE_ORDER,
  payload: orderId
})

export const deleteOrderRequest = (orderId: number) => (dispatch: any, state: IApplicationState) => {
  axios.delete<any, AxiosResponse<any>>(`${baseUrl}orders/${orderId}`)
    .then(response => {
      dispatch(deleteOrder(response.data.orderId));
    }).catch(error => {
      console.log('error', error);
    });
}