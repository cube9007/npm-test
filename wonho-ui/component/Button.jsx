import styles from './button.module.scss';
import '../css/style.scss'

const Button = ({children, className, onClick, variant, size, color, square, disabled, shadow, round}) => {
  return (
    <>
      <button className=
{`${className ? className : ''}
${styles.button} 
${round ? styles.round : ''}
${square ? styles.square : ''}
${variant == 'outlined' ? styles.outlined :
  variant == 'contained' ? styles.contained : ''}
${shadow ? styles.shadow : ''}
${color == 'primary' ? styles.primary :
  color == 'white' ? styles.white :
  color == 'gray' ? styles.gray :
  color == 'graye' ? styles.graye : ''}
${size == 'large' ? styles.large :
  size == 'medium' ? styles.medium :
  size == 'small' ? styles.small :
  size == 'extraSmall' ? styles.extraSmall : ''}
${disabled ? styles.disabled : ''}
`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}

export default Button;