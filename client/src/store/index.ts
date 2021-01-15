import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './user/reducer';
import ordersReducer from './orders/reducer';

import { UserState } from './user/types';
import { OrdersState } from './orders/types';

export interface IApplicationState {
  user: UserState,
  orders: OrdersState
}

const reducer = combineReducers({
  user: userReducer,
  orders: ordersReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;