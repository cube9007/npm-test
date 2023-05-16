import * as React from "react";
import styles from './location.module.scss';

const Location = ({
    number=2,
    href1,
    href2,
    href3,
    href4,
    hrefLast,
    depth1='Home',
    depth2='Depth2',
    depth3='Depth3',
    depth4='Depth4',
    last='Last',
    icon,

    id,
    className,
  }) => {
  return (
    <>
      <div className={styles['location-wrap'] + ' ' + (className ? className : '')}
        id={id}
      >
        <a href={href1} className={styles['location-light']}> {depth1} </a>
        {icon ? icon : <i className={styles['location-arrow']} />}
        {number > 2 ? 
          <>
            <a href={href2} className={styles['location-light']}> {depth2} </a>
            {icon ? icon : <i className={styles['location-arrow']} />}
          </>
          : <></>
        } 
        {number > 3 ? 
          <>
            <a href={href3} className={styles['location-light']}> {depth3} </a>
            {icon ? icon : <i className={styles['location-arrow']} />}
          </>
          : <></>
        } 
        {number > 4 ? 
          <>
            <a href={href4} className={styles['location-light']}> {depth4} </a>
            {icon ? icon : <i className={styles['location-arrow']} />}
          </>
          : <></>
        } 
        <a href={hrefLast} className={styles['location-bold']}> {last} </a>
      </div>
    </>
  );
}

export default Location;