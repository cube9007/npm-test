import * as React from "react";
import styles from './pagination.module.scss';
import Button from './Button';

const Pagination = ({
    color='primary',
    max=5,
    endBtn=true,
    size='large',
    className,
  }) => {
  const [number, setNumber] = React.useState(1);
  const [page, setPage] = React.useState(1);
  const [order, setOrder] = React.useState(1);
  const FirstBtn = () => {
    setNumber(1)
    setPage(1)
    setOrder(1)
  }
  const MinusBtn = () => {
    if ( page !== 1 ) {
      setPage(page - 1)
      if(page < 4 || page > max - 2) {
        setOrder(order - 1)
      }  else {
        setNumber(number - 1)
      }
    }
  }
  const PlusBtn = () => {
    if ( page !== max ) {
      setPage(page + 1)
      if(page < 3 || page > max - 3) {
        setOrder(order + 1)
      }  else {
        setNumber(number + 1)
      }
    }
  }
  const LastBtn = () => {
    if ( max > 5) {
      setNumber(max - 4)
      setPage(max)
      setOrder(5)
    } else {
      setPage(max)
      setOrder(max)
    }
  }
  const Btn1 = () => {
    if ( max < 6) {
      setOrder(1)
      setPage(1)
    } else {
      if ( order == 1 ) {}
      else if (order == 2) {
        setPage(1)
        setOrder(1)
      } else if (order == 3) {
        setPage(page - 2)
        if (page == 3) {
          setOrder(1)
        } else if ( page == 4) {
          setOrder(2)
          setNumber(number - 1)
        } else if ( page > 4) {
          setNumber(number - 2)
        }
      } else if (order == 4) {
        setPage(page - 3)
        if ( max == 6 ) {
          setOrder(order - 2)
          setNumber(number -1) 
        } else if ( max > 6) {
          setOrder(order - 1)
          setNumber(number - 2)
        }
      } else if (order == 5) {
        setPage(page - 4)
        if (max == 6) {
          setOrder(order - 3)
          setNumber(number - 1)
        } else if (max > 6) {
          setOrder(order - 2)
          setNumber(number - 2)
        }
      }
    }
    
  }
  const Btn2 = () => {
    if ( max < 6) {
      setOrder(2)
      setPage(2)
    } else {
      if ( order == 1) {
        setPage(2)
        setOrder(2)
      } else if (order == 3) {
        setPage(page - 1)
        if (page == 3) {
          setOrder(order - 1)
        } else if (page > 3) {
          setNumber(number - 1)
        }
      } else if (order == 4) {
        setPage(page - 2)
        setOrder(order - 1)
        setNumber(number - 1)
      } else if (order == 5) {
        setPage(page - 3)
        setOrder(order - 2)
        setNumber(number - 1)
      }
    }
  }
  const Btn3 = () => {
    if ( max < 6) {
      setOrder(3)
      setPage(3)
    } else {
      if (order == 1 || order == 2) {
        setPage(3)
        setOrder(3)
      } else if (order == 4 || order == 5) {
        setPage(max - 2)
        setOrder(3)
      }
    }
  }
  const Btn4 = () => {
    if ( max < 6) {
      setOrder(4)
      setPage(4)
    } else {
      if ( order == 5) {
        setPage(4)
        setOrder(4)
      } else if (order == 3) {
        setPage(page + 1)
        if (page == (max - 2)) {
          setOrder(order + 1)
        } else if (page < (max - 2)) {
          setNumber(number + 1)
        }
      } else if (order == 2) {
        setPage(page + 2)
        setOrder(order + 1)
        setNumber(number + 1)
      } else if (order == 1) {
        setPage(page + 3)
        setOrder(order + 2)
        setNumber(number + 1)
      }
    }
  }
  const Btn5 = () => {
    if ( max < 6) {
      setOrder(5)
      setPage(5)
    } else {
      if ( order == 5 ) {}
      else if (order == 4) {
        setPage(max)
        setOrder(5)
      } else if (order == 3) {
        setPage(page + 2)
        if (page == (max - 2)) {
          setOrder(5)
        } else if ( page == (max - 3)) {
          setOrder(4)
          setNumber(number + 1)
        } else if ( page < (max - 3)) {
          setNumber(number + 2)
        }
      } else if (order == 2) {
        setPage(page + 3)
        if ( max == 6 ) {
          setOrder(order + 2)
          setNumber(number + 1) 
        } else if ( max > 6) {
          setOrder(order +1)
          setNumber(number + 2)
        }
      } else if (order == 1) {
        setPage(page + 4)
        if (max == 6) {
          setOrder(order + 3)
          setNumber(number + 1)
        } else if (max > 6) {
          setOrder(order + 2)
          setNumber(number + 2)
        }
      }
    }
  }

  const colorStyle = (color) => {
    return color ? styles[`color-${color}`] : '';
  }
  return (
    <>
      <div className={styles['pagination-wrap'] + ' ' + (className ? className : '')}>
        {endBtn ? 
        <Button theme="grayc" square radius="round" size={size} hoverBg='graye' className={styles['pagination-btn']} onClick={FirstBtn} disabled={(page == 1 ? true : false)}>
          <i className={styles['pagination-left-end'] + ' ' + (page == 1 ? styles.disabled : '')} />
        </Button>
        : 
        <></>}
        <Button theme="grayc" square radius="round" size={size} hoverBg='graye' className={styles['pagination-btn']} onClick={MinusBtn} disabled={(page == 1 ? true : false)}>
          <i className={styles['pagination-left'] + ' ' + (page == 1 ? styles.disabled : '')} />
        </Button>
        
        <Button theme="grayc" square radius="round" size={size} color='black' hoverBg='graye' className={styles['pagination-btn'] + ' ' + (colorStyle(color)) + ' ' + (order == 1 ? styles.active : '')} onClick={Btn1}> {number} </Button>
        {max > 1 ? <Button theme="grayc" square radius="round" size={size} color='black' hoverBg='graye' className={styles['pagination-btn'] + ' ' + (colorStyle(color)) + ' ' + (order == 2 ? styles.active : '')} onClick={Btn2}> {number + 1} </Button> : <></>}
        {max > 2 ? <Button theme="grayc" square radius="round" size={size} color='black' hoverBg='graye' className={styles['pagination-btn'] + ' ' + (colorStyle(color)) + ' ' + (order == 3 ? styles.active : '')} onClick={Btn3}> {number + 2} </Button> : <></>}
        {max > 3 ? <Button theme="grayc" square radius="round" size={size} color='black' hoverBg='graye' className={styles['pagination-btn'] + ' ' + (colorStyle(color)) + ' ' + (order == 4 ? styles.active : '')} onClick={Btn4}> {number + 3} </Button> : <></>}
        {max > 4 ? <Button theme="grayc" square radius="round" size={size} color='black' hoverBg='graye' className={styles['pagination-btn'] + ' ' + (colorStyle(color)) + ' ' + (order == 5 ? styles.active : '')} onClick={Btn5}> {number + 4} </Button> : <></>}

        <Button theme="grayc" square radius="round" size={size} hoverBg='graye' className={styles['pagination-btn']} onClick={PlusBtn} disabled={(page == max ? true : false)}>
          <i className={styles['pagination-right'] + ' ' + (page == max ? styles.disabled : '')} />
        </Button>
        {endBtn ? 
        <Button theme="grayc" square radius="round" size={size} hoverBg='graye' className={styles['pagination-btn']} onClick={LastBtn} disabled={(page == max ? true : false)}>
          <i className={styles['pagination-right-end'] + ' ' + (page == max ? styles.disabled : '')} />
        </Button>
        : 
        <></>}
      </div>
    </>
  );
}

export default Pagination;