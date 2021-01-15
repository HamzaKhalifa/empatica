import React from 'react';
import { useSelector } from 'react-redux';

import Hero from './sections/hero';
import Embrace from './sections/embrace';
import Footer from '../../common/footer';
import FloatingButton from '../../components/floating-button';

import './style.css';

import { IApplicationState } from '../../store';

const Home: React.FC = () => {
  const id = useSelector<IApplicationState, number>((state: IApplicationState) => state.user.user.id);

  return (
    <div>
      <Hero />
      <Embrace />
      <Footer />
      <FloatingButton text={id === - 1 ? 'Login' : 'Profile'} to='/login' />
    </div>
  )
}

export default Home
