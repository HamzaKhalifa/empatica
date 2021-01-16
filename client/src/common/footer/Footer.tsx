import React from 'react'

import Colors from '../../theme/colors';
import { Link } from 'react-router-dom';
import useWindowSize, { IWindowSize } from '../../custom-hooks/useWindowSize';

import './style.scss';

const Footer: React.FC = () => {
  const size: IWindowSize = useWindowSize();
  const isMobile = size.width && size.width <= 400;
  
  return (
    <div className='footer' style={{ backgroundColor: Colors.lightGrey }}>
      {isMobile && 
        <div style={{ color: Colors.darkGrey }} className="language_container">
          <span className="iconify" data-icon="mdi:earth" data-inline="false"></span>
          <span className='language'>English (US)</span>
        </div>
      }
      <div style={{ borderColor: Colors.darkGrey }} className="footer__buttons_container">
        <div className="footer_buttons_container__centralized">
          <Link style={{ color: Colors.darkGrey }} to='/' className='footer__button'>Company</Link>
          <Link style={{ color: Colors.darkGrey }} to='/' className='footer__button'>Careers</Link>
        </div>
      </div>

      <p 
        style={{ color: Colors.darkGrey }} 
        className="copyright"
      >
        2017 Empatica Inc. - ISO 13485 Cert. No. 9124.EPTC - All rights reserved
      </p>
    </div>
  )
}

export default Footer
