import IUser from './IUser';

export type UserState = {
  user: IUser,
  error: string,
  loading: boolean,
}

export type Action = {
  type: string,
  payload: any
}

export type Reducer = (state: UserState, action: Action) => UserState