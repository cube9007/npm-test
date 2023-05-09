import * as React from "react";
import styles from './textarea.module.scss';

function TextArea({
                defaultValue,
                rows,
                maxLength,
                readOnly,
                disabled,
                wrapClassName,
                className,
                otlClassName,
                }) {
  let [total, setTotal] = React.useState(defaultValue ? defaultValue.length : 0);
  function keyUp(e) {
    let number = e.target.value.length;
    if ( number < maxLength) {
      setTotal(number);  
    } else if ( number == maxLength ) {
      setTotal(number);  
      alert('최대 글자 수에 도달했습니다.')
    }
  }

  return (
    <div className={
      styles['textarea-wrap']
      + ' ' + 
      (wrapClassName ? wrapClassName : '' )
    }>
      <textarea 
        defaultValue={defaultValue} 
        className={
          styles.textarea
          + ' ' + 
          (className ? className : '' )
        }
        maxLength={maxLength}
        rows={rows}
        readOnly={readOnly}
        disabled={disabled} 
        onChange={keyUp}  
      />
      <span className={styles['textarea-span']} > {total} / {maxLength} 글자 </span>
      <div className={
        styles['textarea-otl']
        + ' ' + 
        (otlClassName ? otlClassName : '' )
      }/>
    </div>
  );
}

export default TextArea;