import * as React from "react";
import styles from './tree.module.scss';

const Tree = ({
    icon,
    iconRotate,
    item,
    title,
    children,
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
      item ?
      <div className=
        {
          styles['tree-item'] 
          + ' ' + 
          (className ? className : '')
        }
        id={id}
        onClick={onClick}
      >
        <i className={styles.item}/>
        {title}
      </div>
      :
      <div className={styles['tree-wrap']}>
        <div 
          className=
          {
            styles['tree-summary'] 
            + ' ' + 
            (className ? className : '') 
          } 
          id={id}
          onClick={Click}
        >
          <div className={(open ? styles[`${iconRotate ? iconRotate : icon ? icon : 'deg90'}`] : '')}>
            {
              icon ? icon :
              <i className={styles.arrow}/>
            }
          </div>
          {title}
        </div>
        <div className={styles['tree-detail'] + ' ' + (open ? '' : styles.close)}>
          {children}
        </div>
      </div>
    }
    
    </>
  );
}

export default Tree;