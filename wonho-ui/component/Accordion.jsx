import * as React from "react";
import styles from './accordion.module.scss';

const Accordion = ({
    wrap,
    icon,
    iconLocation='right',
    iconRotate,
    children,
    title,
    id,
    onClick,
    className,
  }) => {
  const [open, setOpen] = React.useState(false);
  const Click = () => {
    setOpen(!open)
  }
  return (
    <>
    {
      wrap ?
      <div className={styles['accordion-wrap'] + ' ' + (className ? className : '')}>
        {children}
      </div>
      :
      <>
        <div 
          className={
            styles['accordion-summary'] 
            + ' ' + 
            (iconLocation == 'left' ? styles['icon-left'] : '')
            + ' ' + 
            (className ? className : '')
          } 
          id={id}
          onClick={Click}
        >
          {iconLocation=='right' ? title : <></>}
          <div className={(open ? styles[`${iconRotate ? iconRotate : icon ? icon : 'deg180'}`] : '')}>
            {icon ? icon : <i className={styles.arrow}/>}
          </div>
          {iconLocation=='left' ? title : <></>}
        </div>
        <div className={styles['accordion-detail'] + ' ' + (open ? '' : styles.close)}>
          {children}
        </div>
      </>
    }
    </>
  );
}

export default Accordion;