import { Action, OrdersState, Reducer } from './types';
import { SET_ORDERS, SET_ORDER, DELETE_ORDER } from './actions';

const setOrders: Reducer = (state: OrdersState, action) => {
  return {
    ...state,
    orders: action.payload
  }
}

const setOrder: Reducer = (state: OrdersState, action) => {
  const newOrders = [...state.orders];
  newOrders.map(order => {
    if (order.id === action.payload.id) return action.payload.order;
    return order;
  })
  return {
    ...state,
    orders: newOrders
  }
}

const deleteOrder: Reducer = (state: OrdersState, action) => {
  // filter returns a new object (no need to explicitly make a new array to maintain redux's state immutability)
  const newOrders = state.orders.filter(order => order.id !== action.payload);
  console.log('new orders', newOrders);
  return {
    ...state,
    orders: newOrders
  }
} 

const actionHandler: any = {
  [SET_ORDERS]: setOrders,
  [SET_ORDER]: setOrder,
  [DELETE_ORDER]: deleteOrder
}

const initialState: OrdersState = {
  orders: [],
} 

const reducer = (state = initialState, action: Action) => {
  const handler = actionHandler[action.type];

  return handler ? handler(state, action) : state; 
}

export default reducer;