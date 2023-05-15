import * as React from "react";
import styles from './loading.module.scss';

const Loading = ({
    color='primary',
  }) => {
  const colorStyle = (color) => {
    return color ? styles[`color-${color}`] : '';
  }
  return (
    <>
      <svg className={styles.loading} width="50" height="50" >
        <circle className={styles['loading-content'] + ' ' + colorStyle(color)} cx="25" cy="25" r="23" strokeWidth="4" strokeDashoffset={10}/>
      </svg>
    </>
  );
}

export default Loading;