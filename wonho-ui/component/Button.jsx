import * as React from 'react';
import styles from './button.module.scss';
import '../css/style.scss'


const Button = ({theme='primary', variant='normal', radius, square, shadow, bg, otl=theme, color, size='medium', disabled, className, onClick, children }) => {
  if (variant == 'contained') {
    color = color || 'white'
    otl = 'transparent'
    bg = theme
    if (
      theme == 'graya' || 
      theme == 'grayb' || 
      theme == 'grayc' || 
      theme == 'grayd' || 
      theme == 'graye' ||
      theme == 'grayf5' ||
      theme == 'grayf8' ||
      theme == 'white'
      ) {
      color = 'black'
    }
  } else if (variant == 'outlined') {
    color = color || theme
    otl = theme
    bg = 'white'
  } else if (variant == 'normal') {
    color = theme
    otl = 'transparent'
    bg = 'transparent'
  }

  const colorStyle = (color) => {
    return color ? styles[`color-${color}`] : '';
  }
  const otlStyle = (otl) => {
    return otl ? styles[`otl-${otl}`] : '';
  }
  const bgStyle = (bg) => {
    return bg ? styles[`bg-${bg}`] : '';
  }

  return (
    <>
      <button className=
      { 
        styles.button
        + ' ' + 
        (radius == 'round' ? styles.round : 
        radius == 'rect' ? styles.rect : '')
        + ' ' +
        (square ? styles.square : '')
        + ' ' +
        (shadow ? styles.shadow : '')
        + ' ' +
        (colorStyle(color))
        + ' ' +
        (otlStyle(otl))
        + ' ' +
        (bgStyle(bg))
        + ' ' +
        (size == 'large' ? styles.large :
        size == 'medium' ? styles.medium :
        size == 'small' ? styles.small :
        size == 'extraSmall' ? styles.extraSmall : '')
        + ' ' +
        (disabled ? styles.disabled : '')
        + ' ' +
        (className ? className : '' )
      }

        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}

export default Button;