import React from 'react';

import Button from '../../../../components/button';
import Colors from '../../../../theme/colors';
import useWindowSize, { IWindowSize } from '../../../../custom-hooks/useWindowSize';

import './style.scss';

const Hero: React.FC = () => {
  const size: IWindowSize = useWindowSize();
  const isMobile = size.width && size.width <= 400;
  const backgroundImage = isMobile ? '/images/home_hero_mobile.jpg' : '/images/home_hero.jpg';

  return (
    <div style={{ backgroundImage: `url("${backgroundImage}")` }} className='hero_container'>
      <div className="hero__content">
        <h2 className='hero_content__title'>Smart technology for people living with epilepsy</h2>
        <Button 
          backgroundColor='transparent' 
          textColor={Colors.white} 
          hoverBackgroundColor={Colors.white}
          hoverTextColor={Colors.black}
          text='Buy Now' 
          horizontalPadding={60} 
          verticalPadding={15} 
        />
        <span className="hero_content__catchphrase">Comes with a 30-day Free trial subscription</span>
      </div>
    </div>
  )
}

export default Hero
