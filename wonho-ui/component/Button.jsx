import * as React from 'react';
import styles from './button.module.scss';

const Button = ({theme='primary', 
                variant='normal', 
                size='medium', 
                radius='normal', 
                shadow, 
                bg, 
                otl, 
                color, 
                ripple,
                hoverBg,
                hoverOtl,
                hoverColor,
                hoverRadius,
                disabled, 
                className,
                onClick, 
                children }) => {
  // variant 조건문
  if (variant == 'contained') {
    otl = otl || 'transparent'
    bg = bg || theme
    // color ripple 조건문
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
      color = color || 'black'
      ripple = ripple || 'black'
    } else {
      color = color || 'white'
      ripple = ripple || 'white'
    }
    // disabled 조건문
    if (disabled) {
      color = 'white'
      bg = 'disabled'
      ripple = 'disabled'
      hoverBg = 'disabled'
    }
    // hoverBg 조건문
    if (
      theme == 'primary' ||
      theme == 'secondary' ||
      theme == 'tertiary'
    ) {
      hoverBg = hoverBg || theme + '_light' 
    } else if (theme == 'black') {hoverBg = hoverBg || 'gray3'} 
    else if (theme == 'gray1') {hoverBg = hoverBg || 'gray4'}
    else if (theme == 'gray2') {hoverBg = hoverBg || 'gray5'}
    else if (theme == 'gray3') {hoverBg = hoverBg || 'gray6'}
    else if (theme == 'gray4') {hoverBg = hoverBg || 'gray7'}
    else if (theme == 'gray5') {hoverBg = hoverBg || 'gray8'}
    else if (theme == 'gray6') {hoverBg = hoverBg || 'gray9'}
    else if (theme == 'gray7') {hoverBg = hoverBg || 'graya'}
    else if (theme == 'gray8') {hoverBg = hoverBg || 'grayb'}
    else if (theme == 'gray9') {hoverBg = hoverBg || 'grayc'}
    else if (theme == 'graya') {hoverBg = hoverBg || 'gray7'}
    else if (theme == 'grayb') {hoverBg = hoverBg || 'gray8'}
    else if (theme == 'grayc') {hoverBg = hoverBg || 'graya'}
    else if (theme == 'grayd') {hoverBg = hoverBg || 'grayb'}
    else if (theme == 'graye') {hoverBg = hoverBg || 'grayc'}
    else if (theme == 'grayf5') {hoverBg = hoverBg || 'grayd'}
    else if (theme == 'grayf8') {hoverBg = hoverBg || 'grayd'}
    else if (theme == 'white') {hoverBg = hoverBg || 'graye'}
  } 
  // outlined 조건문
  else if (variant == 'outlined') {
    color = color || theme
    otl = otl || theme
    bg = bg || 'transparent'
    // ripple 조건문
    if (
      theme == 'primary' ||
      theme == 'secondary' ||
      theme == 'tertiary'
      ) {
      ripple = ripple || theme
    } else {
      ripple = ripple || 'black'
    }
    // disabled 조건문
    if (disabled) {
      otl = 'disabled'
      color = 'disabled'
      ripple = 'disabled'
      hoverBg = 'transparent'
    }
    // hover 조건문
    if (
      theme == 'primary' ||
      theme == 'secondary' ||
      theme == 'tertiary' ||
      theme == 'black' ||
      theme == 'white'   
    ) {
      hoverBg = hoverBg || theme + '_15p'
    } else if (
      theme == 'gray1' ||
      theme == 'gray2' ||
      theme == 'gray3' ||
      theme == 'gray4' ||
      theme == 'gray5' ||
      theme == 'gray6' ||
      theme == 'gray7' ||
      theme == 'gray8' ||
      theme == 'gray9'
    ) {
      hoverBg = hoverBg || 'black_15p'
    } else {
      hoverBg = hoverBg || 'white_15p'
    }
  } else if (variant == 'normal') {
    color = color || theme
    otl = otl || 'transparent'
    bg = bg || 'transparent'
    // ripple 조건문
    if (
      theme == 'primary' ||
      theme == 'secondary' ||
      theme == 'tertiary'
      ) {
      ripple = ripple || theme
    } else {
      ripple = ripple || 'black'
    }
    // disabled 조건문
    if (disabled) {
      color = 'disabled'
      ripple = 'disabled'
      hoverBg = 'transparent'
    }
     // hover 조건문
     if (
      theme == 'primary' ||
      theme == 'secondary' ||
      theme == 'tertiary' ||
      theme == 'black' ||
      theme == 'white'   
    ) {
      hoverBg = hoverBg || theme + '_15p'
    } else if (
      theme == 'gray1' ||
      theme == 'gray2' ||
      theme == 'gray3' ||
      theme == 'gray4' ||
      theme == 'gray5' ||
      theme == 'gray6' ||
      theme == 'gray7' ||
      theme == 'gray8' ||
      theme == 'gray9'
    ) {
      hoverBg = hoverBg || 'black_15p'
    } else {
      hoverBg = hoverBg || 'white_15p'
    }
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
  const rippleStyle = (ripple) => {
    return ripple ? styles[`ripple-${ripple}`] : '';
  }
  const hoverBgStyle = (hoverBg) => {
    return hoverBg ? styles[`hover-bg-${hoverBg}`] : '';
  }
  const hoverOtlStyle = (hoverOtl) => {
    return hoverOtl ? styles[`hover-otl-${hoverOtl}`] : '';
  }
  const hoverColorStyle = (hoverColor) => {
    return hoverColor ? styles[`hover-color-${hoverColor}`] : '';
  }

  return (
    <>
      <button className=
      { 
        styles.button
        + ' ' + 
        (radius == 'round' ? styles['radius-round'] : 
        radius == 'rect' ? styles['radius-rect'] : 
        radius == 'normal' ? styles['radius-normal'] : '')
        + ' ' +
        (shadow ? styles.shadow : '')
        + ' ' +
        (colorStyle(color))
        + ' ' +
        (otlStyle(otl))
        + ' ' +
        (bgStyle(bg))
        + ' ' +
        (rippleStyle(ripple))
        + ' ' +
        (hoverBgStyle(hoverBg))
        + ' ' +
        (hoverOtlStyle(hoverOtl))
        + ' ' +
        (hoverColorStyle(hoverColor))
        + ' ' +
        (hoverRadius == 'round' ? styles['hover-radius-round'] : 
        hoverRadius == 'rect' ? styles['hover-radius-rect'] : 
        hoverRadius == 'normal' ? styles['hover-radius-normal'] : '')
        + ' ' +
        (size == 'large' ? styles.large :
        size == 'medium' ? styles.medium :
        size == 'small' ? styles.small :
        size == 'extraSmall' ? styles.extraSmall : '')
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