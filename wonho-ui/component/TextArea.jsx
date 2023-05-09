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
                className,
                }) => {
  return (
    <>
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
        onChange={onChange}
        onClick={onClick}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
      />
    </>
  );
}

export default TextArea;