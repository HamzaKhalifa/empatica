import React from 'react';

import CustomButton from '../../../../components/custom-button';
import Colors from '../../../../theme/colors';
import useWindowSize, { IWindowSize } from '../../../../custom-hooks/useWindowSize';
import useProgressiveImage from '../../../../custom-hooks/useProgressiveImage';

import './style.scss';

const Hero: React.FC = () => {
  const size: IWindowSize = useWindowSize();
  const isMobile = size.width && size.width <= 400;
  const backgroundImage = isMobile ? '/images/home_hero_mobile.jpg' : '/images/home_hero.jpg';
  const backgroundImageLoaded = useProgressiveImage(backgroundImage);
  
  return (
    <div className='hero_container' style={{ backgroundImage: `url(${backgroundImageLoaded || ''})` }}>
      <div className="hero__content">
        <h2 className='hero_content__title'>Smart technology for people living with epilepsy</h2>
        <CustomButton 
          backgroundColor='transparent' 
          textColor={Colors.white} 
          hoverBackgroundColor={Colors.white}
          hoverTextColor={Colors.black}
          horizontalPadding={60} 
          verticalPadding={15} 
        >Buy Now</CustomButton>
        <span className="hero_content__catchphrase">Comes with a 30-day Free trial subscription</span>
      </div>
    </div>
  )
}

export default Hero
