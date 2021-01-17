import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { login } from '../../store/user/actionCreators';
import { IApplicationState } from '../../store';
import { UserState } from '../../store/user/types';
import CustomButton from '../../components/custom-button';
import Colors from '../../theme/colors';
import withFooter from '../../hoc/with-footer';
import FloatingButton from '../../components/floating-button';

import './style.scss';

const Login: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

  const dispatch = useDispatch();
  const userState = useSelector<IApplicationState, UserState>((state: IApplicationState) => state.user)

  const handleLogin = () => dispatch(login());

  useEffect(() => {
    if (userState.user.id !== -1) props.history.push('/user-information');
  }, [userState, props.history])

  return (
    <div className='login_container'>
      <div className='login_form'>
        <CustomButton 
          backgroundColor='transparent' 
          textColor={Colors.black} 
          hoverBackgroundColor={Colors.black}
          hoverTextColor={Colors.white}
          horizontalPadding={60} 
          verticalPadding={15} 
          onClick={handleLogin}
        >Login</CustomButton>
        <br/>
        {userState.error && <span>{userState.error}</span>}
        {userState.loading && <span>Loading...</span>}
      </div>
      <FloatingButton text='Home' to='/' />
    </div>
  )
}

export default withFooter(Login);
