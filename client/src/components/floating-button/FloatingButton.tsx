import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../../theme/colors';

import './style.scss';

interface IFloatingButton {
  text: string,
  to: string
}

const FloatingButton: React.FC<IFloatingButton> = (props: IFloatingButton) => {
  return (
    <Link 
      to={props.to}
      style={{ color: colors.white, backgroundColor: colors.red }}
      className='floating_button'
    >
      {props.text}
    </Link>
  )
}

export default FloatingButton
