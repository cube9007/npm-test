import * as React from "react";
import styles from './popup.module.scss';

const Popup = ({
    open,
    onClose,
    children,
    className,
  }) => {
  
  return (
    <>
    <div className={styles['popup-wrap'] + ' ' + (open ? styles.open : '')}>
      <div className={styles.backdrop} onClick={onClose}/>
      <div className={styles.popup + ' ' + (className ? className : '')}>
        {children}
      </div>
    </div>
    </>
  );
}

export default Popup;