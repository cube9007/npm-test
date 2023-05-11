import * as React from "react";
import styles from './switch.module.scss';

const Switch = ({
                size='medium',
                color='primary',
                radius='round',
                defaultChecked,
                id,
                name,
                value,
                disabled,
                className,
                }) => {
  
  const colorStyle = (color) => {
    return color ? styles[`color-${color}`] : '';
  }
  return (
    <>
      <input type='checkbox' 
        className={
          styles.switch
          + ' ' +
          (colorStyle(color))
          + ' ' +
          (size == 'large' ? styles.large :
          size == 'medium' ? styles.medium :
          size == 'small' ? styles.small :
          size == 'extraSmall' ? styles.extraSmall : '')
          + ' ' +
          (radius == 'rect' ? styles['radius-rect'] :
          radius == 'normal' ? styles['radius-normal'] :
          radius == 'round' ? styles['radius-round'] : '')
          + ' ' +
          (className ? className : '')
        }
        disabled={disabled}
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />
    </>
  );
}

export default Switch;