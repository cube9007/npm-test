import * as React from "react";
import styles from './popover.module.scss';

const Popup = ({
    X='left', Y='bottomEnd',
    open,
    onClose,
    children,
    className,
  }) => {
  const Close = (onClose) => {
    return onClose;
  }
  return (
    <>
    <div className={styles.backdrop + ' ' + (open ? styles.open : '')} onClick={Close(onClose)}/>
    <div className={
      styles.popover 
      + ' ' + 
      (X == 'left' ? styles['X-left']:
      X == 'leftEnd' ? styles['X-leftEnd']:
      X == 'center' ? styles['X-center']:
      X == 'rightEnd' ? styles['X-rightEnd']:
      X == 'right' ? styles['X-right']: '')
      + ' ' + 
      (Y == 'bottom' ? styles['Y-bottom']:
      Y == 'bottomEnd' ? styles['Y-bottomEnd']:
      Y == 'center' ? styles['Y-center']:
      Y == 'topEnd' ? styles['Y-topEnd']:
      Y == 'top' ? styles['Y-top']: '')
      + ' ' + 
      (X == 'center' && Y == 'center' ? styles.center : '')
      + ' ' + 
      (className ? className : '') 
      + ' ' + 
      (open ? styles.open : '')
    }>
      {children}
    </div>
    </>
  );
}

export default Popup;