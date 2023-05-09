import * as React from 'react';
import styles from './textfield.module.scss';
import '../css/style.scss'


const TextField = ({
                  size,
                  radius,
                  disabled,
                  readOnly,
                  placeholder,
                  defaultValue,
                  onClick,
                  onFocus,
                  onKeyDown,
                  className
                  }) => {
  return (
    <>
      <input type='text'
      className={
        styles.textfield
        + ' ' + 
        (size == 'extraSmall' ? styles.extraSmall :
        size == 'small' ? styles.small :
        size == 'medium' ? styles.medium :
        size == 'large' ? styles.large : '')
        + ' ' + 
        (radius == 'round' ? styles.round : 
        radius == 'rect' ? styles.rect : '')
        + ' ' + 
        (className ? className : '')
      }
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onClick={onClick}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      />
    </>
  )
}

export default TextField;