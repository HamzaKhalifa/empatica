import IOrder from './IOrder';

export type OrdersState = {
  orders: IOrder[],
}

export type Action = {
  type: string,
  payload: any
}

export type Reducer = (state: OrdersState, action: Action) => OrdersState