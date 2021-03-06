import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserState } from '../../store/user/types';
import { OrdersState } from '../../store/orders/types';
import { IApplicationState } from '../../store';
import { RouteComponentProps } from 'react-router-dom';
import OrdersList from './orders-list';
import FloatingButton from '../../components/floating-button';
import Colors from '../../theme/colors';
import CustomButton from '../../components/custom-button';
import withFooter from '../../hoc/with-footer';

import './style.scss';
import { logoutRequest } from '../../store/user/actionCreators';

const UserInformation: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const dispatch = useDispatch();
  const userState = useSelector<IApplicationState, UserState>((state: IApplicationState) => state.user);
  const ordersState = useSelector<IApplicationState, OrdersState>((state: IApplicationState) => state.orders);

  useEffect(() => {
    if (userState.user.id === -1) props.history.push('/login');
  }, [userState, props.history])

  const handleLogout = () => {
    dispatch(logoutRequest());
  }

  return (
    <div className='user_information_container'>
      <div className='user_information'>
        <h2>User Information</h2>
        <span className='user_info'>Firstname: {userState.user.firstName}</span>
        <span className='user_info'>Lastname: {userState.user.lastName}</span>
        <span className='user_info'>Email {userState.user.email}</span> 
        <OrdersList orders={ordersState.orders} />

        <CustomButton 
          backgroundColor={Colors.red}
          hoverBackgroundColor={Colors.white}
          hoverTextColor={Colors.red}
          textColor={Colors.white}
          horizontalPadding={60} 
          verticalPadding={15} 
          onClick={handleLogout}
        >Logout</CustomButton>
      </div>
      
      <FloatingButton text='Home' to='/' />
    </div>
  )
}

export default withFooter(UserInformation);
