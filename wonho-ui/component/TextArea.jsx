import * as React from "react";
import styles from './textarea.module.scss';

const TextArea = ({
                rect,
                defaultValue,
                rows,
                maxLength,
                readOnly,
                disabled,
                onChange,
                onClick,
                onFocus,
                onKeyDown,
                wrapClassName,
                className,
                otlClassName,
                }) => {
  let [total, setTotal] = React.useState(defaultValue ? defaultValue.length : 0);
  const keyUp = (e) => {
    let number = e.target.value.length;
    if ( number < maxLength) {
      setTotal(number);  
    } else if ( number == maxLength ) {
      setTotal(number);  
      alert('최대 글자 수에 도달했습니다.')
    }
  }
  
  return (
    <>
    <div className={styles['textarea-wrap']}>
      <textarea 
        className={
          styles.textarea
          + ' ' +
          (className ? className : '' )
          + ' ' +
          (rect ? styles.rect : '')
        }
        defaultValue={defaultValue} 
        maxLength={maxLength}
        rows={rows}
        readOnly={readOnly}
        disabled={disabled} 
        onChange={keyUp}
        onClick={onClick}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
      />
      {
        maxLength ?
        <span className={styles['textarea-max']}> {total} / {maxLength} 글자 </span>
        :
        <></>
      }
    </div>
    </>
  );
}

export default TextArea;