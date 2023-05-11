import * as React from "react";
import styles from './badge.module.scss';

const Badge = ({
    color='notification',
    radius='round',
    vertical='top',
    horizontal='right',
    max,
    dot,
    content,
    children,
    id,
    className,
  }) => {
  const colorStyle = (color) => {
    return color ? styles[`color-${color}`] : '';
  }
  if (max) {
    content > max 
    ? 
    content = max + '+'
    :
    content
  }
  return (
    <>
    <div className={styles['badge-wrap']}>
      {children}
      <div className={
        styles.badge
        + ' ' +
        (colorStyle(color))
        + ' ' +
        (radius == 'rect' ? styles['radius-rect']:
        radius == 'normal' ? styles['radius-normal']:
        radius == 'round' ? styles['radius-round']: '' )
        + ' ' +
        (vertical == 'top' ? styles['vertical-top']:
        vertical == 'bottom' ? styles['vertical-bottom']: '')
        + ' ' +
        (horizontal == 'left' ? styles['horizontal-left']:
        horizontal == 'right' ? styles['horizontal-right']: '')
        + ' ' +
        (dot ? styles.dot : '')
        + ' ' +
        (className ? className : '')
      }
        id={id}
      >
        {dot ? '' : content}
      </div>
    </div>
    </>
  );
}

export default Badge;