import React, { useState } from 'react';

import './style.scss';

interface ICustomButton {
  textColor: string,
  backgroundColor: string,
  hoverTextColor: string,
  hoverBackgroundColor: string,
  horizontalPadding: number,
  verticalPadding: number,
  onClick?: () => void,
  customStyle?: any,
  children?: any
}

const CustomButton: React.FC<ICustomButton> = (props: ICustomButton) => {
  const [hovered, setHovered] = useState(false);

  const onMouseOver = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);

  return (
    <button 
      className='generic_button'
      style={{ 
        color: hovered ? props.hoverTextColor : props.textColor,
        backgroundColor: hovered ? props.hoverBackgroundColor : props.backgroundColor,
        paddingTop: props.verticalPadding,
        paddingBottom: props.verticalPadding,
        paddingRight: props.horizontalPadding,
        paddingLeft: props.horizontalPadding,
        border: `3px solid ${hovered ? props.hoverTextColor : props.textColor}`,
        ...props.customStyle
      }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default React.memo(CustomButton);
