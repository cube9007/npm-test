import * as React from "react";
import styles from './chip.module.scss';
import Button from "./Button";

const Chip = ({
    size='medium',
    theme,
    variant='normal',
    bg,
    otl,
    color,
    btnTheme,
    iconBg,
    radius='round',
    deletable,
    deleteIcon,
    label,
    id,
    className,
  }) => {
  // variant = 'normal'
  if (variant == 'normal') {
    theme = theme || 'graye'
    if      (theme == 'black')  {bg=bg||'black', otl=otl||'black', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray1')  {bg=bg||'gray1', otl=otl||'gray1', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray2')  {bg=bg||'gray2', otl=otl||'gray2', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray3')  {bg=bg||'gray3', otl=otl||'gray3', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray4')  {bg=bg||'gray4', otl=otl||'gray4', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray5')  {bg=bg||'gray5', otl=otl||'gray5', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray6')  {bg=bg||'gray6', otl=otl||'gray6', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray7')  {bg=bg||'gray7', otl=otl||'gray7', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray8')  {bg=bg||'gray8', otl=otl||'gray8', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray9')  {bg=bg||'gray9', otl=otl||'gray9', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'graya')  {bg=bg||'graya', otl=otl||'graya', color='gray3', btnTheme='black', iconBg='grayc' }
    else if (theme == 'grayb')  {bg=bg||'grayb', otl=otl||'grayb', color='gray3', btnTheme='black', iconBg='grayc' }
    else if (theme == 'grayc')  {bg=bg||'grayc', otl=otl||'grayc', color='gray3', btnTheme='black', iconBg='grayc' }
    else if (theme == 'grayd')  {bg=bg||'grayd', otl=otl||'grayd', color='gray6', btnTheme='black', iconBg='grayc' }
    else if (theme == 'graye')  {bg=bg||'graye', otl=otl||'graye', color='gray6', btnTheme='black', iconBg='grayc' }
    else if (theme == 'grayf5') {bg=bg||'grayf5',otl=otl||'grayf5',color='gray6', btnTheme='black', iconBg='grayc' }
    else if (theme == 'grayf8') {bg=bg||'grayf8',otl=otl||'grayf8',color='gray6', btnTheme='black', iconBg='grayc' }
  }
  else if (variant == 'contained') {
    theme = theme || 'graye'
    otl == otl || 'transparent'
    if      (theme == 'black')  {bg=bg||'black', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray1')  {bg=bg||'gray1', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray2')  {bg=bg||'gray2', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray3')  {bg=bg||'gray3', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray4')  {bg=bg||'gray4', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray5')  {bg=bg||'gray5', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray6')  {bg=bg||'gray6', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray7')  {bg=bg||'gray7', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray8')  {bg=bg||'gray8', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'gray9')  {bg=bg||'gray9', color='white', btnTheme='white', iconBg='white9'}
    else if (theme == 'graya')  {bg=bg||'graya', color='gray3', btnTheme='black', iconBg='grayc' }
    else if (theme == 'grayb')  {bg=bg||'grayb', color='gray3', btnTheme='black', iconBg='grayc' }
    else if (theme == 'grayc')  {bg=bg||'grayc', color='gray3', btnTheme='black', iconBg='grayc' }
    else if (theme == 'grayd')  {bg=bg||'grayd', color='gray6', btnTheme='black', iconBg='grayc' }
    else if (theme == 'graye')  {bg=bg||'graye', color='gray6', btnTheme='black', iconBg='grayc' }
    else if (theme == 'grayf5') {bg=bg||'grayf5',color='gray6', btnTheme='black', iconBg='grayc' }
    else if (theme == 'grayf8') {bg=bg||'grayf8',color='gray6', btnTheme='black', iconBg='grayc' }
  }
  else if (variant == 'outlined') {
    theme= theme || 'gray9'
    bg == bg || 'transparent'
    if      (theme == 'black')  {otl=otl||'black', color='black', btnTheme='black', iconBg='black' }
    else if (theme == 'gray1')  {otl=otl||'gray1', color='gray1', btnTheme='gray1', iconBg='gray1' }
    else if (theme == 'gray2')  {otl=otl||'gray2', color='gray2', btnTheme='gray2', iconBg='gray2' }
    else if (theme == 'gray3')  {otl=otl||'gray3', color='gray3', btnTheme='gray3', iconBg='gray3' }
    else if (theme == 'gray4')  {otl=otl||'gray4', color='gray4', btnTheme='gray4', iconBg='gray4' }
    else if (theme == 'gray5')  {otl=otl||'gray5', color='gray5', btnTheme='gray5', iconBg='gray5' }
    else if (theme == 'gray6')  {otl=otl||'gray6', color='gray6', btnTheme='gray6', iconBg='gray6' }
    else if (theme == 'gray7')  {otl=otl||'gray7', color='gray6', btnTheme='gray6', iconBg='gray6' }
    else if (theme == 'gray8')  {otl=otl||'gray8', color='gray6', btnTheme='gray6', iconBg='gray6' }
    else if (theme == 'gray9')  {otl=otl||'gray9', color='gray6', btnTheme='gray6', iconBg='gray6' }
    else if (theme == 'graya')  {otl=otl||'graya', color='gray6', btnTheme='gray6', iconBg='gray6' }
    else if (theme == 'grayb')  {otl=otl||'grayb', color='gray6', btnTheme='gray6', iconBg='gray6' }
    else if (theme == 'grayc')  {otl=otl||'grayc', color='gray6', btnTheme='gray6', iconBg='gray6' }
    else if (theme == 'grayd')  {otl=otl||'grayd', color='gray6', btnTheme='gray6', iconBg='gray6' }
    else if (theme == 'graye')  {otl=otl||'graye', color='gray6', btnTheme='gray6', iconBg='gray6' }
    else if (theme == 'grayf5') {otl=otl||'grayf5',color='gray6', btnTheme='gray6', iconBg='gray6'}
    else if (theme == 'grayf8') {otl=otl||'grayf8',color='gray6', btnTheme='gray6', iconBg='gray6'}
  }
  const bgStyle = (bg) => {
    return bg ? styles[`bg-${bg}`] : '';
  }
  const otlStyle = (otl) => {
    return otl ? styles[`otl-${otl}`] : '';
  }
  const colorStyle = (color) => {
    return color ? styles[`color-${color}`] : '';
  }
  const iconBgStyle = (iconBg) => {
    return iconBg ? styles[`bg-${iconBg}`] : '';
  }
  
  return (
    <>
      <div className={
        styles.chip
        + ' ' +
        (deletable == 'right' ? styles['deletable-right'] : 
        deletable == 'left' ? styles['deletable-left'] : '')
        + ' ' +
        (radius == 'rect' ? styles['radius-rect'] :
        radius == 'normal' ? styles['radius-normal'] :
        radius == 'round' ? styles['radius-round'] : '')
        + ' ' +
        (bgStyle(bg))
        + ' ' +
        (otlStyle(otl))
        + ' ' +
        (colorStyle(color))
        + ' ' +
        (size == 'large' ? styles['size-large'] :
        size == 'medium' ? styles['size-medium'] :
        size == 'small' ? styles['size-small'] :
        size == 'extraSmall' ? styles['size-extraSmall'] : '')
        + ' ' +
        (className ? className : '')
      }
      id={id}>
        {
          deletable == 'left' ? 
          <Button 
          variant={
            (variant == 'outlined' ? 'outlined' : 'normal')
          } 
          className={
            styles.btn
            + ' ' +
            (size == 'large' ? styles['size-large'] :
            size == 'medium' ? styles['size-medium'] :
            size == 'small' ? styles['size-small'] :
            size == 'extraSmall' ? styles['size-extraSmall'] : '')
          }
            theme={btnTheme}>
              {
                deleteIcon 
                ?
                deleteIcon
                :
                <i 
                  className={
                    styles.icon 
                    + ' ' + 
                    (variant == 'outlined' ? styles.outlined : '')
                    + ' ' + 
                    (iconBgStyle(iconBg))
                  } 
                
                />
              }
          </Button>
          :
          <></>
        }
        {label}
        {
          deletable == 'right' ? 
          <Button 
          variant={
            (variant == 'outlined' ? 'outlined' : 'normal')
          } 
          className={
            styles.btn
            + ' ' +
            (size == 'large' ? styles['size-large'] :
            size == 'medium' ? styles['size-medium'] :
            size == 'small' ? styles['size-small'] :
            size == 'extraSmall' ? styles['size-extraSmall'] : '')
          }
            theme={btnTheme}>
              {
                deleteIcon 
                ?
                deleteIcon
                :
                <i 
                  className={
                    styles.icon 
                    + ' ' + 
                    (variant == 'outlined' ? styles.outlined : '')
                    + ' ' + 
                    (iconBgStyle(iconBg))
                  } 
                
                />
              }
          </Button>
          :
          <></>
        }
      </div>
    </>
  );
}

export default Chip;