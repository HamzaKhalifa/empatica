import React from 'react';

import Button from '../../../../components/button';
import Colors from '../../../../theme/colors';
import useWindowSize, { IWindowSize } from '../../../../custom-hooks/useWindowSize';

import './style.scss';

const RenderImage: React.FC = () => <img src='/images/embrace.jpg' className="embrace__image" alt=''/>;

const Embrace: React.FC = () => {
  const size: IWindowSize = useWindowSize();

  const isMobile = size.width && size.width <= 760;

  return (
    <div className="embrace_container">
      <div className="embrace__content">
        <img src={isMobile ? '/images/embrace_logo_mobile.png': '/images/embrace_logo.png'} 
          className='embrace_content__image' 
          alt=''
        />
        <h2 className='embrace_content__title'>Your companion for epilepsy management</h2>
        <p className='embrace_content__paragraph'>The Embrace watch uses advanced learning algorithms to identify tonic-cloning seizures and send alerts to caregivers. It also provides sleep, rest and physical activity analysis.</p>
        {isMobile && <RenderImage />}
        <Button 
          backgroundColor={Colors.red}
          hoverBackgroundColor={Colors.white}
          hoverTextColor={Colors.red}
          text='Discover Embrace Features'
          textColor={Colors.white}
          horizontalPadding={40}
          verticalPadding={15}
        />
      </div>
      {!isMobile && <RenderImage />}
    </div>
  )
}

export default Embrace
